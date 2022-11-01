/**
 * Aria Siriouthay
 * HW3
 * javascript.js
 * help: help websites such as w3 schools, geeksforgeeks,
    stackoverflow, ect. for help on javascript (like how
    to change css, how to change html, how to create table
    with header row and column, ect.)
 */

//creating an event listen to save the input values from form
//that will then call the makeTable() function to create the 
//table from the given values.
function submitClick(){
    // getting form input values and their ids
    var minY = parseInt(document.getElementById('inputMinY').value);
    var maxY = parseInt(document.getElementById('inputMaxY').value);
    var minX = parseInt(document.getElementById('inputMinX').value);
    var maxX = parseInt(document.getElementById('inputMaxX').value);
    var minY_id= document.getElementById('inputMinY');
    var maxY_id= document.getElementById('inputMaxY');
    var minX_id= document.getElementById('inputMinX');
    var maxX_id= document.getElementById('inputMaxX');

    //calling the validation method to ensure inputs are valid
    const v1 = validateInput(minY, minY_id);
    const v2 = validateInput(maxY, maxY_id);
    const v3 = validateInput(minX, minX_id);
    const v4 = validateInput(maxX, maxX_id);

    //checking that all inputs are valid (true)
    if(v1 && v2 && v3 && v4){
        //making sure min values are smaller than max
        if(minY <= maxY && minX <= maxX){
            //editing css error message displays and red box shadowing to 'none'
            //if input is valid
            document.getElementById("errMsg").style.display="none";
            document.getElementById("errMsg2").style.display="none";
            minY_id.style.boxShadow = "none";
            maxY_id.style.boxShadow = "none";
            minX_id.style.boxShadow = "none";
            maxX_id.style.boxShadow = "none";
            //calling method to create table with valid input    
            makeTable(minY, maxY, minX, maxX);
        }
        else{
            //if an inputted min value is larger than the max, display
            //error message and box shadowing to offending inputs
            document.getElementById("errMsg").style.display="none";
            document.getElementById("errMsg2").style.display="block";
            if(minY > maxY){
                minY_id.style.boxShadow = "0 0 3px 1px red";
                maxY_id.style.boxShadow = "0 0 3px 1px red";
            }
            if(minX > maxX){
                minX_id.style.boxShadow = "0 0 3px 1px red";
                maxX_id.style.boxShadow = "0 0 3px 1px red";
            }
        }
    }
}
//function to create table with inputs
function makeTable(minY, maxY, minX, maxX){
    //creating table by getting html table id and 
    //using temp table var to append html to edit
    //doc
    var mtable = document.getElementById('table');
    var table = '';
    table += '<tr>';
    table += '<td></td>';
    //iterating through input y values to make column header
    for (var j = minY; j <= maxY; j++){
        table += '<th scope = "col">' + j + '</th>';
    }
    table += '</tr>';
    //iterating through input x values to make row header
    //and to also create table data via nested loop,
    //multiplying each index
    for (var i = minX; i <= maxX; i++){
        table += '<tr>';
        table += '<th scope = "row">' + i + '</th>';
        for(var j = minY; j <= maxY; j++){
            table += '<td>' + (i*j) + '</td>'; 
        }
        table += '</tr>';
    }
    //updating html of main table
    mtable.innerHTML=table;
}
//function to validate user input
function validateInput(d, id){
        //checking if input is not given and/or not in bounds of [-50, 50]
        if (isNaN(d) || d < -50 || d > 50) {
            //if not valid display error message and apply box shadowing of
            //invalid input
            document.getElementById("errMsg").style.display="block";
            id.style.boxShadow = "0 0 3px 1px red";
            return false;
        }
        //remove box shadowing if valid
        id.style.boxShadow = "none";
        return true;
}