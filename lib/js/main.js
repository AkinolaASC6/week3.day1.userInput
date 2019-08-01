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



const storyResult= document.querySelector
("#story_result");
const submitButton = document.querySelector
("#submit_button");



const iputList = document.querySelectorAll
("input");

const createText= evnt => {
evnt.preventDefault();

const valueList =Array.from(inputList).map
(item => item.value).slice(1);
console.log(valueList);

if(valueList.some(val=>!val)){
    alert("Fill all fields!");
    return;

}
}

const storyText =`Last night I ate a 
${valueList[0]}, and today I just had to
${valueList[1]}. What a ${valueList[2]} day!`

storyResult.innerText =storyText;





