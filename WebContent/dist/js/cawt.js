/*!
 * cawt.js
 *
 * Copyright 2015 AGES
 **/

function analisaConsumo(tipo) {

	console.log(tipo);
	var valorReais = $('#reais_mes_atual').val();
	var valorReaisAnterior = $('#reais_mes_anterior').val();
	var tipo1 = "reais";
	
	if (tipo == 'agua') {
		var valorConsumo = $('#litros_agua_mes_atual').val();
		var valorConsumoAnterior = $('#litros_agua_mes_anterior').val();
		console.log(tipo + ":" + valorConsumo + "  " + valorConsumoAnterior
				+ " \nReais: " + valorReais + "  " + valorReaisAnterior);
	}

	if (tipo == 'watts') {
		var valorConsumo = $('#watts_eletro_mes_atual').val();
		var valorConsumoAnterior = $('#watts_eletro_mes_anterior').val();
		console.log(tipo + ":" + valorConsumo + "  " + valorConsumoAnterior
				+ " \nReais: " + valorReais + "  " + valorReaisAnterior);
	}
	if (tipo == 'gas') {
		var valorConsumo = $('#bot_gas_mes_atual').val();
		var valorConsumoAnterior = $('#bot_gas_mes_anterior').val();
		console.log(tipo + ":" + valorConsumo + "  " + valorConsumoAnterior
				+ " \nReais: " + valorReais + "  " + valorReaisAnterior);
	}
	if (tipo == 'telefone') {
		var valorConsumo = $('#minutos_telefone_mes_atual').val();
		var valorConsumoAnterior = $('#minutos_telefone_mes_anterior').val();
		console.log(tipo + ":" + valorConsumo + "  " + valorConsumoAnterior
				+ " \nReais: " + valorReais + "  " + valorReaisAnterior);
	}

	if (tipo == 'jogos') {
		var valorConsumo = $('#pontos_mes_atual').val();
		var valorConsumoAnterior = $('#pontos_mes_anterior').val();
		var valorReais = $('#mortes_mes_atual').val();
		var valorReaisAnterior = $('#mortes_mes_anterior').val();
		tipo1 = 'Mortes';
		console.log(tipo + ":" + valorConsumo + "  " + valorConsumoAnterior
				+ " \n" + tipo1 +":" + valorReais + "  " + valorReaisAnterior);
	}
	
	
	/*
	 * Calculo consumo em reais em relação ao mes anterior
	 */
	var percentualEmReais = ((valorReaisAnterior * 100) / valorReais) - 100;
	percentualEmReais = percentualEmReais.toFixed(2);

	if (valorReais < valorReaisAnterior) {
		var texto = "menor.";
	} else {
		var texto = "maior.";
	}

	var strReais = ("O consumo em Reais foi " + percentualEmReais + "% " + texto);

	/*
	 * Calculo consumo em watts em relação ao mes anterior
	 */
	var percentualConsumo = ((valorConsumoAnterior * 100) / valorConsumo) - 100;
	percentualConsumo = percentualConsumo.toFixed(2);

	if (valorConsumo < valorConsumoAnterior) {
		var texto = "menor.";
	} else {
		var texto = "maior.";
	}

	var strConsumo = (strReais + "\n  O consumo em " + tipo + " foi "
			+ percentualConsumo + "% " + texto);
	console.log(strConsumo);

	/*
	 * Montagem da saida para a div de análise
	 */

	$('#analise').css('color', 'green').css('font', 'weight:bold').text(
			strConsumo);

	/*
	 * Dados do Gráfico
	 */
	var barChartData = {
		scaleGridLineColor : "rgba(0,0,0,.50)",
		labels : [ tipo1, tipo ],

		datasets : [ {
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			data : [ valorReais, valorConsumo ]
		}, {
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			data : [ valorReaisAnterior, valorConsumoAnterior ]
		} ]

	};

	var ctx = $("#graficoBar")[0].getContext("2d");

	var myNewChart = new Chart(ctx).Bar(barChartData);

};
