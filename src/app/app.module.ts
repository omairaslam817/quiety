import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page/index-page.component';
import { ValuesComponent } from './values/values.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SingalProvidersComponent } from './singal-providers/singal-providers.component';
import { InvestorsComponent } from './investors/investors.component';
import { PricingComponent } from './pricing/pricing.component';
import { GuideComponent } from './guide/guide.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyAccountComponent } from './my-account/my-account.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    ValuesComponent,
    AboutUsComponent,
    ContactUsComponent,
    SingalProvidersComponent,
    InvestorsComponent,
    PricingComponent,
    GuideComponent,
    MobileAppComponent,
    SignUpComponent,
    SignInComponent,
    DashboardComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
