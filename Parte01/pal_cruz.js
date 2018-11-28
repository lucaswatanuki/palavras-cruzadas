var dadoAtual;
var dadoMatriz;
var dadoMatrizUpper;

function MatrizJogo(){
    var celula = [      [0  ,0  ,0  ,0  ,0  ,'b','i','f','e',0  ,0 ],
                        [0  ,0  ,0  ,0  ,0  ,0  ,0  ,'e',0  ,0  ,0  ],
                        [0  ,'s',0  ,0  ,'l',0  ,'m','i','o','j','o'],
                        [0  ,'a',0  ,0  ,'a',0  ,0  ,'j',0  ,0  ,0  ],
                        [0  ,'l',0  ,0  ,'s',0  ,0  ,'a',0  ,0  ,0  ],
                        [0  ,'a',0  ,0  ,'a','r','r','o','z',0  ,0  ],
                        [0  ,'d',0  ,0  ,'n',0  ,0  ,0  ,0  ,0  ,0  ],
                        ['l','a','n','c','h','e',0  ,0  ,0  ,0  ,0  ],
                        [0  ,0  ,0  ,0  ,'a',0  ,0  ,0  ,0  ,0  ,0  ]
]; 
return celula;
}

function MatrizJogoUpper() {
    var celulaUpper =   [[0, 0, 0, 0, 0, 'B', 'I', 'F', 'E', 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 'E', 0, 0, 0],
                        [0, 'S', 0, 0, 'L', 0, 'M', 'I', 'O', 'J','O'],
                        [0, 'A', 0, 0, 'A', 0, 0, 'J', 0, 0, 0],
                        [0, 'L', 0, 0, 'S', 0, 0, 'A', 0, 0, 0],
                        [0, 'A', 0, 0, 'A', 'R', 'R', 'O', 'Z', 0, 0],
                        [0, 'D', 0, 0, 'N', 0, 0, 0, 0, 0, 0],
                        ['L', 'A', 'N', 'C', 'H', 'E', 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 'A', 0, 0, 0, 0, 0, 0]
                        ];
    return celulaUpper;
}


function inicializar(){
    var tabela = document.getElementById("palavras_cruzadas");
    dadoMatriz = MatrizJogo();
    dadoMatrizUpper = MatrizJogoUpper();

        for (var i=0 ; i < dadoMatriz.length ; i++){
            var linha = tabela.insertRow(-1);
            var dadoLinha = dadoMatriz[i];

            for(var j=0 ; j < dadoLinha.length ; j++){
                var cel = linha.insertCell(-1);

                if(dadoLinha[j] != 0){
                    var textoID = String('texto' + '_' + i + '_' + j);
                    cel.innerHTML ='<input type="text" class="formulario" style="text-transform: uppercase" maxlength="1" ' + 'id="' + textoID + '">';
                } else {
                    cel.style.backgroundColor = "black";
                }
            }
        }
        numeros_Dica();
    }


        function numeros_Dica(){
            document.getElementById("texto_0_5").placeholder = "1";
            document.getElementById("texto_2_6").placeholder = "2";
            document.getElementById("texto_5_4").placeholder = "3";
            document.getElementById("texto_7_0").placeholder = "4";
            document.getElementById("texto_2_4").placeholder = "5";
            document.getElementById("texto_0_7").placeholder = "6";
            document.getElementById("texto_2_1").placeholder = "7";
        }


function checar() {
    for (var i = 0; i < dadoMatriz.length; i++) {
        var dadoLinha = dadoMatriz[i];
        for (var j = 0; j < dadoLinha.length; j++) {
            if (dadoLinha[j] != 0) {
                var elemento = document.getElementById('texto' + '_' + i + '_' + j);
                if ((elemento.value != dadoMatriz[i][j]) && (elemento.value != dadoMatrizUpper[i][j])) {
                    elemento.style.backgroundColor = 'red';
                } else {
                    elemento.style.backgroundColor = 'green';
                }
            }    
        }
    }
}

function reiniciar() {
    currentTextInput = '';
    var tabela = document.getElementById("palavras_cruzadas");
    tabela.innerHTML = '';
    inicializar();
}