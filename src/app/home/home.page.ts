/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';


import { AngularFireDatabase } from '@angular/fire/compat/database';

//import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

import { ModalController } from '@ionic/angular';
import { ViewPage } from '../view/view.page';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  tasks_details = [];

  set_times;

  day_details = {
    details : '',
    due_date : '',
    due_time : '',
    set_times : '',
  };

  constructor(private route: ActivatedRoute,
    public router: Router,
    public afDB: AngularFireDatabase ,
    private formBuilder: FormBuilder,
    private modalctrl: ModalController
    ) { }

  ngOnInit() {
  }

  task()
  {
    this.router.navigateByUrl('task');
  }

  view(user)
  {

    this.day_details = {
      details : user.details,
      due_date : user.due_date,
      due_time : user.due_time,
      set_times : this.set_times
    };
    this.modalctrl.create({
      component : ViewPage,
      componentProps : this.day_details
    }).then(modalres =>{
      modalres.present();

      // modalres.onDidDismiss().then(res=>{
      //   this.ionViewWillEnter();
      // })
    });
  }


  settings()
  {
    this.router.navigateByUrl('settings');
  }

  ionViewWillEnter()
  {
    const promise = new Promise((resolve,reject) =>{

      this.afDB.database.ref('tasks').once('value',snap =>{

         const res =snap.val();

         this.tasks_details = [];

         for(const i in res)
         {
           this.set_times = res[i].due_time;
          const times = (res[i].due_time).split('T');

          const times_part = times[1].split('.');

         const times_date = times_part[0];


           res[i].due_time = times_date;

           this.tasks_details.push(res[i]);
         }

         console.log(this.tasks_details);


      // this.afDB.database.ref('Requests').child(this.UserUid).child('Sent Requests').once('value' , snap =>{
      //   var res =snap.val();
      //   let sentArray = [];
      //   for(var i in res)
      //   {
      //     sentArray.push(res[i])
      //   }

      //   for(var i in userDetails)
      //   {
      //     for(var ii in sentArray)
      //     {
      //       if(userDetails[i].Id == sentArray[ii].Id)
      //       {
      //         Details.push(userDetails[i])
      //       }
      //     }
      //   }

      //   resolve(Details);

      // }).catch((err) =>{
      //   reject(err);
      // })
    }).catch((err) =>{
      reject(err);
    });

    });
  }

}
