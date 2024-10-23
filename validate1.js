function validate1() { 
    // username validation 
    var name = document.forms["f1"]["name"].value; 
    if (name.length <= 0) { 
        alert("Please Enter Name"); 
        document.forms["f1"]["name"].focus(); 
        return false; 
    }      
    // email validation 
    var email = document.forms["f1"]["email"].value; 
    if (email.length <= 0) { 
        alert("Please Enter email"); 
        document.forms["f1"]["email"].focus(); 
        return false; 
    } else { 
        let eflag = false; 
        for (i = 0; i < email.length; i++) { 
            if (email.charAt(i) == "@") { 
                eflag = true; 
            } 
        } 
        if (!(eflag)) { 
            alert("Please enter a valid Email ID"); 
            document.forms["f1"]["email"].focus(); 
            return false; 
        } 
    }  
    // gender validation 
    let flag = false; 
    for (i = 0; i < document.forms["f1"]["gen"].length; i++) 
        if (document.forms["f1"]["gen"][i].checked) 
            flag = true; 
    if (!(flag)) { 
        alert("Please choose a Gender"); 
        return false; 
    } 
     
    // Language validation 
    flag = false; 
    for (i = 0; i < document.forms["f1"]["intrests"].length; i++) 
        if (document.forms["f1"]["intrests"][i].checked) 
            flag = true; 
    if (!(flag)) { 
        alert("Please select at least one of the intrests options."); 
        return false; 
    } 
     
    // address validation 
    var bio = document.forms["f1"]["bio"].value; 
    if (bio.length <= 0) { 
        alert("Please Enter bio"); 
        document.forms["f1"]["bio"].focus(); 
        return false; 
    } 
     
    // to display Success message 
    alert("Successful"); 
} 
