// let input = document.getElementById("input");
// let listContainer = document.querySelector("list-container");

// function Add(){
//     if (input.value== "" ) {
//         alert("Please Enter A Task")
//     } else {
//         let li = document.createElement("li");
//         li.innerHTML =  `${input.value}; <i class="fa-solid fa-trash"> </i>` ;
//         listContainer.appendChild(li);
//         input.value="";
//     }
// }

let input = document.getElementById("input");
let listContainer = document.getElementById("list-container");

function Add() {
    if (input.value === "") {
        alert("Please Enter A Task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
        listContainer.appendChild(li) ;
        input.value = "";
        listContainer.querySelector("i").addEventListener("click" , remove);
        function remove() {
            listContainer.remove()
        }
    }
}
