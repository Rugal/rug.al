import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatMenuModule, MatSidenavModule, MatListModule } from '@angular/material';
import { PrismModule } from '@ngx-prism/core';

import { AppComponent } from './app.component';
import { BackgroundCoverComponent } from './background-cover/background-cover.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundCoverComponent,
    HeaderComponent,
    BodyComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    PrismModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
