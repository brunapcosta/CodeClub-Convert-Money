const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
// const dolar = 5.2
// const euro = 5.6
// const bitcoin = 90400.
// const iene = 25.2
// const libra = 6.36
// const peso = 0.025
// const bolivarVez = 0.2
// const peru = 0.7

const convertValues = async () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('text-real-value')
    const convertValueText = document.getElementById('text-converted-value')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,JPY-BRL,ARS-BRL,GBP-BRL,VEF-BRL,PEN-BRL").then(Response => Response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    const iene = data.JPYBRL.high
    const peso = data.ARSBRL.high
    const libra = data.GBPBRL.high
    const bolivarVez = data.VEFBRL.high
    const solPeru = data.PENBRL.high


    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === 'US$ Dólar americano') {
        convertValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }
    if (select.value === '€ Euro') {
        convertValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }
    if (select.value === '฿ Bitcoin') {
        convertValueText.innerHTML = new Intl.NumberFormat('BTC',
            { style: 'currency', currency: 'BTC' }
        ).format(inputReais / bitcoin)
    }
    if (select.value === 'JP¥ Iene') {
        convertValueText.innerHTML = new Intl.NumberFormat('ja-JP',
            { style: 'currency', currency: 'JPY' }
        ).format(inputReais / iene)
    }
    if (select.value === '$ Peso argentino') {
        convertValueText.innerHTML = new Intl.NumberFormat('es',
            { style: 'currency', currency: 'ARS' }
        ).format(inputReais / peso)
    }
    
    if (select.value === '£ Libra') {
        convertValueText.innerHTML = new Intl.NumberFormat('en',
            { style: 'currency', currency: 'GBP' }
        ).format(inputReais / libra)
}

if (select.value === 'Bs Bolívar venezuelano') {
        convertValueText.innerHTML = new Intl.NumberFormat('es',
            { style: 'currency', currency: 'VEF' }
        ).format(inputReais / bolivarVez)
}
if (select.value === 'S/ Sol peruano') {
        convertValueText.innerHTML = new Intl.NumberFormat('es',
            { style: 'currency', currency: 'PEN' }
        ).format(inputReais / solPeru)
}

}
changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('country-conversion')
    
    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./images/estados-unidos.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "€ Euro"
        currencyImg.src = "./images/euro.png"
    }

    if (select.value === '฿ Bitcoin') {
        currencyName.innerHTML = "฿ Bitcoin"
        currencyImg.src = "./images/bitcoin.png"
    }

    if (select.value === 'JP¥ Iene') {
        currencyName.innerHTML = "JP¥ Iene"
        currencyImg.src = "./images/japao.png"
    }

    if (select.value === '$ Peso argentino') {
        currencyName.innerHTML = "Peso Argentino"
        currencyImg.src = "./images/argentina.png"
    }

    if (select.value === '£ Libra') {
        currencyName.innerHTML = "Libra Estrelinha"
        currencyImg.src = "./images/inglaterra.png"
    }

    if (select.value === 'Bs Bolívar venezuelano') {
        currencyName.innerHTML = "Bolívar venezuelano"
        currencyImg.src = "./images/venezuela.png"
    }

     if (select.value === 'S/ Sol peruano') {
        currencyName.innerHTML = "Sol peruano"
        currencyImg.src = "./images/peru.png"
    }
    convertValues()
}


button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
