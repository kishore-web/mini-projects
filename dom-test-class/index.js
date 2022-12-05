let inputValue = document.querySelector("#text")
let addBtn = document.querySelector("#add")
let output = document.querySelector("#output")
let deleteBtn = document.querySelector(".delete")
let warning = document.querySelector("#warning")
// console.log(addBtn)
let allInputValues = []

function addTodo(e){
  e.preventDefault();
  let todoValue = inputValue.value
  
   if(allInputValues.includes(todoValue)){
    warning.innerText = "do not enter duplicate value"
    setTimeout(()=> {
      warning.innerText = ""
    },1000) 
  } else if(todoValue == ""){
    warning.innerText = "Enter TODO List"
    setTimeout(()=> {
      warning.innerText = ""
    },1000) 
    }
     else {
      output.innerHTML += `<tr><td>${todoValue}</td><td class="delete">Delete</td></tr>`
      allInputValues.push(todoValue)
      console.log("Todo Values in Array:", allInputValues)
    }
}

function deletingTodo(e) {
  if(e.target.classList.contains("delete")) {
     e.target.parentNode.remove();

    let removeEle = e.target.parentNode.firstElementChild.innerText
    console.log(removeEle)
    let index = allInputValues.indexOf(removeEle)
      if(index !== -1){
        allInputValues.splice(index, 1)
      }
       console.log("Updated Array after deleting:",allInputValues)
    }
}

addBtn.addEventListener("click", addTodo)
output.addEventListener("click", deletingTodo)