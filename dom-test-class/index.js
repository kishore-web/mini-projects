let inputValue = document.querySelector("#text")
let addBtn = document.querySelector("#add")
let output = document.querySelector("#output")
let deleteBtn = document.querySelector(".delete")
let warning = document.querySelector("#warning")
// console.log(addBtn)
let allInputValues = []

function showingOutput(todoValue){
  output.innerHTML += `<tr>
                        <td>${todoValue}</td>
                        <td class="delete">Delete</td>
                      </tr>`
}

function addTodo(e){
  
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
      showingOutput(todoValue)

      allInputValues.push(todoValue)

      localStorage.setItem("id", JSON.stringify(allInputValues))
      // console.log("Todo Values in Array:", allInputValues)
    }
}

function deletingTodo(e) {
  if(e.target.classList.contains("delete")) {
     e.target.parentNode.remove();

    let removeEle = e.target.parentNode.firstElementChild.innerText
    // console.log(removeEle)
    let index = allInputValues.indexOf(removeEle)

        allInputValues.splice(index, 1);

        localStorage.setItem("id", JSON.stringify(allInputValues))
    //    console.log("Updated Array after deleting:",allInputValues)
     }
}
function showDataLocalStorage(){
  let localData = localStorage.getItem("id")
  if(localData === null){
    return;
  }
  let getItem = JSON.parse(localData)
  console.log(getItem)
  getItem.forEach((todoValue) => {
    showingOutput(todoValue)
  })

}

window.addEventListener("load", showDataLocalStorage)
addBtn.addEventListener("click", addTodo)
output.addEventListener("click", deletingTodo)