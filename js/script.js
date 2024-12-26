var addbtn = document.getElementById('add-btn');
var input = document.getElementById('input');
var liscont =  document.getElementById('list-container');


addbtn.addEventListener('click', function(){
    if (input.value != "") {
        var li = document.createElement('li');
        li.innerHTML = `
                    <span>${input.value}</span>
                    <button class="delete-btn" id="delete" onclick="this.parentElement.remove();">X</button>
                `;
        liscont.appendChild(li);
        input.value = "";
    }
})

// function deleteTask() {
    

// }

