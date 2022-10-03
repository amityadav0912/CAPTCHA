const checkbox = document.getElementById("checkbox");
const button = document.querySelector("button[type=submit]");

// disable checkbox
checkbox.disabled=true;

// disable button
button.disabled=true;

const elements = document.querySelectorAll(".element");


const selectColor = document.getElementById("SelectColor");


// Assign color 

const unique= Math.floor(Math.random()*9);
console.log(unique);

let start =0;

elements.forEach(function(element)
{  
    const color = getRandomColor();
    if(start===unique)
    {
        selectColor.innerHTML=color;
    }
    start++;
    element.style.backgroundColor=color;
    element.innerHTML=color;
});


// generate color
function getRandomColor()
{
    const letter = "0123456789ABCDEF";
    let color ="#";
    for(let i = 0 ; i<6 ; i++)
    {
        color += letter[Math.floor(Math.random() * 16 )];
    }
    return color;
}

// check if the color is correct

elements.forEach(function(element)
{
    element.addEventListener('click',function()
    {
        if(element.innerHTML === selectColor.innerHTML)
        {   
            checkbox.disabled=false;
            button.disabled=false;
            button.classList.remove("btn-light");
            button.classList.add("btn-success");
        }else{
           alert("You are not a human , Try Again")
           location.reload(true);
        }
    })
})