var selectedRow = null;
$(document).ready(function () {
    $('.date').datepicker({
        format: 'dd-mm-yyyy',
        autoclose: true,
    });
    $('#TimeZone').timezones();
});
function onFormSubmit() {
    console.log("hi")
    debugger;
    if (validate()) {
        var formData = readData();
        console.log("sudharsan")
        if (selectedRow == null)
            insertRecord(formData);
        else
            updateRecord(formData);
        reset(formData);
    }
}
function readData() {
    var formData = {};
    formData["Name"] = document.getElementById("NameTxt").value;
    formData["Email"] = document.getElementById("EmailTxt").value;
    formData["Age"] = document.getElementById("AgeTxt").value;
    formData["Dob"] = document.getElementById("DobTxt").value;
    formData["TimeZone"] = document.getElementById("TimeZone").value;
    formData["PhoneNumber"] = document.getElementById("PhoneNumberTxt").value;
    formData["Password"] = document.getElementById("PasswordTxt").value;
    formData["ConfirmPassword"] = document.getElementById("ConfirmPasswordTxt").value;
    return formData;
}
function insertRecord(data) {
    let table = document.getElementById("TableId").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0); cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1); cell2.innerHTML = data.Email;
    cell3 = newRow.insertCell(2); cell3.innerHTML = data.Age;
    cell4 = newRow.insertCell(3); cell4.innerHTML = data.Dob;
    cell5 = newRow.insertCell(4); cell5.innerHTML = data.TimeZone;
    cell6 = newRow.insertCell(5); cell6.innerHTML = data.PhoneNumber;
    cell7 = newRow.insertCell(6); cell7.innerHTML = data.Password;
    cell8 = newRow.insertCell(7); cell8.innerHTML = data.ConfirmPassword;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<input type= "button" class='btn btn-primary btn-xs' onClick="EditRecord(this)" value=Edit>`;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<input type= "button" class='btn btn-danger btn-xs'  onClick="Delete(this)" value=Delete>`;
}
function reset() {
    document.getElementById("NameTxt").value = "";
    document.getElementById("EmailTxt").value = "";
    document.getElementById("AgeTxt").value = "";
    document.getElementById("DobTxt").value = "";
    document.getElementById("TimeZone").value = "";
    document.getElementById("PhoneNumberTxt").value = "";
    document.getElementById("PasswordTxt").value = "";
    document.getElementById("ConfirmPasswordTxt").value = "";
    selectedRow = null;
}
function EditRecord(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("NameTxt").value = selectedRow.cells[0].innerHTML;
    document.getElementById("EmailTxt").value = selectedRow.cells[1].innerHTML;
    document.getElementById("AgeTxt").value = selectedRow.cells[2].innerHTML;
    document.getElementById("DobTxt").value = selectedRow.cells[3].innerHTML;
    document.getElementById("TimeZone").value = selectedRow.cells[4].innerHTML;
    document.getElementById("PhoneNumberTxt").value = selectedRow.cells[5].innerHTML;
    document.getElementById("PasswordTxt").value = selectedRow.cells[6].innerHTML;
    document.getElementById("ConfirmPasswordTxt").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.Email;
    selectedRow.cells[2].innerHTML = formData.Age;
    selectedRow.cells[3].innerHTML = formData.Dob;
    selectedRow.cells[4].innerHTML = formData.TimeZone;
    selectedRow.cells[5].innerHTML = formData.PhoneNumber;
    selectedRow.cells[6].innerHTML = formData.Password;
    selectedRow.cells[7].innerHTML = formData.ConfirmPassword;
}
function Delete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("TableId").deleteRow(row.rowIndex);
        reset();
    }
}
function validate() {
    let Name = document.getElementById("NameTxt").value;
    let Email = document.getElementById("EmailTxt").value;
    let Age = document.getElementById("AgeTxt").value;
    let Dob = document.getElementById("DobTxt").value;
    let TimeZone = document.getElementById("TimeZone").value;
    let PhoneNumber = document.getElementById("PhoneNumberTxt").value;
    let Password = document.getElementById("PasswordTxt").value;
    let ConfirmPassword = document.getElementById("ConfirmPasswordTxt").value;
    let NameRegex = /[A-Z][a-zA-Z]{1,20}$/
    let EmailRegex = /^([a-z0-9]{1,})@([a-z0-9]{1,}).com/
    let AgeRegex = /(?:\b|-)([1-9]{1,2}[0]?|100)\b/
    let PhoneRegex = /^\S[0-9]{9}/
    let PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})/
    if (!NameRegex.test(Name)) {
        // alert("Please enter your Name start with Uppercase");
        document.getElementById("NameError").innerHTML = "Please enter your Name start with Uppercase";
        document.getElementById('NameTxt').focus();
        return false;
    }
    else {
        document.getElementById("NameError").innerHTML = "";
    }
    if (!EmailRegex.test(Email)) {
        // alert("Please Enter the valid Email-Id");
        document.getElementById("EmailSpan").innerHTML = "Please Enter the valid Email-Id";
        document.getElementById('EmailTxt').focus();
        return false;
    }
    else {
        document.getElementById("EmailSpan").innerHTML = "";
    }
    if (!AgeRegex.test(Age)) {
        // alert("Please Enter the Age in Properway");
        document.getElementById("AgeSpan").innerHTML = "Please Enter the Age in Properway";
        document.getElementById('AgeTxt').focus();
        return false;
    }
    else {
        document.getElementById("AgeSpan").innerHTML = "";
    }
    
    if (Dob == "") {
        // alert("Please select the Date");
        document.getElementById("DateSpan").innerHTML = "Please select the Date";
        document.getElementById('DobTxt').focus();
        return false;
    }
    else {
        document.getElementById("DateSpan").innerHTML = "";  
    } 
    if (!PhoneRegex.test(PhoneNumber)) {
        // alert("Please Enter the Indian Phone Number");
        document.getElementById("PhoneNumberSpan").innerHTML = "Please Enter the Indian Phone Number";
        document.getElementById('PhoneNumberTxt').focus();
        return false;
    }
    else {
        document.getElementById("PhoneNumberSpan").innerHTML = ""; 
    }
    
    if (TimeZone == "") {
        // alert("Please select the TimeZone");     
        document.getElementById("TimeZoneSpan").innerHTML = "Please select the TimeZone";
        document.getElementById('TimeZone').focus();

        return false;
    }
    else{
    }    
    if (!PasswordRegex.test(Password)) {
        // alert("Please Enter strong Password with minimum 4 characters ,1 Special character, 1 Caption and 1 number");
        document.getElementById("PasswordSpan").innerHTML = "Please Enter strong Password with minimum 4 characters ,1 Special character, 1 Caption and 1 number";
        document.getElementById('PasswordTxt').focus();
        return false;
    }
    else {
        document.getElementById("PasswordSpan").innerHTML = "";
    } 
    if (ConfirmPassword == "") {
        // alert("please enter the confirm Password");
        document.getElementById("ConfirmPasswordSpan").innerHTML = "please enter the confirm Password";
        document.getElementById('ConfirmPasswordTxt').focus();
        return false;
    }
    else {
        document.getElementById("ConfirmPasswordSpan").innerHTML = "";
    } 
    
    if (Password !== ConfirmPassword) {
        // alert("Confirm Password Does not match with Password");
        document.getElementById("ConfirmPasswordSpan").innerHTML = "Confirm Password Does not match with Password";
        document.getElementById('ConfirmPasswordTxt').focus();
        return false;
    }
    else {
        document.getElementById("ConfirmPasswordSpan").innerHTML = "";
    }
    if (Password == Name) {
        // alert("Password and Name should not be equal");
        document.getElementById("PasswordSpan").innerHTML = "Password and Name should not be equal";
        document.getElementById('PasswordTxt').focus();
        return false;
    }
    else{
        document.getElementById("PasswordSpan").innerHTML = "";
    }
    return true;
}
