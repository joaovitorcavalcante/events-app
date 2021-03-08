import { Component } from "@angular/core";

@Component({
  selector: '',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  userName: string = '';
  password: string = '';

  login(formValues: any) {
    console.log(formValues);
  }
}
