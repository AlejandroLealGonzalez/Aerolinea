import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form_Data } from 'src/app/config/form-data';
import { JourneyModel } from 'src/app/models/journey.model';
import { JourneysService } from 'src/app/services/journeys.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-journey-show',
  templateUrl: './journey-show.component.html',
  styleUrls: ['./journey-show.component.css']
})
export class JourneyShowComponent implements OnInit{
  journeyList : JourneyModel[] = [];
  routesList: JourneyModel[] =[];
  selectedCurrency: string = '1';
 
  
  constructor(private fb: FormBuilder, private journeysService:JourneysService){

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
    this.routesList = [];
    let ori = this.form.controls['origen'].value.toUpperCase();
    let dest = this.form.controls['destino'].value.toUpperCase();
    if(ori == dest){
      alert("origin and destination cannot be the same");
    }
    else{
      this.journeysService.getRutas().subscribe({
        next: (data:JourneyModel[]) => {
          this.journeyList = data;
        }
      });

      for(let i in this.journeyList){
        if(ori == this.journeyList[i].departureStation && dest == this.journeyList[i].arrivalStation){
          this.routesList.push(this.journeyList[i]);
        }
      }

      console.log(this.routesList);
      if(this.selectedCurrency == "2"){
        for(let p in this.routesList){
          this.routesList[p].price = (this.routesList[p].price * 97)/100;
        }
      }else if(this.selectedCurrency == "3"){
        for(let p in this.routesList){
          this.routesList[p].price = this.routesList[p].price * 4866;
        }
      }

      if(this.routesList.length == 0){
        alert("Journey not found");
      }
    }
  }

  currencyChange(event:any){
    this.selectedCurrency = event.target.value;
    console.log(this.selectedCurrency)
  }

  get GetForm(){
    return this.form.controls;
  }
}
