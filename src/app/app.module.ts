import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoDeHeroesComponent } from './listado-de-heroes/listado-de-heroes.component';
import { HeroesService } from './heroes.service';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ModalPollComponent } from './modal-poll/modal-poll.component';
import { CapitalizePipe } from './capitalize.pipe';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';




@NgModule({
  declarations: [
    AppComponent,
    ListadoDeHeroesComponent,
    HeroProfileComponent,
    SpinnerComponent,
    ModalPollComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({heroe: counterReducer}),
    InfiniteScrollModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
