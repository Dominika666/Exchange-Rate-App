const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');


const calculate = () => {
    fetch(`https://exchange-rates.abstractapi.com/v1/live/?api_key=16b45acced2d4c60b5f3d51766e2f1c5&base=${currencyOne.value}&target=${currencyTwo.value}`)
    .then(res => res.json())
    .then(data => {
            const currency1 = currencyOne.value;
            const currency2 = currencyTwo.value;
   
            const rate = data.exchange_rates [currency2];
            rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`;
            amountTwo.value = (amountOne.value * rate).toFixed(2)

         })
   
  
}

    const swap = () => {
        const oldValue = currencyOne.value;
        currencyOne.value = currencyTwo.value;
        currencyTwo.value = oldValue;

        calculate()
    }


 currencyOne.addEventListener('change', calculate);
 currencyTwo.addEventListener('change', calculate);
 amountOne.addEventListener('input', calculate);
 swapBtn.addEventListener('click', swap)

 calculate()
