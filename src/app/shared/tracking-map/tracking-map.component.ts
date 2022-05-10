import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-tracking-map',
  templateUrl: './tracking-map.component.html',
  styleUrls: ['./tracking-map.component.scss'],
})
export class TrackingMapComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapElementRef: ElementRef;
  @Input('userLocation') userLocation: any;
  @Output() changedLocation = new EventEmitter<any>();

  mechanicLocation
  subscription: Subscription
  markersArray = [];
  marker;
  globalGoogleMaps;
  globalMaps;
  globalMarker;

  private apiKey = 'AIzaSyD5T-WuxqszACay8W_O8Nv8a_Ud4v3ZFDk'

  constructor(private renderer: Renderer2, private toastService: ToastService, private platform: Platform, private localStorageService: LocalStorageService,
    private geolocation: Geolocation) { }

  ngOnInit() {
    this.mechanicLocation = this.localStorageService.getLocation()
  }

  initializeGoogleMap(): Promise<any> {
    const win = window as any;
    const googleModule = win.google;

    if (googleModule && googleModule.maps) {
      return Promise.resolve(googleModule.maps);
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');

      script.type = 'text/javascript';
      script.src = "https://maps.googleapis.com/maps/api/js?key=" + this.apiKey + "&libraries=places";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {

        const loadedGoogleModule = win.google;
        if (loadedGoogleModule && loadedGoogleModule.maps) {
          resolve(loadedGoogleModule.maps);
        }
        else {
          reject('google maps SDK not available');
        }
      }
    })
  }

  drawMap() {
    this.initializeGoogleMap()
      .then(googleMaps => {
        const mapEl = this.mapElementRef.nativeElement;
        this.globalGoogleMaps = googleMaps;

        let center = 
          {
            lat: parseFloat(this.mechanicLocation.latitude),
            lng: parseFloat(this.mechanicLocation.longitude)
          }

          this.globalMaps = new googleMaps.Map(mapEl, {
            center: center,
            zoom: 13,
            streetViewControl: false,
            mapTypeId: 'roadmap',
            mapTypeControl: false
          });

          //Make the map visible
          googleMaps.event.addListenerOnce(this.globalMaps, 'idle', () => {
            this.renderer.addClass(mapEl, 'visible');
          });

          this.placeUserMarker(this.userLocation, undefined, this.globalGoogleMaps);

          this.placeMechanicMarker(this.mechanicLocation, this.globalGoogleMaps);

        this.geolocation.watchPosition({
          enableHighAccuracy: true,
          maximumAge: 1000,
          timeout: 7000
        })
        .subscribe((position: any) => {
          this.mechanicLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }

          this.changedLocation.emit(this.mechanicLocation);

          this.placeMechanicMarker(this.mechanicLocation, this.globalGoogleMaps);
        }, (err) => {
          console.log('Error in watch position: ', err);
        })
      }).catch(err => {
        console.error(err);
      })
  }

  ngAfterViewInit() {
    this.drawMap();
  }

  // //Draw markers for facility locations
  // drawMarkers(markers, attempt = 0) {
  //   if (!markers) {
  //     return;
  //   }

  //   //Waited 3 seconds for loading of google maps library, if still failing then show an error and exit
  //   if (attempt == 3) {
  //     this.toastService.failureToast("Failed to place markers on google map.");
  //     return;
  //   }

  //   if (!this.globalGoogleMaps) {
  //     setTimeout(() => {
  //       this.drawMarkers(markers, attempt + 1)
  //     }, 1000);

  //     return;
  //   }

  //   for (let i = 0; i < markers.length; i++) {
  //     this.placeMarker(markers[i], undefined, this.globalGoogleMaps);
  //   }
  // }

  placeUserMarker(location, marker, googleMaps) {
    if (!googleMaps) {
      return;
    }

    const locationObj = new this.globalGoogleMaps.LatLng(location.latitude, location.longitude);

    if (marker == undefined) {
      marker = new this.globalGoogleMaps.Marker({
        position: locationObj,
        map: this.globalMaps,
        animation: googleMaps.Animation.DROP,
        icon: 'http://maps.google.com/mapfiles/kml/pal3/icon34.png'
      });
    }
    else {
      marker.setPosition(locationObj);
    }

    this.markersArray.push(marker);
  }

  placeMechanicMarker(location, googleMaps) {
    if (!googleMaps) {
      return;
    }

    const locationObj = new this.globalGoogleMaps.LatLng(location.latitude, location.longitude);
    if (this.marker == undefined) {
      this.marker = new this.globalGoogleMaps.Marker({
        position: locationObj,
        map: this.globalMaps,
        animation: googleMaps.Animation.DROP,
        icon: 'http://maps.google.com/mapfiles/kml/pal4/icon7.png'
      });
    }
    else {
      this.marker.setPosition(locationObj);
    }

    this.markersArray.push(this.marker);
  }

  clearMarkers = () => {
    for (let i = 0; i < this.markersArray.length; i++) {
      this.markersArray[i].setMap(null);
    }
  }
}
