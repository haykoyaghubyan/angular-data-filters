import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { SearchComponent } from '../search/search.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from '../../services/user.service';
import { FilterPipe } from '../../pipe/filter.pipe';
import { UserRoutes } from './user-routing.module';


@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule, UserRoutes ],
  declarations: [ UserComponent, SearchComponent, UserListComponent, FilterPipe ],
  providers: [ UserService ]
})
export class UserModule { }
