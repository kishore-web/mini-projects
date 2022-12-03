const city = document.querySelector("#city")
const description = document.querySelector("#description")
city.addEventListener("click", (e)=> {
  // console.log(e.target)
  if(e.target.innerText == "London"){
   
description.innerHTML = ` <h2>London</h2>
<p>London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.</p>`
  }
  else if(e.target.innerText == "Paris"){
  description.innerHTML = ` <h2>Paris</h2>
<p>
Image result for paris
Paris is known for its gorgeous, imposing monuments. These iconic structures, often an exemplar of a particular era in architecture, are one of the city's instantly recognizable elements. The preeminent of Paris's landmarks is the Eiffel Tower.</p>`
  }
  else if(e.target.innerText == "Tokyo"){
  description.innerHTML = ` <h2>Tokyo</h2>
<p>Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods.</p>`
  }
  else if(e.target.innerText == "NewYork"){
  description.innerHTML = ` <h2>New York</h2>
<p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.</p>`
  }
})