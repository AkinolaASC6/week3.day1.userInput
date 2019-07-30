let noun = document.querySelector("#noun");
let verb= document.querySelector("#verb");
let adjective= document.querySelector("#adjective");
// let mainTitle= document.querySelector("#main_title");
const button = document.querySelector("#submit_button");
function displayText(event) {
    event.preventDefault();
    let title= document.querySelector("#title_input");
    document.getElementById("main_title").innerHTML = title.value;
}
button.addEventListener("click", displayText)







// function logKey(e){
//     mainTitle.textContent+= ${e.code};
// }


// “Last night I ate a {`#noun`}, and today I just had to {`#verb`}. What a {`#adjective`} day!”