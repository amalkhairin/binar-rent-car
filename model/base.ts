import { AjvValidator, Model } from "objection";

export class ModelWithValidator extends Model {
  static createValidator() {
    return new AjvValidator({
      onCreateAjv: (ajv) => {
        
      },
      options: {
        allErrors: true,
        validateSchema: false,
        ownProperties: true,
      },
    });
  }
}
