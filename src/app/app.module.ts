import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidemenuliComponent } from './components/sidemenuli/sidemenuli.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopbarDropDownComponent } from './components/topbar-drop-down/topbar-drop-down.component';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { HomeComponent } from './components/home/home.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { MembersComponent } from './components/pages/members/members.component';
import { TicketingComponent } from './components/pages/ticketing/ticketing.component';
import { BillComponent } from './components/pages/bill/bill.component';
import { ClientPaymentComponent } from './components/pages/client-payment/client-payment.component';
import { ManagementComponent } from './components/pages/management/management.component';
import { ReportsComponent } from './components/pages/reports/reports.component';
import { NotificationComponent } from './components/pages/notification/notification.component';
import { SettingComponent } from './components/pages/setting/setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateBtnComponent } from './components/buttons/update-btn/update-btn.component';
import { SaveBtnComponent } from './components/buttons/save-btn/save-btn.component';
import { CancelBtnComponent } from './components/buttons/cancel-btn/cancel-btn.component';
import { MemberDashboardComponent } from './components/pages/members/member-dashboard/member-dashboard.component';
import { MemberViewEditComponent } from './components/pages/members/member-view-edit/member-view-edit.component';
import { HomeliComponent } from './components/homeli/homeli.component';
import { ClientDashboardCardComponent } from './components/client-dashboard-card/client-dashboard-card.component';
import { TitlePageViewComponent } from './components/pages/ticketing/title-page-view/title-page-view.component';
import { SubscriptionbillnotiComponent } from './components/pages/bill/subscriptionbillnoti/subscriptionbillnoti.component';
import { ClientPaymentCardComponent } from './components/client-payment-card/client-payment-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientWalletComponent } from './components/pages/client-payment/client-wallet/client-wallet.component';
import { AddNewUserComponent } from './components/pages/management/add-new-user/add-new-user.component';
import { ReportCardComponent } from './components/report-card/report-card.component';
import { TicketReportComponent } from './components/pages/reports/ticket-report/ticket-report.component';
import { PaidBillComponent } from './components/pages/reports/paid-bill/paid-bill.component';
import { UnpaidSubComponent } from './components/pages/reports/unpaid-sub/unpaid-sub.component';
import { CreditCardTransferComponent } from './components/pages/reports/credit-card-transfer/credit-card-transfer.component';
import { AddNewNotificationComponent } from './components/pages/notification/add-new-notification/add-new-notification.component';
import { SendNotificationComponent } from './components/pages/notification/send-notification/send-notification.component';
import { SettingCardsComponent } from './components/setting-cards/setting-cards.component';
import { AccountSettingComponent } from './components/pages/setting/account-setting/account-setting.component';
import { CurrencySettingComponent } from './components/pages/setting/currency-setting/currency-setting.component';
import { SubSettingComponent } from './components/pages/setting/sub-setting/sub-setting.component';
import { SubSettingEditComponent } from './components/pages/setting/sub-setting-edit/sub-setting-edit.component';
import { CcsidebarComponent } from './components/ccsidebar/ccsidebar.component';
import { CchomeComponent } from './components/cchome/cchome.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ResetBtnComponent } from './components/buttons/reset-btn/reset-btn.component';
import { SubmitBtnComponent } from './components/buttons/submit-btn/submit-btn.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { SearchFilterPipe } from './search-filter.pipe';
import { EditUserComponent } from './components/pages/management/edit-user/edit-user.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent  , canActivate: [AuthGuard]  },
  { path: 'subscription', component: SubscriptionComponent  , canActivate: [AuthGuard]  },
  { path: 'members', component: MembersComponent  , canActivate: [AuthGuard] },
  { path: 'ticketing', component: TicketingComponent  , canActivate: [AuthGuard] },
  { path: 'bill', component: BillComponent  , canActivate: [AuthGuard] },
  { path: 'clientPayment', component: ClientPaymentComponent  , canActivate: [AuthGuard] },
  { path: 'management', component: ManagementComponent  , canActivate: [AuthGuard] },
  { path: 'reports', component: ReportsComponent  , canActivate: [AuthGuard] },
  { path: 'notification', component: NotificationComponent  , canActivate: [AuthGuard] },
  { path: 'setting', component: SettingComponent  , canActivate: [AuthGuard] },
  { path: 'members/memberDashboard', component: MemberDashboardComponent , canActivate: [AuthGuard]  },
  { path: 'members/memberViewPage', component: MemberViewEditComponent , canActivate: [AuthGuard]  },
  { path: 'ticketing/ticketpageview', component: TitlePageViewComponent , canActivate: [AuthGuard]  },
  { path: 'bill/subscriptionbillnoti', component: SubscriptionbillnotiComponent , canActivate: [AuthGuard]  },
  { path: 'clientPayment/clientWallet', component: ClientWalletComponent , canActivate: [AuthGuard]  },
  { path: 'management/addNewUser', component: AddNewUserComponent , canActivate: [AuthGuard]  },
  { path: 'management/editUser/:id', component: EditUserComponent , canActivate: [AuthGuard]  },
  { path: 'reports/ticketReport', component: TicketReportComponent  , canActivate: [AuthGuard] },
  { path: 'reports/paidBill', component: PaidBillComponent  , canActivate: [AuthGuard] },
  { path: 'reports/unpaidSub', component: UnpaidSubComponent , canActivate: [AuthGuard]  },
  { path: 'reports/creditCardTransfer', component: CreditCardTransferComponent , canActivate: [AuthGuard]  },
  { path: 'notification/addNewNotification', component: AddNewNotificationComponent , canActivate: [AuthGuard]  },
  { path: 'notification/sendNotification', component: SendNotificationComponent , canActivate: [AuthGuard]  },
  { path: 'setting/accountSetting', component: AccountSettingComponent , canActivate: [AuthGuard]  },
  { path: 'setting/currencySetting', component: CurrencySettingComponent , canActivate: [AuthGuard]  },
  { path: 'setting/subSetting', component: SubSettingComponent  , canActivate: [AuthGuard] },
  { path: 'setting/subSettingEdit', component: SubSettingEditComponent  , canActivate: [AuthGuard] },
  { path: 'cchome', component: CchomeComponent  , canActivate: [AuthGuard] },
  
  


]


export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SidemenuliComponent,
    TopbarComponent,
    TopbarDropDownComponent,
    HomeCardComponent,
    HomeComponent,
    SubscriptionComponent,
    MembersComponent,
    TicketingComponent,
    BillComponent,
    ClientPaymentComponent,
    ManagementComponent,
    ReportsComponent,
    NotificationComponent,
    SettingComponent,
    UpdateBtnComponent,
    SaveBtnComponent,
    CancelBtnComponent,
    MemberDashboardComponent,
    MemberViewEditComponent,
    HomeliComponent,
    ClientDashboardCardComponent,
    TitlePageViewComponent,
    SubscriptionbillnotiComponent,
    ClientPaymentCardComponent,
    FooterComponent,
    ClientWalletComponent,
    AddNewUserComponent,
    ReportCardComponent,
    TicketReportComponent,
    PaidBillComponent,
    UnpaidSubComponent,
    CreditCardTransferComponent,
    AddNewNotificationComponent,
    SendNotificationComponent,
    SettingCardsComponent,
    AccountSettingComponent,
    CurrencySettingComponent,
    SubSettingComponent,
    SubSettingEditComponent,
    CcsidebarComponent,
    CchomeComponent,
    ResetBtnComponent,
    SubmitBtnComponent,
    LoginComponent,
    SearchFilterPipe,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
     defaultLanguage: 'ar-SA', 
      // defaultLanguage: 'en-US',
      loader : {
        provide : TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }

    }),
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
