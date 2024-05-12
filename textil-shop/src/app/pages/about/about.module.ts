import {AfterViewInit, NgModule, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import {AboutComponent} from "./about.component";
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatTable,
    MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatList, MatListItem} from "@angular/material/list";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";


@NgModule({
  declarations: [
    AboutComponent
  ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        MatFormField,
        MatIcon,
        MatTable,
        MatHeaderCellDef,
        MatCellDef,
        MatPaginator,
        MatHeaderRowDef,
        MatRowDef,
        MatList,
        MatListItem,
        MatCard,
        MatCardContent,
        MatDivider
    ]
})

export class AboutModule {}
