import { parse } from "querystring";

// import { runInContext } from "vm";

// Total Sales: F = E *C
// Total Profit: G = E * D

// console.log("Running");

let unitCol = document.querySelector("#units");

console.log(unitCol);

unitCol.addEventListener( "input", handleClick);
function handleClick( e ){
    // Total Profit: G = E * D
    // E
    let unitProjected = e.target;
    // G
    let totalProfit = unitProjected.nextElementSibling.nextElementSibling;
    //D
    let profit = unitProjected.previousElementSibling;

    let valUnitProjected = unitProjected.textContent;

    let valTotalProfit = unitProjected.nextElementSibling.nextElementSibling;

    let valProfit = profit.textContent;
    valUnitProjected = parseFloat(valUnitProjected);
    valProfit = parseInt(valProfit);

    console.log( typeof valUnitProjected, typeof valProfit)

    console.log( "totalProfit= ", valUnitProjected * valProfit)
    profit.textContent = valUnitProjected * valProfit;


}


/* unitCol.style.backgroundColor = "red";
 unitCol.style.border = "2px solid black";
 unitCol.textContent = "595959"
*/

// HTMLElement.addEventListener( EVENT:String, CALLBACK:Function );
/*unitCol.addEventListener( "click", handleClick);
function handleClick( e ){
    // console.log("clicked");
    console.log(1, e);
    console.log(1, e.target);
    console.log(1, e.target.textContent);
    e.target.textContent = "WOW!"
}*/


/* function demo(){
    show();
    function show(){
        console.log("show");
    }
}*/

/* demo();

run();

try{
    run();
}catch(e){
    console.log(e, e.message);
}*/

console.log("End of code");
/*navigator.getBattery().then((res)=>console.log(res))
function handler(){
    console.log("Checking match");
}
setInterval(handler, 1000);

//Anonymous function
setInterval(function(){
    alert();
    // run();
    // showBox();
},1000 );
*/