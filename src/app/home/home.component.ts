import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  profileForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  });

  ngOnInit(): void {
  }

  submit() {
    console.log('value', this.profileForm.value)
    this.profileForm.reset();
  }

}
