import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {animate, AUTO_STYLE, state, style, transition, trigger} from '@angular/animations';
import {MenuItems} from '../../shared/menu-items/menu-items';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: [
  ]
})

export class AdminComponent implements OnInit {

  constructor(public menuItems: MenuItems) {

    console.log(menuItems);
  }

  ngOnInit() {

    
  }


  
  
}
