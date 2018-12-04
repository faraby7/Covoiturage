import {Component, OnInit} from '@angular/core';
import {Utilisateur} from '../first/Utilisateur';
declare const $: any;
declare var Morris: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    UserData:Utilisateur;
    nom:any;
    prenom:any;
    adresse:any;
    email:any;



    lat = 33.589886;
    lng = -7.603869;
    latA = 34.037582;
    lngA = -6.751614;
    zoom = 8;

    styles: any = [{
        featureType: 'all',
        stylers: [{
            saturation: -80
        }]
    }, {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{
            hue: '#00ffee'
        }, {
            saturation: 50
        }]
    }, {
        featureType: 'poi.business',
        elementType: 'labels',
        stylers: [{
            visibility: 'off'
        }]
    }];

  constructor() { }

  ngOnInit() {

    this.UserSession();
    console.log(this.UserData);

    setTimeout(() => {
      $('.resource-barchart1').sparkline([5, 6, 9, 7, 8, 4, 6], {
        type: 'bar',
        barWidth: '6px',
        height: '32px',
        barColor: '#1abc9c',
        tooltipClassname: 'abc'
      });

      $('.resource-barchart2').sparkline([6, 4, 8, 7, 9, 6, 5], {
        type: 'bar',
        barWidth: '6px',
        height: '32px',
        barColor: '#1abc9c',
        tooltipClassname: 'abc'
      });

      Morris.Area({
        element: 'morris-extra-area',
        data: [{
          period: '2010',
          iphone: 0,
          ipad: 0,
          itouch: 0
        }, {
          period: '2011',
          iphone: 50,
          ipad: 15,
          itouch: 5
        }, {
          period: '2012',
          iphone: 20,
          ipad: 50,
          itouch: 65
        }, {
          period: '2013',
          iphone: 60,
          ipad: 12,
          itouch: 7
        }, {
          period: '2014',
          iphone: 30,
          ipad: 20,
          itouch: 120
        }, {
          period: '2015',
          iphone: 25,
          ipad: 80,
          itouch: 40
        }, {
          period: '2016',
          iphone: 10,
          ipad: 10,
          itouch: 10
        }


        ],
        lineColors: ['#fb9678', '#7E81CB', '#01C0C8'],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['Site A', 'Site B', 'Site C'],
        pointSize: 0,
        lineWidth: 0,
        resize: true,
        fillOpacity: 0.8,
        behaveLikeLine: true,
        gridLineColor: '#5FBEAA',
        hideHover: 'auto'

      });
    }, 1);
  }

  UserSession(){


    this.nom = sessionStorage.getItem('nom');
    this.prenom = sessionStorage.getItem('prenom');
      //this.UserData.sex = sessionStorage.getItem('sex');
      //this.UserData.date_naissance = sessionStorage.getItem('date_naissance');
    this.adresse = sessionStorage.getItem('adresse');
    this.email = sessionStorage.getItem('email');
      //this.UserData.password = sessionStorage.getItem('password');
      //this.UserData.description = sessionStorage.getItem('description');
      //this.UserData.img_prf = sessionStorage.getItem('img_prf');
      //this.UserData.created_at = sessionStorage.getItem('created_at');
      //this.UserData.updated_at = sessionStorage.getItem('updated_at');
  }

}
