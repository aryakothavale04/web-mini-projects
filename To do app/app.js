let input = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");

function addTask() {
    let item = document.createElement("li");
    item.innerText = input.value;
    ol.appendChild(item);
    input.value = "";
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    item.appendChild(delBtn);
    delBtn.classList.add("delete");
}

btn.addEventListener("click", addTask)

input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        addTask();
    }
})

ol.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement;
        par.remove();
    }
})




// let deleteBtns = document.querySelectorAll(".delete");

// for (let deleteBtn of deleteBtns) {
//     deleteBtn.addEventListener("click", function () {
//         let par=this.parentElement;
//         par.remove();
//     })
// }