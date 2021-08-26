let waitingRoom = [];
let button = document.getElementById('add-name') 
button.onclick = function () {
    let nameInput = document.getElementById("name-input")
    let list = document.getElementById('waiting-room'); 
    waitingRoom.push(nameInput)

    let item = document.createElement('li');
    let itemText = document.createTextNode(nameInput.value); // create text node
    
    item.appendChild(itemText); // append text node to li node
    list.appendChild(item); // append li node to list
    nameInput.value = "";
    };
