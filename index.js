let countEl = document.getElementById("count-el")
let getEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}
function decrement(){
    count-=1;
    countEl.textContent = count;
}

function save() {
   let countStr = count+" - "
    // getEl.innerText +=countStr; // by this inner text we cannot print our spacces " - " this one 
    getEl.textContent +=countStr;
  
    count = 0;
    countEl.textContent = count
}


