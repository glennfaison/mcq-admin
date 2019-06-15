import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';

import { AppComponent } from './app.component';
import { TopicsModule } from './topics/topics.module';
import { CoreModule } from './core/core.module';
import { QuestionsModule } from './questions/questions.module';
import { OptionsModule } from './options/options.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { McqAppModule } from './mcq-app/mcq-app.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    /* Lazy-loadable modules */
    AuthModule,
    CoursesModule,
    TopicsModule,
    QuestionsModule,
    OptionsModule,
    DashboardsModule,
    McqAppModule,
    /* End of Lazy-loadable modules */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
