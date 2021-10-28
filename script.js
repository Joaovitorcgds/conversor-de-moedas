let url = " https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,JPY-BRL"

function converter(){
  let v = document.querySelector("#valor").value
  let valorNumber = Number(v)
  let option = document.querySelector("#converterPara")
  let resultado = document.querySelector("#resultado")

  fetch(url)
  .then(res =>{
  return res.json()
  })
  .then(data =>{
    let dolar = data.USDBRL.bid
    let bitcoin = data.BTCBRL.bid
    let euro = data.EURBRL.bid
    let iene = data.JPYBRL.bid
    
    if(v == ""){
      resultado.innerHTML = `<h2>Insira primeiro um valor</h2>`
    }else if(option.value == "dolar"){
      resultado.innerHTML = `<h2>O valor da conversão é: $${(valorNumber / dolar).toFixed(2)} dólares</h2>`
    }else if(option.value == "euro"){
      resultado.innerHTML = `<h2>O valor da conversão é: €${(valorNumber / euro).toFixed(2)} euros</h2>`
    }else if(option.value == "bitcoin"){
      resultado.innerHTML = `<h2>O valor da conversão é: ₿${(valorNumber / bitcoin).toFixed(2)} bitcoin</h2>`
    }else if(option.value == "iene"){
      resultado.innerHTML = `<h2>O valor da conversão é: ¥${(valorNumber / iene).toFixed(2)} ienes</h2>`
    }
  })
}