import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  private icons = [
    'square-outline',
    ];

    public items: Array<{ title: string; note: any; icon: string }> = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menu: MenuController
  ) {
    this.initializeApp();

    for (let i = 1; i < 6; i++) {
  		this.items.push({
  			title: 'Week ' + i + ' Study Guide',
  			note: i,
  			icon: this.icons[Math.floor(Math.random() * this.icons.length)]
  		});
  	}
  }

  openLesson(item){
    this.router.navigate(['/lessons',item]);
    this.menu.swipeGesture;
    this.menu.close();
  }
  openTests()
  {
    this.router.navigateByUrl('/tests');
    this.menu.swipeGesture;
    this.menu.close();
  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
