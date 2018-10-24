import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {animate, AUTO_STYLE, state, style, transition, trigger} from '@angular/animations';
import {MenuItems} from '../../shared/menu-items/menu-items';

/*import "../../../../node_modules/jquery/dist/jquery.min.js"
import "../../../assets/js/particles.min.js"*/
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: [
  ]
})

/**
  '../../../assets/css/styles.css',
    '../../../assets/css/uikit.css'
 */

export class AdminComponent implements OnInit {

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  

  constructor(public menuItems: MenuItems) {

    console.log(menuItems);

    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
          particles: {
              number: {
                  value: 200,
              },
              color: {
                  value: '#ff0000'
              },
              shape: {
                  type: 'triangle',
              },
      }
    };

    /*(function() {
      particlesJS.load('particles-js', 'particles.json', function(){
        console.log('particles.json loaded...');
      });
    })*/

    
  }

  ngOnInit() {

    let particle = {
      "particles":{
        "number":{
          "value":400
        },
        "color":{
          "value":"#fff"
        },
        "shape":{
          "type":"circle",
          "stroke":{
            "width":1,
            "color":"#ccc"
          },
          "image":{
            "src":"http://www.iconsdb.com/icons/preview/white/contacts-xxl.png"
          }
        },
        "opacity":{
          "value":0.5,
          "random":true,
          "anim":{
            "enable":false,
            "speed":1
          }
        },
        "size":{
          "value": 5,
          "random":false,
          "anim":{
            "enable": false,
            "speed":30
          }
        },
        "line_linked":{
          "enable": true,
          "distance": 120,
          "color":"#fff",
          "width":1
        },
        "move":{
          "enable":true,
          "speed":2,
          "direction":"none",
          "straight":false
        }
      },
      "interactivity":{
        "events":{
          "onhover":{
            "enable":true,
            "mode":"repulse"
          },
          "onclick":{
            "enable": true,
            "mode":"push"
          }
        },
        "modes":{
          "repulse":{
            "distance":50,
            "duration":0.4
          },
          "bubble":{
            "distance":100,
            "size":10
          }
        }
      }
    }
    
    
  }


  
  
}
