import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
  // on declare la propriété paymentForm et utilisant le FormGroup d'angular
  coordonneesForm!: FormGroup;
  billingForm!: FormGroup;
  paymentForm!: FormGroup;

  // on cree  les tableaux d'erreurs de type String pour chaque formulaire
  validationCoordonneesError: string[] = [];
  validationBillingError: string[] = [];
  validationPaymentError: string[] = [];

  // on appelle le FormBuilder d'angular dans le constructeur
  constructor(private formBuilder: FormBuilder,
    private router: Router) { };

  // on definit la structure typeScript des formulaires
  ngOnInit() {
    this.coordonneesForm = this.formBuilder.group({
      user_name: [null, [Validators.required]],
      user_firstName: [null, [Validators.required]],
      user_email: [null, [Validators.required]],
      user_phone: [null, [Validators.required]]
    });

    this.billingForm = this.formBuilder.group({
      billing_name: [null, [Validators.required]],
      billing_firstName: [null, [Validators.required]],
      billing_adress: [null, [Validators.required]],
      billing_complements: [null, [Validators.required]],
      billing_postalCode: [null, [Validators.required]],
      billing_city: [null, [Validators.required]]
    });

    this.paymentForm = this.formBuilder.group({
      card_username: [null, [Validators.required]],
      card_number: [null, [Validators.required]],
      card_expiration: [null, [Validators.required]],
      card_cvc: [null, [Validators.required]]
    });
  }
 


  // Fonction pour enregistrer le formulaire sur les coordonnees du clien et livraison
  registerCoordonnees() {
    this.validationCoordonneesError = [];
    if (this.coordonneesForm.invalid) {
      Object.keys(this.coordonneesForm.controls).forEach((input) => {
        const currentInput = this.coordonneesForm.get(input);
        console.log("currentInput", currentInput);
        if (currentInput && currentInput.status === "INVALID") {
          this.validationCoordonneesError.push(input);
        }
      });
    }
    // console.log("enregistré")
   // console.log(this.coordonneesForm.value);
   // console.log("tableau d'erreur", this.validationCoordonneesError);
  }

  registerBilling() {
    this.validationBillingError = [];
    if (this.billingForm.invalid) {
      Object.keys(this.billingForm.controls).forEach((input) => {
        const currentInput = this.billingForm.get(input);
        console.log("currentInput", currentInput);
        if (currentInput && currentInput.status === "INVALID") {
          this.validationBillingError.push(input);
        }
      });
    }
   // console.log(this.billingForm.value);
  }

  // Fonction pour valider le paiement
  pay() {
    this.validationPaymentError = [];
    if (this.paymentForm.invalid) {
      Object.keys(this.paymentForm.controls).forEach((input) => {
        const currentInput = this.paymentForm.get(input);
        console.log("currentInput", currentInput);
        if (currentInput && currentInput.status === "INVALID") {
          this.validationPaymentError.push(input);
        }
      });
    }
  
  
  
    // console.log("payé");
   // console.log(this.paymentForm.value);
  }
  payment(){
    if(!this.coordonneesForm.invalid && !this.billingForm.invalid && !this.paymentForm.invalid){

      this.router.navigate(['payment-sucess']);
    }
  }



  }

 
