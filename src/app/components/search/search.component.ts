import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
      .form-control {
        margin-bottom: 15px;
      }
    `
  ]
})
export class SearchComponent implements OnInit {
form: FormGroup;
  levels = [
    "Beginner",
    "Expert",
  ];
@Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
searchText: string = '';
constructor(private fb: FormBuilder,
private userService: UserService) {}
ngOnInit(): void {
this.buildForm();
}
buildForm(): void {
this.form = this.fb.group({
firstName: new FormControl(''),
lastName: new FormControl(''),
jobTitle: new FormControl(''),
level: new FormControl(''),
agefrom: new FormControl(''),
ageto: new FormControl('')
});
}

 search(filters: any): void {
Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
this.groupFilters.emit(filters);
}
  
}