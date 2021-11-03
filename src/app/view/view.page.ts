/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  task_details= {
    details : '',
    due_date : '',
    due_time : '',
    set_times : '',
  };


  constructor(private modalctrl: ModalController,
    private navparams: NavParams,
    public afDB: AngularFireDatabase
    ) {


        this.task_details= {
          details : this.navparams.data.details,
          due_date : this.navparams.data.due_date,
          due_time : this.navparams.data.due_time,
          set_times : this.navparams.data.set_times
        };


    }


    delete()
    {
      // var promise = new Promise((resolve, reject ) =>{
      //   var ref = this.afDB.database.ref('tasks').child(this.task_details.due_date).orderByChild('details').equalTo(this.task_details.details).orderByChild('due_date').equalTo(this.task_details.due_date).orderByChild('due_time').equalTo(this.task_details.set_times).once('value' , snap =>{
      //       Status : 'Inactive';
      //     }).then(() =>{
      //       resolve(true);
      //     }).catch((err) =>{
      //       reject(err);
      //     });
      //   });
    }

  ngOnInit() {
  }

  close(){
      this.modalctrl.dismiss(this.task_details);
  }

}
