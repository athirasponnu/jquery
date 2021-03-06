$(document).ready(function(){
    $("#formSubmit").submit(function(e){
        e.preventDefault();
        validateInput();
    });
    $("input").blur(function(e){
        e.preventDefault();
        validateInput();
    });
    $("select").blur(function(e){
        e.preventDefault();
        validateInput();
    });
    $("textarea").blur(function(e){
        e.preventDefault();
        validateInput();
    });
});
function validateInput()
{
    var username=$("#name");
    let email=$("#email");
    let password=$("#password");
    let confirmPassword=$("#confirmPassword");
    let dob=$("#dob");
    let occupationDetails=$("#description");
    let sel=$("#sel");
    let contactNum=$("#contactNum");
    let inputFile=$("#image");
    let nameValue=username.val().trim();
    let validName="^[a-zA-Z\s]+$";
    let emailValue=email.val().trim();
    let validEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordValue=password.val().trim();
    let validPassword="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])";
    let confirmPasswordValue=confirmPassword.val().trim();
    let dobValue=dob.val().trim();
    let occupationValue=occupationDetails.val().trim();
    let contactValue=contactNum.val().trim();
    let validPhoneNum=/^\d{10}$/;
    let inputFileValue=inputFile.val().trim();
    let validImageExtension=["jpeg","jpg"];
    //Username Validation
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
    //Email validation
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
    //password validation
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
     //gender validation
    if (!$("input[name='gender']:checked").val())
    {
       $("#genderErr").html("* Please select a gender");
    }
    else
    {
        $("#genderErr").hide();
    }
    //date of Birth Validation
    if(dobValue=="")
    {
        error(dob," * Date of Birth feild cannot be empty");
    }
    else
    {
        success(dob);
    }
    // occupation details validation
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
    //select validation
    if(sel.val() == "")
    {
      error(sel,"* Please select your Country");
    }
    else
    {
        document.getElementById("selectErr").innerHTML="";
        success(sel);
    }
    //phone number validation
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
     //Checkbox validation 
    if (!$("input[name='checkbox']:checked").val())
    {
        $("#checkboxErr").html("* Please select your qualification");
        
    }
    else
    {
        $("#checkboxErr").html("");
    }
    //File validation
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
}
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








