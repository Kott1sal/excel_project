import { runInContext } from "vm";

// Total Sales: F = E *C
// Total Profit: G = E * D

// console.log("Running");

let unitCol = document.querySelector("#units");

console.log(unitCol);

unitCol.style.backgroundColor = "red";
unitCol.style.border = "2px solid black";
unitCol.textContent = "595959"

run();

try{
    run();
}catch(e){
    console.log(e, e.message);
}

console.log("End of code");
