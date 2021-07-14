import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CreateUser } from 'src/app/models/createUser';
import { AccountService } from 'src/app/services/account.service';
import { ToastrService } from "ngx-toastr";
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-yourForms',
  templateUrl: './yourForms.component.html',
  styleUrls: ['./yourForms.component.scss']
})
export class YourFormsComponent implements OnInit {
  
  constructor( )
  {

  }

  ngOnInit(): void {
  }

}
