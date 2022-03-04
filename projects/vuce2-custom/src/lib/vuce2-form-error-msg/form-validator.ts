
export class FormValidator {

    static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
        const config = {
          'required': `El campo ${fieldName} es obligatorio.`,
          'minlength': `El campo ${fieldName} debe tener como mínimo ${validatorValue.requiredLength} caracteres.`,
          'maxlength': `El campo ${fieldName} debe tener como máximo ${validatorValue.requiredLength} caracteres.`,    
          'email': 'Debe ser un email válido!',
          'equalsTo': 'Los campos no son iguales',
          'pattern': `El campo ${fieldName} es inválido`
        };
    
        return config[validatorName];
      }



}


