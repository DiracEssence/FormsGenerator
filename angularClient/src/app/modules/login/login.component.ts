import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CreateUser } from 'src/app/models/createUser';
import { AccountService } from 'src/app/services/account.service';
import { ToastrService } from "ngx-toastr";
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  public loggingIn: boolean = false;

  constructor(
              private router: Router,
              private fb: FormBuilder,
              private accountService: AccountService,
              private toastrService: ToastrService,
              private sessionService: SessionService)
  {

  }

  ngOnInit(): void {
  }

  goToPage(path: string): void {
    this.router.navigateByUrl(path);
  }

  logIn(): void {
    if (this.loginForm.valid) {
      let user: CreateUser = new CreateUser();
      user.Username = this.loginForm.controls['username'].value;
      user.Password = this.loginForm.controls['password'].value;

      this.loggingIn = true;
      window.setTimeout(() => {
        this.accountService.login(user).subscribe(
          success => {
            this.sessionService.saveToken(success.Token);
            this.accountService.user = success.User;
            this.toastrService.success(`Welcome ${this.accountService.user.Username}!`);
            this.router.navigate(['']);
            this.loggingIn = false;
          },
          error => {
            this.toastrService.warning(error.error.Message);
            this.loggingIn = false;
          }
        );
      }, 1000);
    }
  }

}
