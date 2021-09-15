// Inicio dos Scripts

    var altura = 0;
    var largura = 0;
    var vazio = 1;
    var tempo = 120;
    var velocidadeMosquito = 1700;

    function alturaLarguraJogo() {
        altura = window.innerHeight;
        largura = window.innerWidth;

        console.log(largura, altura);
    }

    alturaLarguraJogo();

    // Nivel do Jogo Mata Mosquito

    var nivel = window.location.search;
    nivel = nivel.replace('?', '');
    

    if( nivel === 'facil') {
        // 1500
        velocidadeMosquito = 1700;
    }else if(nivel === 'dificil') {
        // 1000
        velocidadeMosquito = 1000;
    }else if(nivel === 'megaDificil') {
        // 750
        velocidadeMosquito = 750;
    }

    var cronomentro = setInterval( function() {
        
        tempo -= 1
        // innerHTML -> Valor que vai entre as tegues.
        if( tempo < 0 ) {

            clearInterval(cronomentro);
            clearInterval(criaMosquito);
            window.location.href = 'vitoria.html';
        }else {
            document.getElementById('cronomento').innerHTML = tempo;
        }
        
    }, 1000);

    function posicaoRandomica() {

        if(document.getElementById('mosquito')){
            document.getElementById('mosquito').remove();

            // Lógica, quando não clicar no elemento de repedição, perde uma vidaaa.

            console.log(vazio);

            if( vazio > 3 ) {
                window.location.href = 'fim_jogo.html';
            }
           document.getElementById('v' + vazio).src = "img/coracao_vazio.png";

           vazio++;
        }

        // Criando Posições Aleatorias
            // Math.random() -> Cria posições aleatorias.
            // Math.floor() -> Ele deixa os números Inteiros.
            // Usamos -90 para a img ficar dentro da página html.
            var posicaoX = Math.floor(Math.random() * largura) - 200;
            var posicaoY = Math.floor(Math.random() * altura) - 200 ;

        // Usando o Operador Ternario. 
        // se posicaoX < 0 se for ? recebe 0 se não : posicaoX;
        posicaoX = posicaoX < 0 ? 0 : posicaoX;
        posicaoY = posicaoY < 0 ? 0 : posicaoY;

        // Criar Elemento HTML.
        // Usando o Elemento document.creatElement('img') -> Podemos criar elemento na página html.
        var mosquito = document.createElement('img');

        // Inserir a img na página html.
        mosquito.src = 'img/mosca.png';

        // Inserindo a class, para formatação.
        mosquito.className = imgTamanhoDiferente() + ' ' + ladoALadoB();
        mosquito.id = 'mosquito';
        // clicando no mosquito que está aparecend na tela, ele some.
        mosquito.onclick = function() {
            this.remove();
        }

        // Inserir minha imagem nas cordenadas Aleatorias  na Biblioteca Math, usando Math.random();
            // Inserindo a posição de top, altura.
            mosquito.style.top  = posicaoY + 'px';
            // Inserindo a posição de left, largura.
            mosquito.style.left = posicaoX + 'px';
            // Para dar certo temos que usar position="Absolute";
            mosquito.style.position = 'absolute';

        // Usando o Elemento document.body.appendChild(' var do elemento criado na página html') -> Vamos colocar o elemento criado no body da página html.
        document.body.appendChild(mosquito);
    }

    // Criar Tamanho diferentes para minha imagem, para cada vez que ele atualiza.
        function imgTamanhoDiferente() {
            var tamanho = Math.floor(Math.random() * 3);

            console.log(tamanho);
           switch(tamanho) {
                case 0:
                   return 'mosca';
                case 1:
                    return 'mosca1';
                case 2:
                    return 'mosca2';
                
           }

        }
    
    // Criações de lados Mosquitos
    function ladoALadoB() {
        var ladosAB = Math.floor(Math.random() * 2);
        console.log(ladosAB);
        switch(ladosAB) {
            case 0: 
                return 'ladoA';
            case 1:
                return 'ladoB';
        }
    }


// Fim dos Scripts