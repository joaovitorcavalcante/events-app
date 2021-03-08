import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  selector: '',
  templateUrl: './login.component.html',
  styles: [`
    em { float: right; color: #E05c65; padding-left: 10px; }
  `]
})

export class LoginComponent {
  userName: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(formValues: any) {
    this.authService.loginUser(
      formValues.userName,
      formValues.password
    );

    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
