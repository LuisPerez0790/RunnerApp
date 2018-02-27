import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { RunnerAppSharedModule, UserRouteAccessService } from './shared';
import { RunnerAppAppRoutingModule} from './app-routing.module';
import { RunnerAppHomeModule } from './home/home.module';
import { RunnerAppAdminModule } from './admin/admin.module';
import { RunnerAppAccountModule } from './account/account.module';
import { RunnerAppEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        RunnerAppAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        RunnerAppSharedModule,
        RunnerAppHomeModule,
        RunnerAppAdminModule,
        RunnerAppAccountModule,
        RunnerAppEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class RunnerAppAppModule {}
