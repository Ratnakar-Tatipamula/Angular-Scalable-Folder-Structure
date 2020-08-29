import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { httpInterceptProviders } from './interceptors';

// import { UserService } from './services/user.service';

import { PostService } from './http/post/post.service';
import { BaseService } from './http/base.service';
import { HeaderComponent } from './header/header.component';
import { ProjectLayoutComponent } from './layouts/project-layout/project-layout.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, ProjectLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [ PostService, BaseService, httpInterceptProviders ]
})
export class CoreModule { }
