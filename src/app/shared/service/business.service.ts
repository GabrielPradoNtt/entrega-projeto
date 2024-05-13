import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface AccountsPayable { 
  value: number; title: string; company: string; date: string; 
}
@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private urlApi = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  //  CHAMADA PARA PEGAR AS CONTAS A PAGAR
  getAccountsPayable() {
    return this.httpClient.get(this.urlApi + 'contas-pagar');
  }
  //  CHAMADA PARA PEGAR AS CONTAS A PAGAR
  postAccountsPayable(acconts: AccountsPayable) {
    return this.httpClient.post(this.urlApi + 'contas-pagar', acconts);
  }

  //  CHAMADA PARA PEGAR AS CONTAS A RECEBER
  getAccountsReceivable() {
    return this.httpClient.get(this.urlApi + 'contas-receber');
  }

  //  CHAMADA PARA PEGAR AS PESSOAS
  getPeople() {
    return this.httpClient.get(this.urlApi + 'pessoas');
  }
}
