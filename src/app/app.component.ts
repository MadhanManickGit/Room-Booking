import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'room-booking';
  rooms = [
    {
      name: 'Room 1',
      availability: 'Available'
    },
    {
      name: 'Room 2',
      availability: 'Available'
    },
    {
      name: 'Room 3',
      availability: 'Available'
    },
    {
      name: 'Room 4',
      availability: 'Available'
    },
    {
      name: 'Room 5',
      availability: 'Available'
    },
    {
      name: 'Room 6',
      availability: 'Available'
    },
    {
      name: 'Room 7',
      availability: 'Available'
    },
    {
      name: 'Room 8',
      availability: 'Available'
    },
    {
      name: 'Room 9',
      availability: 'Available'
    },
    {
      name: 'Room 10',
      availability: 'Available'
    }
  ];
  selectedRoom = {
    name: 'Room 1',
    availability: 'Available'
  };
  roomDetails: {}[] = [];


  onSubmit(value:any){
    this.roomDetails.push(value);
    console.log('roomDetails', this.roomDetails);
  }

  deleteBooking(indexValue){
    console.log('indexValue',indexValue);
    this.roomDetails.splice(indexValue,1);
  }

}
