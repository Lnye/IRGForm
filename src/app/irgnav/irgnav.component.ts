import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-irgnav',
  templateUrl: './irgnav.component.html',
  styleUrls: ['./irgnav.component.css']
})
export class IrgnavComponent {

  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });
  }

}
