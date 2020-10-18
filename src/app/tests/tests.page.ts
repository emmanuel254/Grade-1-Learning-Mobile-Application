import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { PortService } from '../services';
import { Port } from '../types';



@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
})
export class TestsPage implements OnInit {

  animal:any;
  family:any;
  grade:string;
  name:string;
  fruits:any;
  number:any;

  ports: Port[];
  port: Port;

  constructor( private router: Router,
    private portService: PortService,
    public alertController: AlertController) { 
     }

  ngOnInit() {
    this.ports = this.portService.getPorts();
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }

  cancelTest()
  {
    this.router.navigateByUrl('/home');
  }
  submitTest(){

   let headername = this.name;

   console.log(this.animal+this.family+this.fruits)
   if(this.animal != 'frog'){
    this.presentAlert('You have selected wrong animal on question number 4. The correct answer is frog');
   }else if(this.number != 5)
   {
    this.presentAlert('You have selected wrong choice on question 5. Correct answer is FIVE');
   }else if(this.family != 'fm')
   {
    this.presentAlert('You have selected wrong choice on question 6. Correct answer is FAMILY MEMBERS');
   }else{
    this.presentAlertConfirm(headername);
   }
    
   
  }

  async presentAlertConfirm(header) {
    const alert = await this.alertController.create({
      header: 'Congratulations - '+header,
      message: 'You have passed the Examinations <strong>Hooray. You can go and share this amazing app to your fellow pupils</strong>!!!',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.router.navigateByUrl('/tests');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'OOPS',

      message: message+' Kindly select the correct choice',
      buttons: ['OK']
    });

    await alert.present();
  }


}
