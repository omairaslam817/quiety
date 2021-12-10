import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndexPageComponent } from './index-page/index-page/index-page.component';
import { InvestorsComponent } from './investors/investors.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { PricingComponent } from './pricing/pricing.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SingalProvidersComponent } from './singal-providers/singal-providers.component';
import { ValuesComponent } from './values/values.component';

const routes: Routes = [
  { path: 'home', component: IndexPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'values', component: ValuesComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'signal-provider', component: SingalProvidersComponent },
  {path:'pricing',component:PricingComponent},
  {path:'guide',component:SingalProvidersComponent},
  {path:'mobile-app',component:MobileAppComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'dashboard',component:MobileAppComponent},
  {path:'my-account',component:SignInComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
