import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-sucess',
  templateUrl: './payment-sucess.component.html',
  styleUrls: ['./payment-sucess.component.css']
})
export class PaymentSucessComponent {
  coordonneesForm!: FormGroup;
  billingForm!: FormGroup;
  paymentForm!: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ){}

  
}



