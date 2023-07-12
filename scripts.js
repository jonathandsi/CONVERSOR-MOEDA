const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.0
    const yuanToday = 0.67
    const bitToday = 0.0000067

    

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-US", {
            style:"currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "yuan"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
            style:"currency",
            currency:"CNY"
        }).format(inputCurrencyValue / yuanToday)
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrencyValue * bitToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    

}    

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/estados-unidos.png"
    }

    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    if(currencySelect.value == "yuan") {
        currencyName.innerHTML = "Yuan chinês"
        currencyImg.src = "./assets/yuan2.png"
        
    }

    if(currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click" , convertValues)