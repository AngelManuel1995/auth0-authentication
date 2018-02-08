import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';

import { AppComponent }       from './app.component';
import { HomeComponent }      from './components/home/home.component';
import { NavbarComponent }    from './components/navbar/navbar.component';
import { PricesComponent }    from './components/prices/prices.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { APP_ROUTING }        from './app.routes';


//Services
import { AuthService }        from './services/auth.service';
import { AuthGuardService }   from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PricesComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    //Services
    AuthService,
    AuthGuardService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
