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

  ngOnInit() {}

  submitFormVazao(form: NgForm): void {
    if (!form.valid) { return; }

    // 1) Extrai e garante que são números
    const areaHa          = parseFloat(form.value.areaHa);
    const chuvaMm         = parseFloat(form.value.chuvaMm);
    const distanciaM      = parseFloat(form.value.distanciaM);
    const tempoPercorridoS= parseFloat(form.value.tempoPercorridoS);
    const volumeSistemaL  = parseFloat(form.value.volumeSistemaL);
    const numBicos        = parseInt(form.value.numBicos, 10);

    // 2) Cálculos intermediários conforme a folha
    const volumeChuvaL      = areaHa * chuvaMm * 10000;
    const fluxoLMin         = volumeChuvaL / 1440;
    const velocidadeMS      = distanciaM / tempoPercorridoS;
    const tempoDescargaS    = fluxoLMin / velocidadeMS;
    const vazaoSistemaLS    = volumeSistemaL / tempoDescargaS;
    const vazaoPorBicoLS    = vazaoSistemaLS / numBicos;
    const volumePorBico15sL = vazaoPorBicoLS * 15;

    // 3) Print de todos os resultados
    console.group('🧮 Cálculo de vazão');
    console.log('Área (ha):'               , areaHa);
    console.log('Chuva diária (mm):'       , chuvaMm);
    console.log('→ Volume chuva (L):'      , volumeChuvaL.toFixed(0));
    console.log('→ Fluxo (L/min):'         , fluxoLMin.toFixed(2));
    console.log('Distância (m):'           , distanciaM);
    console.log('Tempo percurso (s):'      , tempoPercorridoS);
    console.log('→ Velocidade (m/s):'      , velocidadeMS.toFixed(2));
    console.log('Tempo desc. (s):'         , tempoDescargaS.toFixed(2));
    console.log('Volume sistema (L):'      , volumeSistemaL);
    console.log('→ Vazão sistema (L/s):'   , vazaoSistemaLS.toFixed(3));
    console.log('Número de bicos:'         , numBicos);
    console.log('→ Vazão por bico (L/s):'  , vazaoPorBicoLS.toFixed(4));
    console.log('%c→ Volume por bico em 15s (L):', 'font-weight:bold', volumePorBico15sL.toFixed(3));
    console.groupEnd();
  }

}