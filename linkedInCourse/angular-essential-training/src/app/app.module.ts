import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { lookupLists, lookupListToken } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';
import { CategoryListComponent } from './category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    CategoryListComponent,
    FavoriteDirective,
    CategoryListPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupLists },
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
