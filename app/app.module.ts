import { SummaryPipe } from './summary.pipe';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { MenuComponent } from './component/menu/menu.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from './component/post/post.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { customDirective } from './custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    PagenotfoundComponent,
    SummaryPipe,
    PostComponent,
    customDirective

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path : '',component : HomeComponent},
      { path : 'about',component : AboutComponent},
      { path : 'contact',component : ContactComponent},
      { path : '**',component : PagenotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
