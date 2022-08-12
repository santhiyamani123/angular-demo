import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListingComponent } from './leads-listing/leads-listing.component';
import { LeadsGridComponent } from './leads-listing/leads-grid/leads-grid.component';
import { LeadsToolComponent } from './leads-listing/leads-tool/leads-tool.component';
import { DownloadPdfComponent } from './leads-listing/leads-tool/download-pdf/download-pdf.component';
import { DownloadExcelComponent } from './leads-listing/leads-tool/download-excel/download-excel.component';



@NgModule({
  declarations: [
    LeadsListingComponent,
    LeadsGridComponent,
    LeadsToolComponent,
    DownloadPdfComponent,
    DownloadExcelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
