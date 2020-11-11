import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersModalComponent } from './pages/users-modal/users-modal.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TruncateTextPipe } from '../pipes/truncate-text.pipe';
import { SearchUserPipe } from '../pipes/search-user.pipe';
import { SortUserPipe } from '../pipes/sort-user.pipe';
import { StatusUserPipe } from '../pipes/status-user.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    UsersModalComponent,
    HeaderComponent,
    SidebarComponent,
    TruncateTextPipe,
    SearchUserPipe,
    SortUserPipe,
    StatusUserPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    DragDropModule
  ]
})
export class ComponentModule { }
