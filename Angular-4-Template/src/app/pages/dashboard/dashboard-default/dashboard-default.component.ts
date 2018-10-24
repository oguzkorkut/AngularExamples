import { Component, OnInit } from '@angular/core';

/*
import '../../../../assets/js/lightbox.min.js'
import '../../../../assets/js/jquery.ajaxchimp.min.js'
import '../../../../assets/js/js.js'
import '../../../../assets/js/loading-bars.js'
import '../../../../assets/js/ngTouch.min.js'
import '../../../../assets/js/particles.min.js'
import '../../../../assets/js/scripts.ang.js'
import '../../../../assets/js/slider.min.js'
import '../../../../assets/js/slideshow.min.js'
import '../../../../assets/js/slideshow-fx.min.js'
import '../../../../assets/js/uikit.min.js'
*/ 

declare const $: any;

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: [
    './dashboard-default.component.css',
    '../../../../assets/css/styles.css',
    '../../../../assets/css/uikit.css'
  ]
})
export class DashboardDefaultComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  onTaskStatusChange(event) {
    const parentNode = (event.target.parentNode.parentNode);
    parentNode.classList.toggle('done-task');
  }
}
