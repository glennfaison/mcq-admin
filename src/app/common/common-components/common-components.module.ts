import { NgModule } from '@angular/core';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import { ScrollToTopButtonComponent } from './scroll-to-top-button/scroll-to-top-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LogoutModalComponent,
    ScrollToTopButtonComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  exports: [
    LogoutModalComponent,
    ScrollToTopButtonComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class CommonComponentsModule { }
