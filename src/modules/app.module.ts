import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as fromAppStore from './store/app.store';
import { appEffects } from './store/app.effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    SharedModule,
    StoreModule.forRoot(fromAppStore.appReducers),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument(fromAppStore.appDevToolsOptions),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
