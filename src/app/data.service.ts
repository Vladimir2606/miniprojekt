import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Artikel } from './artikel';

@Injectable()
export class DataService {
  artikel: Artikel[] = [];
  router: Router;

  constructor(router: Router) { 
  this.router = router;
  }

}