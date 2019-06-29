import { Component, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnChanges {
@Input() groupFilters: Object;
@Input() searchByKeyword: string;
users: any[] = [];
filteredUsers: any[] = [];
constructor(private userService: UserService,
private ref: ChangeDetectorRef) { }
ngOnInit(): void {
this.loadUsers();
}
ngOnChanges(): void {
if (this.groupFilters) this.filterUserList(this.groupFilters, this.users);
}
filterUserList(filters: any, users: any): void {
this.filteredUsers = this.users; //Reset User List
const keys = Object.keys(filters);
const filterUser = user => {
let result = keys.map(key => {
if (!~key.indexOf('age')) {
if(user[key]) {
return String(user[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase())
} else {
return false;
}
}
});
// To Clean Array from undefined if the age is passed so the map will fill the gap with (undefined)
result = result.filter(it => it !== undefined);
// Filter the Age out from the other filters
if (filters['ageto'] && filters['agefrom']) {
if (user['age']) {
if (+user['age'] >= +filters['agefrom'] && +user['age'] <= +filters['ageto']) {
result.push(true);
} else {
result.push(false);
}
} else {
result.push(false);
}
}
return result.reduce((acc, cur: any) => { return acc & cur }, 1)
}
this.filteredUsers = this.users.filter(filterUser);
}
loadUsers(): void {
this.userService.fetchUsers()
.subscribe(users => this.users = users);
this.filteredUsers = this.filteredUsers.length > 0 ? this.filteredUsers : this.users;
}
}