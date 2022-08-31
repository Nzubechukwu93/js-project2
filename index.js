let addToDoButton = document.getElementById("addToDo");
let ToDocontainer = document.getElementById("ToDocontainer");
let iputfield = document.getElementById("inputfield");


addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputfield.value;
    ToDocontainer.appendChild(paragraph);
    inputfield.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        ToDocontainer.removeChild(paragraph);
    })
})