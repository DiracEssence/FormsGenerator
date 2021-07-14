import { Component, OnInit } from '@angular/core';
import { AccountService } from "../../services/account.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { SessionService } from 'src/app/services/session.service';
//import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public accountService: AccountService, private toastr: ToastrService, private router: Router, private sessionService: SessionService) { }

  ngOnInit(): void {

    this.accountService.getUserByToken().subscribe(
      success => {
        this.accountService.user = success;
      },
      error => {
        this.toastr.error("Something wrong while tryng to get your user.");
        this.router.navigate(['login']);
        return false;
      }
    );
  }

  logout(): void {
    this.sessionService.removeToken();
    this.router.navigate(['login']);
  }

  goToPage(path: string): void {
    this.router.navigateByUrl(path);
  }

  routeChanged(event: any): void {
    let sidebarOptions: any = document.getElementsByClassName('sidebar')[0];
    for (let i = 0; i < sidebarOptions.children.length; i++) {
      sidebarOptions.children[i].classList.remove('active');
    }

    let element: HTMLElement | null = document.getElementById(event.constructor.name);
    element?.classList.add('active');
  }

}
