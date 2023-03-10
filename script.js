const inputVal = document.getElementById("input");
const result = document.getElementById("wcVal");
let inputs = "";

function vCount() {
  // Array.from(wArray).forEach((w)=>{
  //     return wArray.values
  // })
  inputVal.addEventListener("input", (e) => {
    e.preventDefault();
    inputs = inputVal.value;
    let nResult = inputs.split(" ");
    result.innerText = nResult.length;
  });
}
vCount();

/*
function vCount(e) {
  e.preventDefault();
  inputs = inputVal.value;
  let nResult = inputs.split(" ");
  return (result.innerText = nResult.length);
}
*/

/*
let a = " Hi this is ani,     an you are watching my code"
let b = a.split(" ");
*/
