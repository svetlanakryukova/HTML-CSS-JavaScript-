


// =======================================================================================Ger total price from shopping items=============

    var localValue = localStorage.getItem('object_total_price');
    console.log(localValue);

    var localValue2 = localStorage.getItem('object_total_number');
    console.log(localValue2);

    input = document.getElementById('total_price');
    // input2 = document.getElementById('total_numbers');

    total_price.value=localValue;
    total_numbers.value=localValue2;
    
    localStorage.removeItem('object_total_price'); //clear localStorage
    localStorage.removeItem('object_total_number');

// ============================================================================================Calculation total price=============================


    var totals = parseFloat();
    var subtotal = parseFloat(localValue);

    totals = ((subtotal*0.05)+(subtotal*0.098)+subtotal).toFixed(2);
    console.log(totals);
    input = document.getElementById('total_invoice');
    total_invoice.value=totals;
    input=document.getElementById('totalPurchase');
    totalPurchase.value=totals;

//
 
// ==========================================================================change maxlength for the field of card number======================

//============================================================master card=================================

checkbox_mscard=document.querySelector('#mscard');
checkbox_mscard.onclick = function(){

    if(checkbox_mscard.checked){
        alert('You will use Master card'); 
        
        document.getElementById('card_number').setAttribute("maxlength","16");
        document.getElementById('card_number').setAttribute("minlength","16")

    }
};

//===========================================================americanexpress card========================

checkbox_amcard=document.querySelector('#amcard');
checkbox_amcard.onclick = function(){

    if(checkbox_amcard.checked){
        alert('You will use American Express card'); 
        
        document.getElementById('card_number').setAttribute("maxlength","16");
        document.getElementById('card_number').setAttribute("minlength","16")
    }
    else{
        alert('chekbox off'); 
        
    }
};

//=========================================================visa card====================================

checkbox_vscard=document.querySelector('#vscard');
checkbox_vscard.onclick = function(){

    if(checkbox_vscard.checked){
        alert('You will use Visa card'); 
        
        document.getElementById('card_number').setAttribute("maxlength","15");
        document.getElementById('card_number').setAttribute("minlength","15")
     
    }
    
};


// =========================================function for button clear forms===========================


var button = document.getElementById("clear_button").addEventListener("click", buttonClicked3);

function buttonClicked3(e){

    
    document.getElementById("card_number").value="";
    document.getElementById("cvc").value="";
    document.getElementById("card_name").value="";
    document.getElementById("name").value="";
    document.getElementById("address").value="";
    document.getElementById("address2").value="";
    document.getElementById("city").value="";
    document.getElementById("postalcode").value="";
    document.getElementById("province").value="";
    document.getElementById("country").value="";
        
};


// =========================================================================Validation each fields in the form========================


var inputs = document.querySelectorAll("input");
console.log(inputs);

var pattern = {
      
    card_number:/^[0-9]{15,16}$/,            //only numbers can be entered, at least 15 simbol and 16 max simbol
    cvc:/^[0-9]{3,3}$/,                      //only three-digit numbers can be entered
	card_name:/^[A-Z]{3,15}\s[A-Z]{3,15}$/,  // uppercase only First name and Last name separated by space. Every name must be contain at least 3 to 15 letters
    expiration:/^([\d]{2,2}\/[\d]{2,2})$/,  // Must be contain only 4 digits. 2 digist and 2 digist separated by a slash. Exm: 22/22
    name:/^[A-Z]{1,1}[a-z]{2,14}\s[A-Z]{1,1}[a-z]{2,14}$/, //name must be contain full name (First name+Last name).First letter in uppercase subsequent letter in lowcase. First name and last name separated by space.  
    city:/^[A-Z]{1,1}[a-z A-Z]+$/,
    postalcode:/^[A-Z]{1,1}[0-9]{1,1}[A-Z]{1,1}[0-9]{1,1}[A-Z]{1,1}[0-9]{1,1}$/,/* Every postale code must be contain: uppercase later, digital, uppercase later, digital, uppercase later, digital */ 
    province:/^[A-Z]{1,1}[a-z A-Z]+$/
}



function validate(field, regex){
	
	if(regex.test(field.value)){
		
		field.className = "valid";
	}else{
		field.className = "invalid";
	}
	
}


inputs.forEach((input)=>{
	input.addEventListener("keyup",(e)=>{
		
	    validate(e.target, pattern[e.target.attributes.name.value]);
	})
})

// ===============================================================function for button Continue=======================

checkbox_form=document.querySelector('#chek_card');

function buttonClicked4(e){
                                                                                                        
           
        if (document.getElementById('total_price')!=""
            &&document.getElementById('total_numbers')!=""
            &&document.getElementById("card_number").value!="" 
            && document.getElementById("cvc").value!=""
            && document.getElementById("card_name").value!=""
            && document.getElementById("expiration").value!=""
            && document.getElementById("name").value!=""
            && document.getElementById("address").value!=""
            && document.getElementById("city").value!=""
            && document.getElementById("postalcode").value!=""
            && document.getElementById("province").value!=""
            && checkbox_form.checked)
        {   
            alert("Thank you for your shoppping!");
            window.location = "./index.html"; 
                    
        }
        else { 
            
            alert("Please note that all fields whith * are required !!! ");
            
        } 


}