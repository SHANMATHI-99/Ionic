/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/compat/database';

//import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  // ref = firebase.database().ref('infos/');
  // infoForm: FormGroup;

  tasks = {
    details : '',
    due_date : Date,
    due_time : '',
  };

  selectDateString: string =new Date().toISOString();

  constructor(private route: ActivatedRoute,
    public router: Router,
    public afDB: AngularFireDatabase ,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  }


  saveInfo() {
    // let newInfo = this.afDB.database().ref('infos/').push();
    // newInfo.set(this.infoForm.value);
    // this.router.navigate(['/detail/'+newInfo.key]);



    const due_set_date = (this.tasks.due_date).toString();
    const due_set_time = (this.tasks.due_time).toString();

     const dates = this.selectDateString.split('T');

      const date_part = dates[0].split('-');

     const tasks_date = date_part[2] + '-' + date_part[1] + '-' + date_part[0];


     const times = this.selectDateString.split('T');

      const times_part = times[1].split('.');

     const times_date = times_part[0];


    if(this.tasks.details!='' && this.tasks.details!=null && due_set_date!='' && this.tasks.due_date!=null &&  due_set_time!='' && this.tasks.due_time!=null)
    {
    const promise = new Promise((resolve,reject) =>{
  //  this.afDB.database.ref('tasks').child(tasks_date).push({
    this.afDB.database.ref('tasks').push({
      details : this.tasks.details,
      due_date : this.tasks.due_date,
      due_time : this.tasks.due_time,
      achive : 'incomplete',
      status : 'Active'
    }).then(() =>{
            alert('Task create!!!');
            resolve(true);
            this.router.navigateByUrl('home');
          });
        });
      }
      else
      {
        alert('please enter the value');
      }

  }

}
