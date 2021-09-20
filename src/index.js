import './styles.css';


const date = document.querySelector('.date');
const day = document.querySelector('.day');
const price = document.querySelector('.price')
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
    
})
