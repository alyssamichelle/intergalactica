import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// import { CardModule } from '@progress/kendo-angular-layout';
// import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
// import { LayoutModule } from '@progress/kendo-angular-layout';

import { LayoutModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationsComponent } from './locations/locations.component';
import { ProductsComponent } from './products/products.component';
import { EmployeesComponent } from './employees/employees.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LocationsComponent,
    ProductsComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    InputsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
