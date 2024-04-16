import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, Output, EventEmitter, Input } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { Platform, ModalController } from '@ionic/angular';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapElementRef: ElementRef;
  @Output() selected = new EventEmitter<any>();

  selectLocationVal= {
    latitude: '',
    longitude: '',
    country: '',
    city: '',
    area: '',
    street: '',
    house: ''
  }

  currentLocation
  subscription: Subscription
  markersArray = [];
  globalGoogleMaps;
  globalMaps;
  globalMarker;

  private apiKey = "API_KEY"
  clickable = true;
  searchable = true;

  constructor(private renderer: Renderer2, private toastService: ToastService, private modalController: ModalController,
    private localstorageservice: LocalStorageService, private platform: Platform, private nativeGeocoder: NativeGeocoder) { }

  ngOnInit() {
    this.currentLocation = this.localstorageservice.getLocation()
    console.log('current: ', this.currentLocation)

    this.subscription = this.platform.backButton.subscribe(()=>{
      this.modalController.dismiss()
    });
  }

  @Input('center')
  set center(location) {
    if (this.globalGoogleMaps) {
      this.globalGoogleMaps.setCenter(location);
    }
  }

  @Input('markers')
  set markers(markers) {

    this.drawMarkers(markers);
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


  addSearchBar() {
    //Search bar
    let inputElement = document.createElement("input");
    inputElement.setAttribute("id", "pac-input");
    inputElement.setAttribute("placeholder", "Search a location");
    inputElement.className = 'map-searchbar'

    // this.globalMaps.controls[this.globalGoogleMaps.ControlPosition.TOP_LEFT].push(inputElement);

    // Bias the SearchBox results towards current map's viewport.
    // this.globalMaps.addListener('bounds_changed', () => {
    //   searchBox.setBounds(this.globalMaps.getBounds());
    // });

    // searchBox.addListener('places_changed', () => {
    //   var places = searchBox.getPlaces();
    //   console.log('place: ', places)

    //   // For each place, get the icon, name and location.
    //   places.forEach((place) => {
    //     if (!place.geometry) {
    //       console.log("Returned place contains no geometry");
    //       return;
    //     }

    //     if (this.clickable) {
    //       this.clearMarkers();
    //     }

        this.selected.emit(this.currentLocation);

    //     const location = {
    //       longitude: parseFloat(place.geometry.location.lng()),
    //       latitude: parseFloat(place.geometry.location.lat())
    //     };
    //     // console.log('location of marker: ', location)
    //     const locationObj = new this.globalGoogleMaps.LatLng(location.latitude, location.longitude);

    //     this.globalMaps.setZoom(15);
    //     this.globalMaps.setCenter(locationObj);

    //     this.placeMarker(location, undefined, this.globalGoogleMaps);
    //     // this.globalMaps.setCenter(place.geometry.location);
    //   });
    // });
  }

  makeMapClickable() {
    this.globalGoogleMaps.event.addListener(this.globalMaps, 'click', event => {

      this.clearMarkers();

      // if(this.createMode == false)
      // {
      //   this.selected.emit(
      //     {
      //       latitude: event.latLng.lat(),
      //       longitude: event.latLng.lng()
      //     }
      //   );
      // }

      const location = {
        latitude: event.latLng.lat(),
        longitude: event.latLng.lng()
      };
      // console.log('location of marker: ', location)

      this.placeMarker(location, undefined, this.globalGoogleMaps);
    });
  }

  drawMap() {
    this.initializeGoogleMap()
      .then(googleMaps => {
        //Get native element with name map
        const mapEl = this.mapElementRef.nativeElement;
        this.globalGoogleMaps = googleMaps;

        let center = 
        {
          lat: parseFloat(this.currentLocation.latitude),
          lng: parseFloat(this.currentLocation.longitude)
        }
        
        // {
        //   lng: 72.97371740,
        //   lat: 33.69929640
        // }

        this.globalMaps = new googleMaps.Map(mapEl, {
          center: center,
          zoom: 15,
          streetViewControl: false,
          mapTypeId: 'roadmap',
          mapTypeControl: false
        });

        //Make the map visible
        googleMaps.event.addListenerOnce(this.globalMaps, 'idle', () => {
          this.renderer.addClass(mapEl, 'visible');
        });

        let buttonElement = document.createElement("input")
        buttonElement.type = 'button'
        buttonElement.value = 'Next'
        buttonElement.style.background ='#707070'
        buttonElement.style.marginBottom ='19px'
        buttonElement.style.width ='30%'
        buttonElement.style.height ='40px'
        buttonElement.style.fontSize ='16px'  
        buttonElement.style.border ='none'
        buttonElement.style.borderRadius ='6px' 
        buttonElement.style.color ='white'      
        // buttonElement.onclick = () => {
        //   this.onCancel()
        // }

        // let imageElement = document.createElement("ion-icon");
        // imageElement.name = 'close-circle'
        // imageElement.style.fontSize = '32px'
        // imageElement.style.color = 'white'
        // imageElement.onclick = () => {
        //   this.onCancel()
        // }
        // imageElement.id = 'hd-img'

        // this.globalMaps.controls[this.globalGoogleMaps.ControlPosition.BOTTOM].push(buttonElement);

        this.placeMarker(this.currentLocation, undefined, this.globalGoogleMaps);

        //If map is clickable then center the map and add a marker wherever user clicks
        if (this.clickable) {
          this.makeMapClickable();
        }
        if (this.searchable) {
          this.addSearchBar();
        }
      }).catch(err => {
        console.error(err);
      })
  }

  ngAfterViewInit() {
    // this.geolocation.getCurrentPosition({
    //   enableHighAccuracy: true,
    //   maximumAge: 1000,
    //   timeout: 7000
    // })
    //   .then((resp) => {
    //     this.drawMap();
    //   })
    //   .catch((err) => {
      // if(this.platform.ready()) {
        
      // }
      this.drawMap();
    
    //   })
  }

  //Draw markers for facility locations
  drawMarkers(markers, attempt = 0) {
    if (!markers) {
      return;
    }

    //Waited 3 seconds for loading of google maps library, if still failing then show an error and exit
    if (attempt == 3) {
      this.toastService.failureToast("Failed to place markers on google map.");
      return;
    }

    if (!this.globalGoogleMaps) {
      setTimeout(() => {
        this.drawMarkers(markers, attempt + 1)
      }, 1000);

      return;
    }

    for (let i = 0; i < markers.length; i++) {
      this.placeMarker(markers[i], undefined, this.globalGoogleMaps);
    }
  }

  placeMarker(location, marker, googleMaps) {
    this.currentLocation = location;

    if (!googleMaps) {
      return;
    }

    const locationObj = new this.globalGoogleMaps.LatLng(location.latitude, location.longitude);

    if (marker == undefined) {
      marker = new this.globalGoogleMaps.Marker({
        position: locationObj,
        map: this.globalMaps,
        animation: googleMaps.Animation.DROP
        // icon: ''
      });
    }
    else {
      marker.setPosition(locationObj);
    }

    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(location.latitude, location.longitude, options)
    .then((result: NativeGeocoderResult[]) => {
      let address = result[0]
      console.log('address: ', address)
      this.selectLocationVal.latitude = address.latitude
      this.selectLocationVal.longitude = address.longitude
      this.selectLocationVal.country = address.countryName
      this.selectLocationVal.city = address.locality
      this.selectLocationVal.area = address.subLocality
      this.selectLocationVal.street = address.thoroughfare ? address.thoroughfare : null
      this.selectLocationVal.house = address.subThoroughfare ? address.subThoroughfare : null
      console.log('address: ', this.selectLocationVal)

      this.selected.emit(this.selectLocationVal);
    })
    .catch((error: any) => {
      console.log(error)
      this.selectLocationVal.latitude = location.latitude
      this.selectLocationVal.longitude = location.longitude
    });

    this.markersArray.push(marker);
    console.log('marker: ', locationObj)

    // if(this.createMode == false)
    // {
      // this.localstorageservice.setLocation(this.selectLocationVal.latitude, this.selectLocationVal.longitude)
      // this.selected.emit(
      //   {
      //     latitude: this.selectLocationVal.latitude,
      //     longitude: this.selectLocationVal.longitude,
      //     country: this.selectLocationVal.country,
      //     city: this.selectLocationVal.city,
      //     area: this.selectLocationVal.area
      //   }
      // );
    // }
  }

  clearMarkers = () => {
    for (let i = 0; i < this.markersArray.length; i++) {
      this.markersArray[i].setMap(null);
    }
  }

  // onCancel() {
  //   console.log('check: ', this.currentLocation)
  //   this.modalController.dismiss(this.currentLocation)
  // }

  ionViewDidLeave() {
    this.modalController.dismiss()
  }
}
