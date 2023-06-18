const url = 'https://icanhazdadjoke.com'

const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', () => {
  fetchUrl()
})

const fetchUrl= async ()=>{
    result.textContent='Loading....'
try{
   const response = await fetch(url,{
    headers:{
        accept:'application/json',
        'User-agent':'learning app',
    }
   });
   if(!response.ok){
    throw new Error('error')
   }


   const data = await response.json()
   result.textContent=data.joke;
  
}catch(error){
    console.log(error.message)
    result.textContent='there was an error'
}


 
}


fetchUrl()


