import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl,  ReactiveFormsModule, Validators } from '@angular/forms';

import { PostService } from '@core/http/post/post.service';

import { User } from '@core/models/user.model';

@Component({
  selector: 'app-register', 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  angForm : FormGroup;
  alert : boolean = false;

  formDetails: any;


  constructor(private postService: PostService) { }

  ngOnInit() {
    this.angForm = new FormGroup({
      name : new FormControl('',[Validators.required, Validators.minLength(5)]),
      email : new FormControl('', Validators.required),
      password : new FormControl('',Validators.required)
     
    })
  }

  onSubmit() {
    this.alert = true;
    this.user = {
      name : this.angForm.value.name,
      email : this.angForm.value.email,
      password : this.angForm.value.password
    }
    console.log('USER IS ', this.user);
    this.angForm.reset();
    this.formDetails = this.user;
    this.postService.createUser(this.formDetails);
  }

  closeAlert() {
   this.alert = false;
  }


}
