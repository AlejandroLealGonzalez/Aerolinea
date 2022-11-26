import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form_Data } from 'src/app/config/form-data';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-journey-show',
  templateUrl: './journey-show.component.html',
  styleUrls: ['./journey-show.component.css']
})
export class JourneyShowComponent implements OnInit{
  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
      this.CreateForm();
  }

  form: FormGroup = new FormGroup({});

  CreateForm(){
    this.form = this.fb.group({
      origen:["", [Validators.required, Validators.minLength(Form_Data.ORIGINLENGHT), Validators.maxLength(Form_Data.ORIGINLENGHT)]],
      destino:["", [Validators.required, Validators.minLength(Form_Data.DESTINOLENGHT), Validators.maxLength(Form_Data.DESTINOLENGHT)]]
    });
  }

  buscarRuta(){

  }

  get GetForm(){
    return this.form.controls;
  }
}
