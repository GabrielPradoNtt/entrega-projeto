import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountsPayable, BusinessService } from '../../shared/service/business.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize, take } from 'rxjs';
@Component({
  selector: 'app-accounts-payable',
  templateUrl: './accounts-payable.component.html',
  styleUrl: './accounts-payable.component.css'
})
export class AccountsPayableComponent implements OnInit{
  formAccountsPayable: FormGroup;
  ListAccountsPayable: Array<AccountsPayable> = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: BusinessService

  ) {
    this.formAccountsPayable = this.formBuilder.group({
      title: ['', Validators.required],
      value: ['', Validators.required],
      company: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {
      this.searchAccountsPayable();
  }
  searchAccountsPayable() {
    this.service.getAccountsPayable().subscribe( res => {
      this.ListAccountsPayable = res as Array<AccountsPayable>;
    } )
  }

  enviarConta(){
    this.formAccountsPayable.markAllAsTouched();
    if(this.formAccountsPayable.valid ){
      let valores = this.formAccountsPayable.value;
      valores.value = "R$ "+parseFloat(valores.value).toFixed(2).replace(".", ",");
      this.service.postAccountsPayable(valores)
      .pipe( 
        take(1), 
        finalize( () => this.searchAccountsPayable() ) 
      )
      .subscribe( res => {
        if(res){
          this.formAccountsPayable.reset();
          this.formAccountsPayable.markAsUntouched();
        }
      } )
    };
  }
}
