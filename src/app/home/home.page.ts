import { Component } from '@angular/core'; 
import { ModalController } from '@ionic/angular';
import { CalendarModalPage } from '../calendar-modal/calendar-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 

  public data: string = '';

  constructor(public modalController: ModalController) {

  } 
  
  ngOnInit() {  

  } 

  
  async openModal() {
    const modal = await this.modalController.create({
      component: CalendarModalPage, 
      componentProps: {
        importmodalData: 'hello', 
        backdropDismiss: false, 
        presentingElement: await this.modalController.getTop()

      }
      
    }); 

    modal.onDidDismiss().then(dataReturned => {
      this.data = dataReturned.data;
      console.log('Receive: ', this.data);
    });

    return await modal.present(); 
     
    
  } 

}
