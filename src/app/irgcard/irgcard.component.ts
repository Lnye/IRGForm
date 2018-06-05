import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-irgcard',
  templateUrl: './irgcard.component.html',
  styleUrls: ['./irgcard.component.css']
})
export class IrgcardComponent {

 // Empty Card Array
 card = [
  {
  Name:'Form Name', cols: 1, rows: 1,
  Label: 'Test Button label',
  imageURL: 'https://png.icons8.com/material/48/00457C/in-inventory.png',
  imageDesc: 'Image Description',
},
{
  Name:'Form Name', cols: 1, rows: 1,
  Label: 'Test Button label 2',
  imageURL: 'https://png.icons8.com/material/48/00457C/in-inventory.png',
  imageDesc: 'Image Description',
  },
{
  Name:'Form Name', cols: 1, rows: 1,
  Label: 'Test Button label 3',
  imageURL: 'https://png.icons8.com/material/48/00457C/in-inventory.png',
  imageDesc: 'Image Description',
  },
];

}
