import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PostService } from '@core/http/post/post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.postService.loginUser(this.loginForm.value);
  }

}
