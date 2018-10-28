import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.css']
})
export class CardDeckComponent implements OnInit {

  private cardDeckContent = [{
    'img': {
      'src': '../../../assets/images/1.jpg',
      'alt': 'Holding hands',
      'author': 'Roman Kraft'
    },
    'card-title': 'How CareDash Collects Reviews',
    'card-text': 'Patients are encouraged to search CareDash for their provider and write a review. Every patient must sign up to ensure that all reviews are written by real people. We ask patients to leave honest, respectful, and detailed reviews that follow our guidelines.',
    'linkTo': 'https://www.caredash.com/articles/how-to-rate-your-physician'
  },
  {
    'img': {
      'src': '../../../assets/images/2.jpg',
      'alt': 'Medication pill',
      'author': 'rawpixel'
    },
    'card-title': 'A Commitment to Reliable Reviews',
    'card-text': 'Every review on CareDash goes through an approval process to ensure that we are publishing the most trustworthy reviews. In addition, we never accept financial compensation from providers or hospitals in exchange for the removal of negative reviews.',
    'linkTo': 'https://healthcareweekly.com/caredash-trust-and-transparency-in-healthcare/'
  },
  {
    'img': {
      'src': '../../../assets/images/3.jpg',
      'alt': 'Laptop, eyeglasses and stethoscope',
      'author': 'rawpixel'
    },
    'card-title': 'Informative and Transparent Reviews',
    'card-text': 'When patients rate and review doctors or hospitals on CareDash, they take a variety of experiences into account, including treatment, bedside manner, communication, wait times, administrative staff, and scheduling.',
    'linkTo': 'https://healthcareweekly.com/caredash-trust-and-transparency-in-healthcare/'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
