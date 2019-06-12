import { NgModule } from '@angular/core';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import { CommonModule } from '@angular/common';
import { ScrollToTopButtonComponent } from './scroll-to-top-button/scroll-to-top-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    LogoutModalComponent,
    ScrollToTopButtonComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})
export class CommonComponentsModule { }
