import './styles.css';


const date = document.querySelector('.date');
const price = document.querySelector('.price')
const select = document.querySelector('select');

// DolarToday API

fetch('https://s3.amazonaws.com/dolartoday/data.json', {
    method: 'GET'
})
.then((response) => response.json())
.then((data) => {
    // console.log(data);
    
    date.innerText = data._timestamp.fecha;
    
    let priceOriginal = data.USD.promedio.toString();
    price.innerText = `${priceOriginal.substring(0, 1)}.${priceOriginal.substring(1,4)}.${priceOriginal.substring(4,7)},${priceOriginal.substring(8,10)} Bs.`

    select.addEventListener('change', () => {
        
        select.selectedOptions[0].value === 'USD' ? priceOriginal = data.USD.promedio.toString()
                                                : priceOriginal = data.EUR.promedio.toString();

        
        price.innerText = `${priceOriginal.substring(0, 1)}.${priceOriginal.substring(1,4)}.${priceOriginal.substring(4,7)},${priceOriginal.substring(8,10)} Bs.`
        
    })
    
    
})