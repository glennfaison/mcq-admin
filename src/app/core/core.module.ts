import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutModalComponent } from './components/logout-modal/logout-modal.component';
import { ScrollToTopButtonComponent } from './components/scroll-to-top-button/scroll-to-top-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PageViewComponent } from './components/page-view/page-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LogoutModalComponent,
    ScrollToTopButtonComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    NotFoundComponent,
    PageViewComponent,
  ],
  exports: [
    LogoutModalComponent,
    ScrollToTopButtonComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule { }
