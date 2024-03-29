import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss']
})
export class GooglemapComponent implements OnInit{

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  display :any;
  center : google.maps.LatLngLiteral ={lat : 24, lng: 12};
  zoom = 4;

  moveMap(event :google.maps.MapMouseEvent){
    if(event.latLng!= null)
    this.center =(event.latLng.toJSON());
  }
  move(event :google.maps.MapMouseEvent){
    if(event.latLng!= null)
    this.display =(event.latLng.toJSON());
  }
}
