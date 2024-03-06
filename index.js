let saldo = 0;
var sair = true

while (sair) {
    let resposta = prompt("depositar (digite 1) sacar (digite 2) emprestimo (digite 3) sair (digite 0) ")
    let respostaIneiro = parseInt(resposta)

    if (respostaIneiro !== 1 && respostaIneiro !== 2 && respostaIneiro !== 3 && respostaIneiro !== 0) {
        console.log("Informe um valor válido")
    } else {
        switch (respostaIneiro) {
            case 1:
                let perguntaDepositado = prompt("Qual valor deseja depositar?")
                let valorDepositado = parseFloat(perguntaDepositado)
                saldo = valorDepositado.toFixed(2)

                console.log(saldo)
                break;

            case 2:
                let perguntaSacar = prompt("Qual valor deseja Sacar?")
                let valorSacar = parseFloat(perguntaSacar)

                if (valorSacar > saldo) {
                    alert(`Saldo insufucuente!!! - Saldo atual ${saldo}`)
                } else {
                    saldo = saldo - valorSacar
                }
                console.log(saldo)
                break;

            case 3:

                let perguntaImprestimo = prompt("Qual o valor de impréstimo você deseja? ")
                let valorImprestimo = parseFloat(perguntaImprestimo)
                saldo = saldo + valorImprestimo

                let perguntaParcela = prompt("Quantas vezes deseja parcelar? ")
                let qtdParcela = parseInt(perguntaParcela)

                let valorParcela = valorImprestimo / qtdParcela

                for (let i = 0; i < qtdParcela; i++) {
                    console.log(`Parcela [${i + 1 }] de ${qtdParcela } de R$ ${valorParcela.toFixed(2)} `)
                }
                console.log("SALDO ATUAL: R$ " + saldo.toFixed(2))
                break;

            case 0: sair = false
                break;
        }
    }
}