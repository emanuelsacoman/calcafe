import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vazao',
  templateUrl: './vazao.page.html',
  styleUrls: ['./vazao.page.scss'],
  standalone: false,
})
export class VazaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitFormVazao(form: NgForm): void {
    if (form.valid) {
      console.log('Dados do formulário:', form.value.numero1 + form.value.numero2);
    }
  }

}
