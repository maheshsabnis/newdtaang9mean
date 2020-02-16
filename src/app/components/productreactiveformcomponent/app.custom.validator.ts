import { AbstractControl } from '@angular/forms';

export class CustomValidator {
  // if the value is valid the method will return 'null'
  // else it will return a JSON Object e.g {invalid:true} / {valid:false}
  static checkEvenOdd(ctrl: AbstractControl): any {
    let value = parseInt (ctrl.value);
    if(value % 2 === 0){
      return null;
    }else {
      return { fool : true } // frmPrd.controls.ProductId.errors.invalid
    }
  }
}
