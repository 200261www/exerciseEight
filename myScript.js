//Mike (Li Zhuangxin)
function validateform(){
var fname=document.myform.fname.value;//Used to read the first name entered by the user
var lname=document.myform.lname.value;//Used to read the last name entered by the user
var address=document.myform.address.value;//Used to read the address entered by the user
var message=document.myform.message.value;//Used to read the message entered by the user
var telephone=document.myform.telephone.value;//Used to read the telephone entered by the user
if (fname==null || fname==""){  //Check if the First name is empty
    alert("First name can't be blank");  
    return false; 
}
else if (lname==null || lname==""){  //Check if the Last name is empty
    alert("Last name can't be blank");  
    return false; 
}
else if (address==null || address==""){  //Check if the Address is empty
    alert("Address can't be blank");  
    return false; 
}
else if (message==null || message==""){  //Check if the message is empty
    alert("Message can't be blank");  
    return false; 
}
else if (telephone==null || telephone==""){  //Check if the telephone is empty
    alert("Telephone can't be blank");  
    return false; 
}
else if (true){
    alert("Thank you for filling out our form, we will contact you as soon as possible.")
    return true
}
}