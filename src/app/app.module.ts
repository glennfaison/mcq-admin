import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';

import { AppComponent } from './app.component';
import { TopicsModule } from './topics/topics.module';
import { CoreModule } from './core/core.module';
import { QuestionsModule } from './questions/questions.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { McqAppModule } from './mcq-app/mcq-app.module';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    RouterModule,
    NgbModule,
    /* Lazy-loadable modules */
    AuthModule,
    CoursesModule,
    TopicsModule,
    QuestionsModule,
    DashboardsModule,
    McqAppModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    /* End of Lazy-loadable modules */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
