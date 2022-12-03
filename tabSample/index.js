const city = document.querySelector("#city")
const description = document.querySelector("#description")
city.addEventListener("click", (e)=> {
  // console.log(e.target)
  if(e.target.innerText == "London"){
   
description.innerHTML = ` <h2>London</h2>
<p>Lorem ipsum dolor sit.</p>`
  }
  else if(e.target.innerText == "Paris"){
  description.innerHTML = ` <h2>Paris</h2>
<p>Lorem ipsum dolor sit.</p>`
  }
  else if(e.target.innerText == "Tokyo"){
  description.innerHTML = ` <h2>Tokyo</h2>
<p>Lorem ipsum dolor sit.</p>`
  }
  else if(e.target.innerText == "NewYork"){
  description.innerHTML = ` <h2>New York</h2>
<p>Lorem ipsum dolor sit.</p>`
  }
})