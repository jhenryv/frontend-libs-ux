import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
//import { FileUploadService } from "./file-upload.service";
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Vuce2UploadFileService } from './vuce2-upload-file.service';


import Swal from 'sweetalert2';
import { UFUtils, UF_MENSAJES } from './vuce2-upload-file.utils';
import { IUploadConfig } from './vuce2-upload-file.interface';
import { IStatusResponse } from '../interfaces';

@Component({
    selector: 'vuce2-upload-file',
    templateUrl: './vuce2-upload-file.component.html',
    styleUrls: ['./vuce2-upload-file.component.scss']
})

export class Vuce2UploadFileComponent {
    form: FormGroup;
    progress: number = 0;
    displayText: string = null;
    isFileAccept: boolean = false;
    isFileReject: boolean = false;
    isLoading: boolean = false;
    hasErrorFile:boolean=false;
    errorFileMessage:string='';
    acceptedFiles: string = ''; // Listado de extenciones provenientes del config (array por string)

    @Input()
    config: IUploadConfig

    @Output() uploadResp: EventEmitter<IStatusResponse> = new EventEmitter<IStatusResponse>();

    @ViewChild('inputFile', { static: false }) inputVar: ElementRef;

    constructor(
        public fb: FormBuilder,
        public vuce2UploadFileService: Vuce2UploadFileService
    ) {
        this.form = this.fb.group({
            //name: [''],
            file: [null]
        });
    }

    async ngOnInit() {
        console.log(this.form.get('file').value);
        await this.setAceptedFiles();
    }

    handleChangeFile= async (event: any)=> {
        this.onResetUploadHint();
        const file = (event.target as HTMLInputElement).files[0];
        console.log(file);
        if (file) {
            const peso = UFUtils.convertBytesToMb(file.size);
            this.displayText = `${file.name} (${peso}MB)`;
            // VALIDACIONES

            // validar por tipo de extencion
            try {
                await UFUtils.validarArchivoSeleccionado(
                    file,
                    this.config.tiposPermitidos
                )
                
            } catch (error) {
                console.log(error);
                this.setErrorFile(error.msg);
                return false;
            }

            // validar por peso 
            try {
                await UFUtils.validarArchivoParaSubir(
                    file,
                    this.config.pesoMaximoEnMB,
                    this.config.tiposPermitidos
                )
            } catch (error) {
                this.setErrorFile(error.msg);
                return false;
            }


            // Paso las validaciones
            this.form.patchValue({
                file: file
            });
            
            this.isFileAccept = true;
            this.form.get('file').updateValueAndValidity()
        }
        else{
            console.log('no cargo nada');
            this.onResetFormUpload();
            this.onResetUploadControl();
            this.onResetUploadHint();
        }
    }

    submitFile() {
        this.vuce2UploadFileService.addFile(
            this.config.urlUpload,
            this.config.idUser,
            this.form.value.file
        ).subscribe((event: HttpEvent<any>) => {
            this.isLoading = true;
            switch (event.type) {
                case HttpEventType.Sent:
                    console.log('Request has been made!');
                    break;
                case HttpEventType.ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case HttpEventType.UploadProgress:
                    this.progress = Math.round(event.loaded / event.total * 100);
                    console.log(`Uploaded! ${this.progress}%`);
                    break;
                case HttpEventType.Response:
                    console.log('User successfully created!', event.body);
                    this.isLoading = false;
                    if (event.body.success) {
                        this.onUploadSuccess(event.body)
                    } else {
                        const hasServerMessage = event.body.messages && event.body.messages.length > 0;
                        const errorMessage = hasServerMessage ?
                            event.body.messages[0] :
                            UF_MENSAJES.ERROR_INFORMACION_ARCHIVO;
                        this.onUploadError(errorMessage);
                    }
                    break;
            }
        }, err => {
            const errorMessage = err && err.error
                && err.error.state && err.error.state === 'rejected' ?
                UF_MENSAJES.ERROR_ARCHIVO_REJECTED :
                UF_MENSAJES.ERROR_CARGA_ARCHIVO;
            this.onUploadError(errorMessage);
        });
    }

    //#region RESET
    onResetFormUpload() {
        this.progress = 0;
        this.form.get('file').setValue(null);
        this.isFileAccept = false;
    }

    onResetUploadControl() {
        this.displayText = '';
        console.log(this.inputVar.nativeElement);
        this.inputVar.nativeElement.value = null;
        this.isFileAccept=false;
    }

    onResetUploadHint(){
        this.isFileAccept=false;
        this.isFileReject=false;
        this.hasErrorFile=false;
        this.errorFileMessage = '';
    }
    //#endregion

    onUploadSuccess(response: any) {
        this.onResetFormUpload();
        this.onResetUploadControl();
        const message = response.messages && response.messages.length > 0 ? response.messages[0] : UF_MENSAJES.SUCCESS_ARCHIVO_SUBIDO;
        this.uploadResp.emit(response);
        Swal.fire({
            icon: 'success',
            title: message,
        });
    }

    onUploadError(message: string) {
        this.onResetFormUpload();
        Swal.fire({
            icon: 'error',
            title: message,
        });
    }

    setAceptedFiles = () => {
        return new Promise<void>(
            (resolve) => {
                this.acceptedFiles = UFUtils.convertirExtensionAString(this.config.tiposPermitidos);
                resolve();
            });
    }

    setErrorFile(msg:string){
        this.isFileAccept=false;
        this.isFileReject=true;
        this.hasErrorFile=true;
        this.errorFileMessage = msg;
    }

}
