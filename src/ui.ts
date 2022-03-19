import {Product , array }from './data.js'

const container: HTMLElement = document.querySelector('#container')!

export function render (product:Product){

  const card: HTMLElement =  document.createElement("div")
  card.className = 'card'
  card.style.width='18rem'
  container.appendChild(card)
  
  //Img qo`ydik----------------------------------------------
  
  const cardImg: HTMLImageElement = document.createElement('img')
  cardImg.className = "card-img-top ratio ratio-1x1"
  cardImg.style.height='200px'
  cardImg.src = product.img
  card.appendChild(cardImg)
  
  //----------------------------------------------------
  
  const cardBody: HTMLElement = document.createElement('div')
  cardBody.className = 'card-body'
  card.appendChild(cardBody)
  
  //--------------------------------------------------------
  
  const cardTitle: HTMLElement = document.createElement('h5')
  cardTitle.className = "card-title"
  cardTitle.innerHTML = product.name
  cardBody.appendChild(cardTitle)
  
  //----------------------------------------------------------
  
  const textSuccess: HTMLElement = document.createElement('h4')
  textSuccess.className = 'text-success'
  textSuccess.innerHTML = '$' + product.price
  cardBody.appendChild(textSuccess)
  
  //-------------------------------------------------------
  
  const cardText: HTMLElement = document.createElement('p')
  cardText.className = "card-text"
  cardBody.appendChild(cardText)
  cardText.innerHTML = product.content
  
  
  
  const btn: HTMLButtonElement = document.createElement('button')
  btn.className = "btn btn-primary w-50"
  btn.innerHTML = 'Buy'
  cardBody.appendChild(btn)
}



const submit: HTMLButtonElement = document.querySelector('#submit')!
const search: HTMLInputElement = document.querySelector("#search")!

create(array)

submit.onclick = () => {
  let value = search.value
  let n = array.filter(item => item.name === value)
  container.innerHTML = ''
  create(n)
  if(value === ''){
    for(let i = 0; i < array.length; i++){
      render(array[i])
    }
  }
}




function create (n:Product[]){
  for(let i = 0; i < n.length; i++){
    render(n[i])
  }
}