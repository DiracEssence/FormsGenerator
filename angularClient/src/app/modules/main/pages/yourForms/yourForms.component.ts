import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CreateUser } from 'src/app/models/createUser';
import { AccountService } from 'src/app/services/account.service';
import { ToastrService } from "ngx-toastr";
import { SessionService } from 'src/app/services/session.service';
import { Form } from "../../../../models/Form";
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-yourForms',
  templateUrl: './yourForms.component.html',
  styleUrls: ['./yourForms.component.scss']
})
export class YourFormsComponent implements OnInit {

  public forms: Form[] = [];
  
  constructor(private formsService: FormsService) { }

  ngOnInit(): void {
    this.formsService.GetFormsOfUser().subscribe(
      success => {
        this.forms = success
      },
      error => {

      }
    );
  }

}
