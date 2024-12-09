const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        let span = document.createElement("span");
        span.innerHTML= '\u00d7'
        li.appendChild(span)

    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

inputBox.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        e.preventDefault(); //cancels the default action, if needed
        document.getElementById("Add").click();
    }
});

function saveData(){
    localStorage.setItem("Data", listContainer.innerHTML); //saves data in browser localstorage upto 5mb, not shared in a get request
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("Data");
}

showTask();