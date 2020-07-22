import { Component, OnInit, Input } from '@angular/core';  
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.page.html',
  styleUrls: ['./calendar-modal.page.scss'],
})
export class CalendarModalPage implements OnInit {

  @Input() modalData: any;

  viewTitle;  
  viewCurrentDate;  

  minDate: Date =  new Date("2019-01-01"); //set my currnet date to jan 2019 
  // maxDate: Date = new Date();   

  calendar = { 
    mode: 'month',  
    currentDate: this.minDate
    
  };
  
  constructor(public modalController: ModalController) { 
  
  } 
  
  ngOnInit() {  

  } 

  slideNext() {
    let swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }
   
  slidePrev() {
    let swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }
   
  onViewTitleChanged(title:string) {
    return this.viewTitle = title;
  }  

  onCurrentDateChanged(date: Date) {
    return this.viewCurrentDate = date;
  }

  closeModal() {
    return this.modalController.dismiss()
  } 

  //for ok button
  passDateData() { 
    this.modalController.dismiss(this.viewCurrentDate); 
   
  }
 

}


