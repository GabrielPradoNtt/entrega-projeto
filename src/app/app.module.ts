import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from "@angular/common";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BusinessService } from './shared/service/business.service';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { SharedModule } from './shared/shared.module';
import { AngularMaterialModule } from './shared/angular-material.module';
import { AccountsPayableComponent } from './pages/accounts-payable/accounts-payable.component';
import { AccountsReceivableComponent } from './pages/accounts-receivable/accounts-receivable.component';
import { PeopleComponent } from './pages/people/people.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';


registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountsPayableComponent,
    AccountsReceivableComponent,
    PeopleComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    BaseChartDirective,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule, MatDividerModule, MatIconModule,
    MatDatepickerModule
  ],
  providers: [
    BusinessService,
    provideCharts(withDefaultRegisterables()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
