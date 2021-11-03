import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/compat/database';

//import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private route: ActivatedRoute,
    public router: Router,
    public afDB: AngularFireDatabase ,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  homeback()
  {
    this.router.navigateByUrl('home');
  }

}
