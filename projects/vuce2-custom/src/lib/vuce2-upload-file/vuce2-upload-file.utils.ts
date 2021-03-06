export const UF_MENSAJES = {
    ERROR_CARGA_ARCHIVO: 'Ocurrió un error al cargar el archivo.',
    ERROR_ARCHIVO_REJECTED: 'La carga de archivo fue rechazada por el servidor. ' +
        'Esto puede deberse a que se excedió el tamaño de solicitud máxima permitida.',
    ERROR_INFORMACION_ARCHIVO: 'Ocurrió un error al obtener información del archivo.',
    SUCCESS_ARCHIVO_SUBIDO: 'El archivo se guardó correctamente.',
    DEFAULT_TEXT: 'Seleccione archivo.',
    ERROR_OBTENER_INFO_ARCHIVO: 'Error al obtener información del archivo: ',
    DESCARGA_NO_AUTORIZADA: 'No se puede solicitar la descarga: Identificador de archivo no válido.',
    ERROR_ELIMINAR_BORRADOR: 'Ocurrió un error al eliminar el borrador del archivo.',
    ELIMINAR_NO_AUTORIZADO: 'No se puede solicitar la eliminación: Identificador de archivo no válido.',
    CONFIRM_ELIMINAR: '¿Está seguro que desea eliminar el elemento?',
    ERROR_ELIMINAR_ARCHIVO: 'Ocurrió un error al eliminar el archivo.',
    DELETE_SUCCESS: 'El archivo fue eliminado correctamente.',
    OPERACION_INVALIDA: 'No se puede realizar la operación: Identificador de archivo no válido.',
    CONFIRM_UPDATE_TAGS: '¿Está seguro que desea actualizar las etiquetas?',
    SUCCESS_UPDATE_TAGS: 'Las etiquetas fueron actualizadas correctamente.',
    ERROR_UPDATE_TAGS: 'Ocurrió un error al actualizar las etiquetas',
    DEFAULT_EMPTY_HISTORY: 'No se encontró datos históricos del archivo',
    ERROR_LOAD_HISTORY_DATA: 'Error: no se pudo obtener datos históricos del archivo',
    ERROR_DOWNLAOD_FILE: 'Ocurrió un error al descargar el archivo'
};



export const UFUtils = {

    obtenerExtensionNombreArchivo: (nombreArchivo) => {
        const regExGetExtensionArchivo = /(?:\.([^.]+))?$/;
        return regExGetExtensionArchivo.exec(nombreArchivo)[1];
    },

    extensionDeArchivoEsPermitida: (extension: string, tiposPermitidos: string[] | string) => {
        if (!extension) { return false; }

        if (tiposPermitidos === '*') { return true; }
        // verificar si "tipos permitidos" es array, sino convertir la cadena a array
        // en ambos casos retornar un array en LowerCase
        const arrayExtensionesAceptadas = Array.isArray(tiposPermitidos) ?
            tiposPermitidos.map(x => x.toLowerCase().replace(/[. ]/g, "")) :
            tiposPermitidos.toLowerCase().replace(/[. ]/g, "").split(",");

        // buscar en las extensiones, convirtendo a lower case
        return arrayExtensionesAceptadas.indexOf(extension.toLowerCase()) !== -1;
    },

    // Devuelve las extenciones en un string (si provienen de un array)
    convertirExtensionAString: (extensiones: string[] | string) => {
        return Array.isArray(extensiones) ? extensiones.join(",") : extensiones;
    },

    getHexSignatureByExtension: (extensionArchivo) => {
        const extensionLC = extensionArchivo.toLowerCase();
        return UFUtils.mimeSignatureDictionary.find(x => x.filetype === extensionLC);
    },

    mimeSignatureDictionary: [
        { filetype: 'bmp', signature: '424D321' },
        { filetype: 'doc', signature: 'D0CF11E0' },
        { filetype: 'docx', signature: '504B34' },
        { filetype: 'jfif', signature: 'FFD8FFE0' },
        { filetype: 'jpeg', signature: 'FFD8FFE0' },
        { filetype: 'jpg', signature: 'FFD8FFE0' },
        { filetype: 'odp', signature: '504B34' },
        { filetype: 'ods', signature: '504B34' },
        { filetype: 'odt', signature: '504B34' },
        { filetype: 'pdf', signature: '25504446' },
        { filetype: 'png', signature: '89504E47' },
        { filetype: 'pps', signature: 'D0CF11E0' },
        { filetype: 'ppsx', signature: '504B34' },
        { filetype: 'ppt', signature: 'D0CF11E0' },
        { filetype: 'pptx', signature: '504B34' },
        { filetype: 'rtf', signature: '7B5C7274' },
        { filetype: 'signnet', signature: '308069' },
        { filetype: 'xls', signature: 'D0CF11E0' },
        { filetype: 'xlsx', signature: '504B34' },
        { filetype: 'zip', signature: '504B34' },
        { filetype: '7z', signature: '377ABCAF' },
        { filetype: 'exe', signature: '4D5A500' },
        { filetype: 'rar', signature: '52617221' }],

    convertMbToBytes: (mb: number) => {
        return mb * 1024 * 1024;
    },

    convertBytesToMb: (bytes: number)=>{
        return (bytes / 1024 / 1024).toFixed(2);
    },

    ///
    //  ACCIONES EXPORT
    ///

    validarArchivoSeleccionado: (
        file: any,
        tiposPermitidos: string[] | string,
        //preservarNombreArchivo: boolean,
        //nombreArchivoOriginal: string
    ): Promise<{ msg?: string }> => {

        return new Promise((resolve, reject) => {

            // VALIDAR - EXTENSION VALIDA
            const extensionArchivo = UFUtils.obtenerExtensionNombreArchivo(file.name);
            //console.log(extensionArchivo);
            const extensionArchivoValida = UFUtils.extensionDeArchivoEsPermitida(
                extensionArchivo,
                tiposPermitidos
            );

            //console.log(extensionArchivoValida);

            if (!extensionArchivoValida) {

                //const msgSeleccionArchivo = UFUtils.buildMensajeSeleccionArchivo();

                // reject({
                //     msg: `Extensión de archivo no válida. ${msgSeleccionArchivo}`
                // });
                reject({
                    msg: `Extensión de archivo (${extensionArchivo}) no es válida.`
                });
                return;
            }

            // VALIDAR - PRESERVAR NOMBRE
            // if (
            //     preservarNombreArchivo &&
            //     nombreArchivoOriginal &&
            //     nombreArchivoOriginal !== file.name
            // ) {

            //     const msgSeleccionArchivo = GaUtils.buildMensajeSeleccionArchivo(
            //         nombreArchivoOriginal
            //     );

            //     reject({
            //         msg: `Nombre de archivo no válido. ${msgSeleccionArchivo}`
            //     });
            //     return;
            // }

            //TODO: VALIDAR MIME
            const filereader = new FileReader();

            filereader.onloadend = (evt: any) => {
                if (evt.target.readyState === FileReader.DONE) {
                    const uint = new Uint8Array(evt.target.result);
                    const bytes = [];

                    uint.forEach((byte) => {
                        bytes.push(byte.toString(16));
                    });

                    const hexSignature = bytes.join('').toUpperCase();
                    //console.log(hexSignature);

                    // buscar la extension en el diccionario de mimes
                    const entry = UFUtils.getHexSignatureByExtension(extensionArchivo);
                    //console.log(entry);
                    if (entry == undefined) {//Si no se encontro en el diccionario, pasa;
                        resolve({});
                    }

                    // determinar si el hexSignature del diccionario hace match con el hexSignature del archivo
                    const mimeValido = entry && entry.signature === hexSignature;

                    if (!mimeValido) {

                        //const msgSeleccionArchivo = GaUtils.buildMensajeSeleccionArchivo();
                        reject({
                            msg: `Formato de archivo no válido.`
                        });
                        return;

                    } else {
                        resolve({});
                    }
                }
            };

            const blob = file.slice(0, 4);

            filereader.readAsArrayBuffer(blob);

        });
    },

    validarArchivoParaSubir: (file: any, pesoMaximoMb: number, tiposPermitidos: string[] | string): Promise<{ msg?: string }> => {

        return new Promise((resolve, reject) => {

            // vaidar archivo no seleccionado
            if (!file) {
                reject({msg:'Es necesario seleccionar un archivo para cargar'});
                return;
            }

            // Validar envío de archivo vacío
            if (file.size === 0) {
                reject({msg:'No se puede cargar un archivo vacío'});
                return;
            }

            // Validar peso máximo permitido del archivo
            if (file.size > UFUtils.convertMbToBytes(pesoMaximoMb)) {
                const msg = `El archivo excede el tamaño máximo permitido (${pesoMaximoMb} MB)`;
                reject({msg});
                return;
            }

            // Validar extension de archivo

            const msgExtensionNoValida = "No se puede cargar el archivo: extensión no válida.";

            const extensionArchivo = UFUtils.obtenerExtensionNombreArchivo(file.name);
            if (!extensionArchivo) {
                reject({msg: msgExtensionNoValida});
                return;
            }

            if (!UFUtils.extensionDeArchivoEsPermitida(extensionArchivo, tiposPermitidos)) {
                reject({msg: msgExtensionNoValida});
                return;
            }

            resolve({});

        });

    },

    formatearPesoArchivo: (pesoEnBytes: number) => {
        const pesoEnKBytes = (pesoEnBytes / (1024)).toFixed(0);
        const pesoEnKBytesFormateado = pesoEnKBytes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return pesoEnKBytesFormateado + " " + "KB";
    }
}

