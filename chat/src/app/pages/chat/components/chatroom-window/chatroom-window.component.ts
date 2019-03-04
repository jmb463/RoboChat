import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.scss']
})
export class ChatroomWindowComponent implements OnInit {
  //TODO replace with Firebase data.
  public dummyData = [
    {
      message: 'Sed enim velit, condimentum nec tincidunt non, elementum sed nisi.',
      createdAt: new Date(),
      sender: {
        firstName: 'Sheldon',
        lastName: 'Cooper',
        photoUrl: 'http://placekitten.com/g/150/150'
      }
    },
    {
      message: 'Sed enim velit, condimentum nec tincidunt non, elementum sed nisi.',
      createdAt: new Date(),
      sender: {
        firstName: 'Leonard',
        lastName: 'Hofstadter',
        photoUrl: 'https://placekitten.com/g/150/150'
      }
    },
    {
      message: 'Sed enim velit, condimentum nec tincidunt non, elementum sed nisi.',
      createdAt: new Date(),
      sender: {
        firstName: 'Howard',
        lastName: 'Wolowitz',
        photoUrl: 'https://placekitten.com/g/150/150'
      }
    },
    {
      message: 'Sed enim velit, condimentum nec tincidunt non, elementum sed nisi.',
      createdAt: new Date(),
      sender: {
        firstName: 'Amy',
        lastName: ' Farrah Fowler',
        photoUrl: 'https://placekitten.com/g/150/150'
      }
    }
  ];
 
 
  constructor() { }

  ngOnInit() {
  }

}
