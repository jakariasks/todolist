const items = document.querySelector("#items");
const toDoList = document.querySelector(".to-do-list");
const addButton = document.querySelector("#btn");
const removeAllList = document.querySelector(".remove-all")


//using enter key  to add list
items.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter"){
            addToDo(this.value)
            this.value = ""
        };
    }
)

//using add button to add list
addButton.addEventListener(
    "click",
    function(){
        addToDo(items.value)
        items.value = ""
    }
)

const addToDo = (items) =>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${items} 
    <div class="icon">
        <i class="fas fa-check-circle "></i>
        <i class="fas fa-times-circle remove"></i>
     </div>`;


     listItem.addEventListener(
         "click",
        function(items){
             this.classList.toggle("done")
             
             }
        )

    listItem.querySelector(".remove").addEventListener(
        "click",
        function(){
            listItem.remove(listItem)

        }
    )

    toDoList.appendChild(listItem);
}

removeAllList.addEventListener(
    "click",
    function(){
        toDoList.remove(toDoList)

    }
)



