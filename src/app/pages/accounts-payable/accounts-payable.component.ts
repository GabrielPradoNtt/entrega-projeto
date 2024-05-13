import { Component, OnInit, ViewChild } from '@angular/core';
import { BusinessService } from '../../shared/service/business.service';
@Component({
  selector: 'app-accounts-payable',
  templateUrl: './accounts-payable.component.html',
  styleUrl: './accounts-payable.component.css'
})
export class AccountsPayableComponent implements OnInit {
  formAccountsPayable: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: BusinessService

  ) {
    this.formAccountsPayable = this.formBuilder.group({
      description: ['', Validators.required],
      value: ['', Validators.required],
      payer: ['', Validators.required],
      dueDate: ['', Validators.required],
    });
  }

  subenviarConta(){
    this.formAccountsPayable.markAllAsTouched();
    if(this.formAccountsPayable.valid ){
      const valores = this.formAccountsPayable.value;
      this.service.postAccountsPayable(valores).subscribe( res => {
        if(res){
          this.formAccountsPayable.reset();
        }
      } )
    };
  }
}
