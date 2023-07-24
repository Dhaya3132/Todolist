let inputfieldbox = document.getElementById('input-box');
let addtobutton = document.getElementById('addtodo');
let textarea = document.getElementById('todocontainer');




addtobutton.addEventListener('click',function()
{
    var paragraph = document.createElement('p');
    textarea.appendChild(paragraph);
    paragraph.innerHTML=inputfieldbox.value;
    inputfieldbox.value="";
    

    paragraph.addEventListener('click',function()
    {
        paragraph.style.textDecoration="line-through";
    })


    paragraph.addEventListener('dblclick',function(){
        textarea.removeChild(paragraph);
    })

})

