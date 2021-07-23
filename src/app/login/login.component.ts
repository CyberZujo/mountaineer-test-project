import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'todo-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(private readonly builder: FormBuilder) {
        this.loginForm = this.builder.group({
            username: [],      
            password: []
          });
    }

    submitForm() {
        console.log(this.loginForm.getRawValue());
    }
}