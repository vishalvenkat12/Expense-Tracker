//getting form
var form=document.getElementById('addForm');
var newExpense=document.getElementById('expense');
//when submit is clicked to add expense
form.addEventListener('submit', addExpense);
//To enable to delete functionality when delete is clicked to delete expense
newExpense.addEventListener('click', removeExpense);
//create addExpense function
function addExpense(e){
    e.preventDefault();
    //getting values from each input
    var newAmount=document.getElementById('amount').value;
    var newDescription=document.getElementById('description').value;
    var newCategory=document.getElementById('category').value;
    //creating a new li element to add it to the ul
    var li=document.createElement('li');
    //adding input values to the li element
    li.appendChild(document.createTextNode(newDescription));
    li.appendChild(document.createTextNode(newCategory));
    li.appendChild(document.createTextNode(newAmount));
    //create delete button
    var delBtn=document.createElement('button');
    //adding class to delBtn
    delBtn.className='delete';
    //adding textnode to delete button
    delBtn.appendChild(document.createTextNode('Delete'));
    //appending delBtn to li
    li.appendChild(delBtn);
    //creating edit button
    var editBtn=document.createElement('button');
    //adding class to editBtn
    editBtn.className='edit';
    //adding text node to edit button
    editBtn.appendChild(document.createTextNode('Edit'));
    //appending edit button to li
    li.appendChild(editBtn);
    //adding li element to the ul
    newExpense.appendChild(li);
    //saving li to local storage
    const output=li.value;
    localStorage.setItem(expense, output);
    
}
  // create removeExpense function  
    function removeExpense(e){
        var li=e.target.parentElement;//when 
        if(e.target.classList.contains('delete')){//if the new list button delete is clicked
 //Here when delete is clicked, we are targetting the parent element which is li
 //removing the li from the newExpense list
newExpense.removeChild(li);
localStorage.removeItem(li.value);

        }
        if(e.target.classList.contains('edit')){//if the new list button edit is clicked
            newExpense.removeChild(li);
            document.getElementById('amount').value=obj.amount;
            document.getElementById('description').value=obj.description;
            document.getElementById('category').value=obj.category
            
                    }
        }
