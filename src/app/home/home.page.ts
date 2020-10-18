import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { File } from '@ionic-native/file/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	  private selectedItem: any;
	 
  private icons = [
  'flask',
  'wifi',
  'beer',
  'football',
  'basketball',
  'paper-plane',
  'american-football',
  'boat',
  'bluetooth',
  'build'
  ];
  public items: Array<{ title: string; note: any; icon: string }> = [];

  constructor(
			private menu: MenuController,
			private router: Router,
			) 
  {
	  
  	for (let i = 1; i < 6; i++) {
  		this.items.push({
  			title: 'Lesson ' + i,
  			note: i,
  			icon: this.icons[Math.floor(Math.random() * this.icons.length)]
  		});
  	}
  }

openLesson(item){
	this.router.navigate(['/lessons',item]);
}

openTests()
{
  this.router.navigateByUrl('/tests');
  this.menu.swipeGesture;
  this.menu.close();
}


}
