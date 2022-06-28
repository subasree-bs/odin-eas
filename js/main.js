// alert("Hi");
const canvas = document.querySelector(".canvas");
const btnerase = document.getElementById("btnerase");
const btnclear = document.getElementById("btnclear");
const btndraw = document.getElementById("btndraw");
const btnsize = document.getElementById("btnsize");
const printsize = document.getElementById("printsize");

btnsize.addEventListener ("click", () => {
    // window.onload();
    let e = prompt("Enter value");
    console.log(e);
    makeRows(e);
});

function makeRows(rows) {
    if(rows<65){
    canvas.innerHTML="";
  canvas.style.setProperty('--grid-rows', rows);
  canvas.style.setProperty('--grid-cols', rows);
  for (c = 0; c < (rows * rows); c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", () => { cell.classList.add("active_div")} );
    btnclear.addEventListener("click", function()  { cell.classList.remove("active_div")} );
    printsize.textContent = rows+" * "+rows;
    btnerase.addEventListener ("click", function() {    
        cell.addEventListener("mouseover", function() { cell.classList.remove("active_div")} );
      });
    btndraw.addEventListener("click", function(){
      cell.addEventListener("mouseover", function() { cell.classList.add("active_div")} );

    });
    canvas.appendChild(cell).className = "grid-item";

  };
}
else{
    let d = prompt("Enter less dhan 65");
    // canvas.innerHTML="";
    makeRows(d);
}
};
makeRows(16, 16);