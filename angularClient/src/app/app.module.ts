import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from "@angular/common/http";
import { SessionService } from "./services/session.service";
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: getAuthToken,
        allowedDomains: [],
        disallowedRoutes: [],
      },
    })

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// get auth token
function getAuthToken(): string | null {
  return window.localStorage.getItem('auth-token');
}