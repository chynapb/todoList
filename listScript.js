const addButton = document.getElementById("btn");
const userInput = document.getElementById("text");
const ul = document.getElementById("listItems");
const resetBtn = document.getElementById("reset");

//Add user input to the list of to-do items
addButton.addEventListener("click", function() {
    let li = document.createElement("li");
    let text = userInput.value;

    if (text == "" || text == " ") {
        alert("Please add an item to the list.");
    
    } else {
        //Append user input to the list
        li.appendChild(document.createTextNode(text));
        ul.insertBefore(li, ul.firstChild);

        //Clear text box after form is submitted
        userInput.value = '';

        //Add a "delete" button to each list item
        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", "deleteBtn");
        deleteButton.appendChild(document.createTextNode("Delete"));
        li.appendChild(deleteButton).setAttribute("class", "material-symbols-outlined");

        //Remove a list item when the delete button is clicked
        deleteButton.addEventListener("click", function() {
            this.parentNode.remove();
        })

        //Add a "completed" button to each list items
        let doneButton = document.createElement("button");
        doneButton.setAttribute("id", "doneBtn");
        doneButton.appendChild(document.createTextNode("Done"));
        li.appendChild(doneButton).setAttribute("class", "material-symbols-outlined")

        //Strike through each item when they are marked as completed
        doneButton.addEventListener("click", function() {
            li.classList.toggle("strike");
        })

        //Add a "clear all" button that removes all list items
        resetBtn.addEventListener("click", function() {
            document.getElementById("listItems").innerHTML = '';
        })
    }
})

//Accept Enter key to submit form
userInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      addButton.click();
}});