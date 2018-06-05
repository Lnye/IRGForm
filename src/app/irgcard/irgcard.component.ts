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
  Label: 'Capital Control',
  ButtonURL: 'https://onbase.irgra.com/AppNet/UnityForm.aspx?d1=AcdhaemfAW%2f0l5QkfqMYFgijoO%2fTAHax63%2b8YaRKqaAhAHmYJKgVAMnoeZIl3n3NdH%2bGzj1Wh2iyhBVwOVeS7SAdIFuwHxvVlliRt%2fe35A1Fo%2bbaMisXg%2bkYY6s7snEvR1qnDOOk01sOenQQDFMk4gorK8sASq9ZL49dJAhJbJjjYYobs%2b7jQmNw8qULQoj6VYcYMgkFI%2bmhCQgMMVYodJo%3d',
  imageURL: 'https://png.icons8.com/material/512/00457C/cheap-2.png',
  imageDesc: 'Image Description',
},
{
  Name:'Form Name', cols: 1, rows: 1,
  Label: 'IT Project Request',
  ButtonURL: 'https://www.wrike.com/form/eyJhY2NvdW50SWQiOjE5MjQzNDMsInRhc2tGb3JtSWQiOjEwMjk4NX0JNDY4MDA5NjMwNjU1MgkxYjlhNzEyZGZhMTg4NDZhYWJlNjU5NTUzZjYwZDZhYTdkZWUxMDRiMzc5ZTllYjBlOGEyMDRkMWMzOWQ1MGU3',
  imageURL: 'https://png.icons8.com/material/480/00457C/serial-tasks.png',
  imageDesc: 'Image Description',
  },
];

}
