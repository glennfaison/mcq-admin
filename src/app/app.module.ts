import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';

import { AppComponent } from './app.component';
import { TopicsModule } from './topics/topics.module';
import { CommonComponentsModule } from './common/common-components/common-components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    /* Lazy-loadable modules */
    CommonComponentsModule,
    AuthModule,
    CourseModule,
    TopicsModule,
    /* End of Lazy-loadable modules */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
