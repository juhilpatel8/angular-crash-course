import { AbstractControl } from "@angular/forms";

export class PasswordValidator {
    static doNotMatchOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value !== "test") {
                    console.log("False: ", control.value);

                    resolve({
                        doNotMatchOldPassword: true
                    });
                } else {
                    console.log("true: ", control.value);

                    resolve(null);   
                }
            }, 1000);
        });
    }
}