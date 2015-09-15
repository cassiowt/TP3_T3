/*!
 * cawt.js
 *
 * Copyright 2014 CAWT Informpatica Agil
 **/
/*
 window.onload = LoadLocalData();

 function LoadLocalData() {

 var reais = localStorage.getItem('reais_eletro_mes_atual');

 if (reais == null) {
 localStorage.setItem('storage_reais', '550');

 var x =  $('input #reais_eletro_mes_atual').val("500") ;
 //alert('Passou' + x);

 //document.getElementById("reais_eletro_mes_atual").value = '550';
 } else {
 document.getElementById("reais_eletro_mes_atual").value = localStorage.getItem('storage_reais');
 //alert('Passou aqui tambem');

 }
 }
 */

function analisaConsumoEletrico() {
  /*$(document).ready(function() {*/
  var valorReais = $('#reais_eletro_mes_atual').val();
  var valorWatts = $('#watts_eletro_mes_atual').val();

  var valorReaisAnterior = $('#reais_eletro_mes_anterior').val();
  var valorWattsAnterior = $('#watts_eletro_mes_anterior').val();

/*
	Calculo consumo em reais em relação ao mes anterior
*/
  var percentualEmReais = ((valorReaisAnterior * 100) / valorReais) - 100;
  percentualEmReais = percentualEmReais.toFixed(2);

  if (valorReais < valorReaisAnterior) {
    var texto = "menor.";
  } else {
    var texto = "maior.";
  }

  var strReais = ("O consumo em Reais foi " + percentualEmReais + "% " + texto );
  console.log(strReais);

/*
  Calculo consumo em watts em relação ao mes anterior
*/
  var percentualEmWatts = ((valorWattsAnterior * 100) / valorWatts) - 100;
  percentualEmWatts = percentualEmWatts.toFixed(2);

  if (valorWatts < valorWattsAnterior) {
    var texto = "menor.";
  } else {
    var texto = "maior.";
  }

  var strWatts = (strReais + "\n  O consumo em Watts foi " + percentualEmWatts + "% " + texto);
  console.log(strWatts);

/*
	Montagem da saida para a div de análise
*/

  $('#analise').css('color', 'green').css('font','weight:bold').text(strWatts);


/*
	Dados do Gráfico
*/
  var barChartData = {
    labels : ["Reais", "Watts"],

    datasets : [{
      fillColor : "rgba(220,220,220,0.5)",
      strokeColor : "rgba(220,220,220,1)",
      data : [valorReais, valorWatts]
    }, {
      fillColor : "rgba(151,187,205,0.5)",
      strokeColor : "rgba(151,187,205,1)",
      data : [valorReaisAnterior, valorWattsAnterior]
    }]

  };

  var ctx = $("#graficoEletrico")[0].getContext("2d");

  var myNewChart = new Chart(ctx).Bar(barChartData);

}

