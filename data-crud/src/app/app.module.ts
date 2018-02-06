import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataGridModule} from 'primeng/datagrid';
import {DialogModule} from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import { DataTableCrudDemo } from './app.component';
import {CarService} from './carservice';
import { DataTableModule,SharedModule} from 'primeng/primeng';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    DataTableCrudDemo
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DataGridModule,
    DialogModule,
    PanelModule,
    TabViewModule,
    CodeHighlighterModule,
    DataTableModule,SharedModule,
    HttpModule,
    HttpClientModule




  ],
  providers: [CarService],
  bootstrap: [DataTableCrudDemo]
})
export class AppModule { }
