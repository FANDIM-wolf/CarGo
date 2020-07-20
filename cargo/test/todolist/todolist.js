const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');

let i = 0;
//add event

btn.addEventListener('click', (e) =>{
    

    print value
	result.innerHTML += `<li>${input.value}</li>`
	
	input.value =  ''
	i++
	total.textContent = i
	 
})

function createDeleteElements(value) {
 
  const li = document.createElement(`li`)
  li.className = 'li'
  li.textContent = value

  const btn = document.createElement('button') // create Button
  btn.className = 'btn'; // it has class
  btn.textContent = 'add'
  btn.appendChild(btn)

  // remove todo 
  btn.addEventListener('click', (e) => {
      i--
      result.removeChild(li)
      total.textContent = i
  })

  // toggle class active
  li.addEventListener('click',(e)=>{

  	li.className.toggle('li-active');
   

  })

  total.textContent = i
  result.appendChild(li)

}