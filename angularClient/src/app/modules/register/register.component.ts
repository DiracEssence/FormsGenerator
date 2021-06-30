import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators,  } from '@angular/forms';
import { AccountService } from "../../services/account.service";
import { CreateUser } from "../../models/createUser";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
  });
  public savingUser: boolean = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private accountService: AccountService,
              private toastrService: ToastrService)
  {
    
  }

  ngOnInit(): void {
  }

  goToPage(path: string): void {
    this.router.navigateByUrl(path);
  }

  registerUser(): void {
    if (this.registerForm.valid) {
      if (this.registerForm.controls['password'].value == this.registerForm.controls['passwordConfirmation'].value) {
        
        let user: CreateUser = new CreateUser();
        user.Email = this.registerForm.controls['email'].value;
        user.Username = this.registerForm.controls['username'].value;
        user.Password = this.registerForm.controls['password'].value;
        
        this.savingUser = true;
        window.setTimeout(() => {
          this.accountService.registerUser(user).subscribe(successMessage => {
  
            this.toastrService.success(successMessage);
            this.router.navigate(['login']);
            this.savingUser = false;
          },
          error => {
            this.toastrService.warning('Oh! something went wrong...');
            this.savingUser = false;
          });
        }, 1000);

      } else {
        this.toastrService.info('Password and confirmation must be the same');
      }
    }
  }

}
