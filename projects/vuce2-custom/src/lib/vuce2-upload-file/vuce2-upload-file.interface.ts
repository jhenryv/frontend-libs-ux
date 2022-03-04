export interface IUploadConfig {
    urlUpload:          string;
    idUser:             string;
    label?:             string;
    disabled?:          boolean;
    tiposPermitidos?:   string[] | string;
    pesoMaximoEnMB?:    number;
    showHintInfo?:      boolean;
}