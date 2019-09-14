import { parse } from "querystring";

// import { runInContext } from "vm";

// Total Sales: F = E *C
// Total Profit: G = E * D

// console.log("Running");

let unitCol = document.querySelector("#units");

console.log(unitCol);

// HTMLElement.addEventListener( EVENT:String, CALLBACK:Function );
unitCol.addEventListener( "input", handleClick);
function handleClick(e){
    // Total Profit: G = E * D
    // E
    let unitsProjected = e.target;
    // G
    let G = unitsProjected.nextElementSibling.nextElementSibling;
    //D
    let D = unitsProjected.previousElementSibling;

    let valE = unitsProjected.textContent;

    let valD = D.textContent;

    valE = parseFloat(valE);
    valD = parseInt(valD);

    console.log( typeof valE, typeof valD)

    console.log( "G= ", valE * valD)
    G.textContent = valE * valD;


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
// console.log("End of code");
