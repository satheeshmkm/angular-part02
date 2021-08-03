import {AbstractControl} from '@angular/forms'

export function zipValidator( control:AbstractControl){
    //console.log(control);
    if(control && control.value!=null || control.value!=undefined){
        const regExp= new RegExp('^[0-9]{6}$');
        if(!regExp.test(control.value)){
            return {
                isError:true
            }
        }
    }
return null;
}

export function pwdValidator( control:AbstractControl){
    console.log(control);
    if(control && (control.value!==null || control.value!==undefined)){
        const cnfPwdValue=control.value;
        const pwdCtrl =control.root.get('password');
        if(pwdCtrl){
            const pwdValue=pwdCtrl.value;
        const cnfPwdValue=control.value;
            if(pwdValue==''  || pwdValue!==cnfPwdValue){
                return {
                    isError:true
                }
            }
        }
   }
return null;
}
