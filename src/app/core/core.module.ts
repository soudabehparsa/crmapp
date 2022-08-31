import { NgModule,Optional,SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AngularMaterialModule } from 'src/lib/angular-material.module';


@NgModule({
  declarations: [],
  imports: [
    AngularMaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[
    {provide:MAT_DATE_LOCALE,useValue:environment}
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule:CoreModule,
  //private translate:TranslateService,
  //private logger:LoggerService
  )
  {
    //this.logger.info('Core Module Initialized');
    //throwIfAlreadyLoaded(parentModule,'CoreModule');
  }
 }
