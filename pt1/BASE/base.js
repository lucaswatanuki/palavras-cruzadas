var textoAtual; // entrada de texto atual
var dadoMatriz; // dados matriz

function MatrizJogo(){
	var celula = [          [0  ,0  ,0  ,0  ,0  ,'b','i','f','e',0  ,0  ],
							[0  ,0  ,0  ,0  ,0  ,0  ,0  ,'e',0  ,0  ,0  ],
							[0  ,0  ,0  ,0  ,'l',0  ,'m','i','o','j','o'],
							[0  ,0  ,0  ,0  ,'a',0  ,0  ,'j',0  ,0  ,0  ],
							[0  ,0  ,0  ,0  ,'s',0  ,0  ,'a',0  ,0  ,0  ],
							[0  ,0  ,0  ,0  ,'a','r','r','o','z',0  ,0  ],
							[0  ,0  ,0  ,0  ,'n',0  ,0  ,0  ,0  ,0  ,0  ],
							['l','a','n','c','h','e',0  ,0  ,0  ,0  ,0  ],
							[0  ,0  ,0  ,0  ,'a',0  ,0  ,0  ,0  ,0  ,0  ]
	]; 
	return celula;
}

function inicializar(){
	var tabela = document.getElementById("palavras_cruzadas");
	dadoMatriz = MatrizJogo();

	for (var i = 0; i < dadoMatriz.length ; i++ ) {
		var linha = tabela.insertRow(-1);
        var dadoLinha = dadoMatriz[i];
		
		for(var j = 0 ; j < dadoLinha.length ; j++){
			var cel = linha.insertCell(-1);

			if(dadoLinha[j] != 0){
				var txtID = String('texto' + '_' + i + '_' + j);
				cel.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: lowercase" ' + 'id="' + txtID + '" onfocus="textInputFocus(' + "'" + txtID + "'"+ ')">';
			} else{
				cel.style.backgroundColor  = "black";
			}
		}
	}
	NumeroDica();
}
//Adds the hint numbers - numeros da dica
function NumeroDica(){
document.getElementById("texto_0_5").placeholder = "1";
document.getElementById("texto_2_6").placeholder = "2";
document.getElementById("texto_5_4").placeholder = "3";
document.getElementById("texto_7_0").placeholder = "4";
document.getElementById("texto_2_4").placeholder = "5";
document.getElementById("texto_0_7").placeholder = "6";
}
//Stores ID of the selected cell into currentTextInput


function textInputFocus(txtID123){
	currentTextInput = txtID123;
}
//Returns Array


function checkClicked(){
	for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
		var rowData = puzzelArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			if(rowData[j] != 0){
				var selectedInputTextElement = document.getElementById('txt' + '_' + i + '_' + j);
				if(selectedInputTextElement.value != puzzelArrayData[i][j]){
					selectedInputTextElement.style.backgroundColor = 'red';
					
				}else{
					selectedInputTextElement.style.backgroundColor = 'green';
				}
			}
		}
	}
}
