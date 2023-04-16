//======================================= Name Regex Validation ========================================//


const validateName = (name) => {
    return (/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i.test(name))
  }
  

  
  const validateEmail = (email) => {
    return (/^[a-z]{1}[a-z0-9._]{1,100}[@]{1}[a-z]{2,15}[.]{1}[a-z]{2,10}$/.test(email))
  }
  
  
  
  const validatePassword = (password) => {
    return (/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(password));
  }
  
 
  
  const validateMobileNo = (Number) => {
    return ((/^((\+91)?|91)?[6789][0-9]{9}$/g).test(Number));
  }
  
  
 
  

  
  
  
  
  
  
  module.exports = { validateName , validateEmail , validatePassword , validateMobileNo  }
  