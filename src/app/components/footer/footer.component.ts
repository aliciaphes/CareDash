import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private socialNetworks = [
    {
      'name': 'Facebook',
      'iconURL': '../../../assets/logos/logo-facebook.png',
      'url': 'https://www.facebook.com/caredash'
    },
    {
      'name': 'Twitter',
      'iconURL': '../../../assets/logos/logo-twitter.png',
      'url': 'https://www.twitter.com/caredash'
    },
    {
      'name': 'Instagram',
      'iconURL': '../../../assets/logos/logo-instagram.png',
      'url': 'https://www.instagram.com/caredash'
    },
    {
      'name': 'Pinterest',
      'iconURL': '../../../assets/logos/logo-pinterest.png',
      'url': ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
