import { NgModule } from '@angular/core';
import { LogoutModalComponent } from './components/logout-modal/logout-modal.component';
import { ScrollToTopButtonComponent } from './components/scroll-to-top-button/scroll-to-top-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
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
export class CoreModule { }
