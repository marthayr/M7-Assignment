// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form       = document.getElementById('addForm');
let empTable   = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const $ =(id) => document.getElementById(id);

    let id          = $('id').value;
    let name        = $('name').value;
    let extension   = $('extension').value;
    let email       = $('email').value;
    let department  = $('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId          = row.insertCell();
    let cellName        = row.insertCell();
    let cellExt         = row.insertCell();
    let cellEmail       = row.insertCell();
    let cellDept        = row.insertCell();
  


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textId          = document.createTextNode(id);
    let textName        = document.createTextNode(name);
    let textExt     = document.createTextNode(extension);
    let textEmail       = document.createTextNode(email);
    let textDept        = document.createTextNode(department);

    cellId.appendChild(textId);
    cellName.appendChild(textName);
    cellExt.appendChild(textExt); 
    cellEmail.appendChild(textEmail);
    cellDept.appendChild(textDept);

    // CREATE THE DELETE BUTTON
    let cellDelete = row.insertCell();

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn bg-danger text-white';

    let textDelete = document.createTextNode('X');
    

    deleteBtn.appendChild(textDelete);
 
    cellDelete.appendChild(deleteBtn);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    form.id.focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    document.getElementById("empCount").innerHTML = `(${count})`;

})

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if(confirm('Do you want to delete employee?')) {
        if(e.target.classList.contains('btn')){
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
            count--;
            document.getElementById("empCount").innerHTML = `(${count})`;
        }   
    }
    })