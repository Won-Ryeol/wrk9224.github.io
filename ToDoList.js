inputText.focus();

inputText.onkeyup = function(event){
    if(event.which === 13){
        var itemText =  document.getElementById('inputText').value;

        if(!itemText || itemText.trim() ==="") return false;
        addNewItem(document.getElementById('todolist'), itemText);
        inputText.focus();
        inputText.value = "";
    }
};

function addNewItem(list, itemText){
    var date = new Date();
    var id = ""+ date.getHours()+ date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    var span = document.createElement('span');
    span.id = "span_"+ id;
    span.innerText = itemText;

    var listItem = document.createElement('li');
    listItem.id = 'li_' + id;
    listItem.ondblclick = moveItem;
    listItem.addEventListener('mouseover', mouseover);
    listItem.addEventListener('mouseout', mouseout);

    var pencilIcon = document.createElement('i');
    pencilIcon.id = 'pencil_' + id;
    pencilIcon.className = 'fa fa-pencil';
    pencilIcon.onclick = renameItem;

    var deleteIcon = document.createElement('i');
    deleteIcon.id = 'delete_' + id;
    deleteIcon.className = 'fa fa-minus';
    deleteIcon.onclick = removeItem;

    listItem.appendChild(span);
    listItem.appendChild(deleteIcon);
    listItem.appendChild(pencilIcon);
    list.appendChild(listItem);
};

function mouseover(){
    var pencilIcon = document.getElementById(this.id.replace('li_','pencil_'));
    var deleteIcon = document.getElementById(this.id.replace('li_','delete_'));
    pencilIcon.style.visibility = 'visible';
    deleteIcon.style.visibility = 'visible';
};
function mouseout(){
    var pencilIcon = document.getElementById(this.id.replace('li_','pencil_'));
    var deleteIcon = document.getElementById(this.id.replace('li_','delete_'));
    pencilIcon.style.visibility = 'hidden';
    deleteIcon.style.visibility = 'hidden';
};

function renameItem(){
    var newText = prompt('Rename the text');
    while(newText.trim() === "") newText = prompt('Rename the text');
    document.getElementById(this.id.replace('pencil_','span_')).innerText = newText;
};

function removeItem(){
    document.getElementById(this.id.replace('delete_', 'li_')).style.display = "none";
};

var donelist = document.getElementById('donelist');
function moveItem(){
    if(this.parentElement == todolist)
        donelist.appendChild(this);
    else
        todolist.appendChild(this);
};