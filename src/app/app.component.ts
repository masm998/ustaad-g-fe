import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  splashScreen: any;
  constructor(private platform: Platform) {}
  
  ngOnInit(){
    this.initializeApp()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        // this.splashScreen.hide();
      }, 1000);

    });
  }
}
