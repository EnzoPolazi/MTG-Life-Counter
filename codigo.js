let botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => {
    btn.addEventListener('click', function(){
        let valor = Number(btn.value)
        let player = btn.getAttribute('player');
        contaVida(valor, player)
    })

});

function contaVida(valor, player){
   let display = document.getElementById(player);

   let valorFinal = Number(display.innerHTML) + valor;
   display.innerHTML = valorFinal
}
