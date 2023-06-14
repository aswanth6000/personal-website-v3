dow = () => {
    window.alert("File downloaded ");
}
snd = () => {
    window.alert("Send successfully ");
    location.reload();
}
validate = () => {
    let x = document.forms["contact-form"]["nam"].value;
    if(x==""){
        window.alert("Please enter your name ");
        document.forms["contact-form"]["nam"].focus();
        return false;
    }
    let y = document.forms["contact-form"]["mail"].value;
    if(y==""){
        window.alert("Enter your email ");
        document.forms["contact-form"]["mail"].focus();
        return false;
    }
    let z = document.forms["contact-form"]["msg"].value;
    if(z==""){
        window.alert("Message cannot be empty");
        document.forms["contact-form"]["msg"].focus();
        return false;
    }
}