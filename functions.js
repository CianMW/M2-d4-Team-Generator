let waitingRoom = [];
let button = document.getElementById('add-name') 
button.onclick = function () {
    let nameInput = document.getElementById("name-input")
    let list = document.getElementById('waiting-room'); 
    waitingRoom.push(nameInput.value)

    let item = document.createElement('li');
    let itemText = document.createTextNode(nameInput.value); // create text node
    
    item.appendChild(itemText); // append text node to li node
    list.appendChild(item); // append li node to list
    nameInput.value = "";
    };

    
let addGroupButton = document.getElementById('add-groups') 
addGroupButton.onclick = function () {
    let numberInput = document.getElementById("inputGroupNumber")

    for (let i = 0; i < numberInput.value; i++) {
        let teamNumber = i+1
        let newULitem = document.createElement("ul")
      //  let newTitleItem = document.createElement("h3")
        newULitem.innerHTML = `Team ${teamNumber}`
      //  newTitleItem.innerText = `Team ${teamNumber}`
        newULitem.classList.add("col-2")
        newULitem.classList.add("team")
      //  newDivItem.appendChild(newTitleItem)
        //newDivItem.appendChild(newULitem)
        document.getElementById("teamLists").appendChild(newULitem)
        
    }
    numberInput.value = "";
    };

    let randomNumber = (num) =>{
        return Math.floor(Math.random()+num)
    }


let assignButton = document.getElementById("assign")

assignButton.onclick = function() {
    let waitingListLocation = document.getElementById('waiting-room')
    const person = waitingListLength[0]
    let waitingListLength = waitingListLocation.length
    let randonum = randomNumber(waitingListLength)
    

    let newItem = document.createElement("li")
    newItem.innerText = waitingListLocation[randonum]
}