import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {
  @ViewChild('map') mapElementRef: ElementRef;

  globalGoogleMaps;

  private apiKey= "AIzaSyAyKR3VHX4FzctdpIsjR4mOMR8VV3CpQmM"

  constructor() { }

  ngOnInit() {}

  @Input('center')
  set center(location) {
    if(this.globalGoogleMaps) {
      this.globalGoogleMaps.setCenter(location);
    }
  }

  @Input('markers')
  set markers(markers) {
    this.drawMarkers(markers)
  }

  drawMarkers(markers, attempt = 0) {

  }

  intializeGoogleMap(): Promise<any> {
    const win = window as any;
    const googleModule = win.google;

    if(googleModule && googleModule.maps) {
      return Promise.resolve(googleModule.maps)
    }
    
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')

      script.type = 'text/javascript'
      script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&libraries=places'
      script.async = true;
      script.defer = true;
      document.body.appendChild(script)
      script.onload = () => {
        const loadedGoogleModule = win.google;
        if(loadedGoogleModule && loadedGoogleModule.maps) {
          resolve(loadedGoogleModule.maps)
        }
        else {
          reject('google maps SDK not available')
        }
      }
    })
  }

  addSearchBar() {
    
  }

}
