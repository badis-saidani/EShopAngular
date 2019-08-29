import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';

// import * from '../node_modules/fontawesome';

import * as $ from 'jquery';
import { Router } from '@angular/router';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { Category } from './models/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
   authority: string;

  path: string;
  categories: Category[];

  constructor(private tokenStorage: TokenStorageService, private router: Router,
     private catService: CategoryService) { }

  ngOnInit() {

    this.path = this.router.url;
    console.log(this.tokenStorage.getToken());


    this.getAllCategories();


    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_MANAGER' || role === 'ROLE_LEADER' || role === 'ROLE_OPERATOR') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  getAllCategories() {
    this.catService.getAllowedCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => {
        console.log('Error occurred while downloading the list of categories;');
    }
    );
  }
}
