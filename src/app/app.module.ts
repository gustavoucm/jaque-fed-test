import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { UsersModalComponent } from './components/users-modal/users-modal.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchUserPipe } from './pipes/search-user.pipe';
import { SortUserPipe } from './pipes/sort-user.pipe';
import { StatusUserPipe } from './pipes/status-user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    UsersComponent,
    TruncateTextPipe,
    UsersModalComponent,
    SearchUserPipe,
    SortUserPipe,
    StatusUserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
