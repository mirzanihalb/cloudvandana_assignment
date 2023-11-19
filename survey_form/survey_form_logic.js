function handlereset(){
    window.location.reload()
}
function validate(){
    let isvalid = true;
    let firstname = document.getElementById("name").value
    let lastname = document.getElementById("lname").value
    let male = document.getElementById("male").checked
    let female = document.getElementById("female").checked
    let date = document.getElementById("date").value
    let country = document.getElementById("country").value
    let email = document.getElementById("email").value
    let mobile = document.getElementById("phnumber").value
    let profession = document.getElementById("profession").value
    
    
    
        let p_first = document.getElementById("first_error")
        p_first.style.display = "block";
        if(firstname.match(/\d/)){
            p_first.innerHTML = "*only characters"
            isvalid = false
        }
        else if(firstname===""){
            p_first.innerHTML = "*required"
            isvalid = false
        }

        let p_last = document.getElementById("last_error")
        p_last.style.display = "block"
        if(lastname.match(/\d/)){
            p_last.innerHTML = "*only characters"
            isvalid = false
        }
        else if(lastname===""){
            p_last.innerHTML = "*required"
            isvalid = false
        }
        
        
    
    if((male==false && female==false) || (male && female)){
        console.log(male,female)
        // choose one
        let p = document.getElementById("gender_error")
        p.style.display = "block";
        
        p.innerHTML = "*choose one"
        isvalid = false
    }
    
        // profession cannot be empty
        let p = document.getElementById("profession_error")
        p.style.display = "block";
        if(profession.match(/\d/)){
            p.innerHTML = "*only characters"
            isvalid = false
        }
        else if(profession===""){
            isvalid = false
            p.innerHTML = "*required"
        }
        

    
    if(country===""){
        // profession cannot be empty
        let p = document.getElementById("country_error")
        p.style.display = "block";
        
        p.innerHTML = "*select country"
        isvalid = false

    }
    
    if(date===""){
        // date to be managed
        let p = document.getElementById("dob_error")
        p.style.display = "block";
        
        p.innerHTML = "*dob required"
        isvalid = false
        
    }
    // email and mobile

    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2}$/;
    flag_email = pattern.test(email);

    if(!flag_email){
        let p = document.getElementById("email_error")
        p.style.display = "block";
        p.innerHTML = "*incorrect email format"
        isvalid = false
    }
    var mobile_pattern =  /^\d{10}$/;
    flag_mobile = mobile_pattern.test(mobile)
    if(!flag_mobile){
        let p = document.getElementById("phnumber_error")
        p.style.display = "block";
        p.innerHTML = "*exact 10 digits only"
        isvalid = false
    }
    if(isvalid){
        let gender = male?"Male":"Female";
        let st = "firstname : " +firstname+"\n"+"lastname : "+lastname+"\n"+"Date of Birth : "+date+"\nGender : "+gender+"\nCountry : "+country
                +"\nEmail : "+email+"\nMobile Number : "+mobile+"\nProfession : "+profession
        alert(st)
        window.location.reload()
    }
    
    

    
    
}