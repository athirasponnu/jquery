$(document).ready(function(){
    $("#btn").click(function(e){
        e.preventDefault();
        var username=$("#name");
        let email=$("#email");
        let password=$("#password");
        let confirmPassword=$("#confirmPassword");
        let gender1=$("#gen1");
        let gender2=$("#gen2");
        let dob=$("#dob");
        let occupationDetails=$("#description");
        let sel=$("#sel");
        let chk1=$("#chk1");
        let chk2=$("#chk2");
        let chk3=$("#chk3");
        let contactNum=$("#contactNum");
        let inputFile=$("#image");
        let nameValue=username.val().trim();
         let validName="^[a-zA-Z\s]+$";
    if(nameValue=="")
    {
        error(username,"* Username cannot be empty");
       
    }
    else if(!nameValue.match(validName))
    {
        error(username,"* Username cannot include numbers and special characters ");
    }
    else
    {
        success(username);
        
    }
    let emailValue=email.val().trim();
    let validEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailValue=="")
    {
        error(email,"* Email cannot be empty");  
       
    }
    else if(!emailValue.match(validEmail))
    {
        error(email,"* Enter a valid email ");
    }
    else
    {
        success(email);
    }
    let passwordValue=password.val().trim();
    let validPassword="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])";
    if(passwordValue=="")
    {
        error(password,"* Password cannot be empty");
        
    }
    else if(passwordValue.length<8)
    {
        error(password,"* Password must atleast contain 8 characters");   
    }
    else if(!passwordValue.match(validPassword))
    {
        error(password,"* Password should contain atleast one uppercase character, lowercase character,digit and special character");
    }
    else
    {
        success(password);
    }

//confirm password validation
    let confirmPasswordValue=confirmPassword.val().trim();
    if(confirmPasswordValue=="")
    {
        error(confirmPassword,"* Password cannot be empty");
    }
    else if(confirmPasswordValue!=passwordValue)
    {
        error(confirmPassword,"* Password doesnot match");
    }
    else
    {
        success(confirmPassword);
    }
    if(gender1.checked==false && gender2.checked==false )
    {
       document.getElementById("genderErr").innerHTML="* Please select a gender";
    }
    else
    {
        document.getElementById("genderErr").innerHTML="";
       
    }
    let dobValue=dob.val().trim();
    if(dobValue=="")
    {
        error(dob," * Date of Birth feild cannot be empty");
    }
    else
    {
        success(dob);
    }
    
    let occupationValue=occupationDetails.val().trim();
    if(occupationValue=="")
    {
        error(occupationDetails,"* Occupation details can't be empty");
    }
    else if(occupationValue.length<10)
    {
        error(occupationDetails,"* Details must contain more than 10 characters ");
    }
    else
    {
        success(occupationDetails);
    }
   
   if(sel.val() == "")
    {
      error(sel,"* Please select your Country");
    }
    else
    {
        document.getElementById("selectErr").innerHTML="";
        success(sel);
    }

    let contactValue=contactNum.val().trim();
    let validPhoneNum=/^\d{10}$/;
    if(contactValue=="")
    {
        error(contactNum,"* Phone number feild cannot be empty");
    }
    else if(!contactValue.match(validPhoneNum))
    {
        error(contactNum,"* Enter a valid number");
    }
    else
    {
        success(contactNum);
    }
      
    if(chk1.checked==false && chk2.checked==false && chk3.checked==false )
    {
        document.getElementById("checkboxErr").innerHTML="* Please select your qualification";
        
    }
    else
    {
        document.getElementById("checkboxErr").innerHTML=" ";
    }
    let inputFileValue=inputFile.val().trim();
    let validImageExtension=["jpeg","jpg"];
    if(inputFileValue=="")
    {
        error(inputFile,"* Please choose a  file");
    }
    else if(inputFileValue!="")
    {
        let imageExtensionPosition=inputFileValue.lastIndexOf(".");
        let inputImageExtension=inputFileValue.substring(imageExtensionPosition+1);
        let result=validImageExtension.includes(inputImageExtension);
        if(!result)
        {
            error(inputFile,"* Enter  a valid file");
        }
        else
        {
            success(inputFile);
        }
    }
    else
    {
        success(inputFile);
    }
    });
});




function error(input,message)
{
    input.siblings("p").text(message).addClass("errorMsg");
    input.addClass("feildDiv error bordererror");
    input.next().addClass("errorMsg");
    input.siblings("i.fa-circle-check").addClass("successicon").hide();
    input.siblings("i.fa-circle-exclamation").addClass("fail").show();
}
function success(input)
{
     input.siblings("p").addClass("successMsg");
    input.addClass(" bordersuccess");
    input.siblings("i.fa-circle-exclamation").addClass("fail").hide();
    input.siblings("i.fa-circle-check").addClass("successicon").show();
}








