



// ================================================function for clean my cart======================================================= 




var button = document.getElementById("button_clear_cart").addEventListener("click", buttonClicked);
//console.log(button);

function buttonClicked(e){



    els = this.querySelectorAll('input[type="radio"]:checked');
    nums = this.querySelectorAll('input[type="number"]');
    sum_num = this.querySelectorAll('input[type="text"]');
   console.log(sum_num);

    
    for (var i=0; i<els.length; i++)
         {
             els[i].value="";
             
             nums[i].value="";

         }

    for (var i=0; i<sum_num.length; i++ )
    {
      sum_num[i].value="";
    }

};



//  ===================================================================Count each model=============================


var hide = document.querySelector("#checkbox_price1");
	hide.addEventListener("change", function(){
		
		if(hide.checked){

            var name_items = document.getElementById('name_items').innerHTML;
           // console.log(name_items);
            var price = document.getElementById("price1").value;
            var quantity = document.getElementById("quantity1").value;
            var total=price*quantity;
            document.getElementById('checkbox_price1').setAttribute("value", total);
            console.log(document.getElementById('checkbox_price1').value);
            
            if(quantity==1){
              
              alert(document.getElementById("quantity1").value+ " item " + name_items + " has been added to the cart");
            }
            else{alert(document.getElementById("quantity1").value+ " item " + name_items + " have been added to the cart");}
            
            addItemToCart(name_items, price, quantity, total);

		}else{
 
			console.log("Check the items");
		}
    })


    var hide2 = document.querySelector("#checkbox_price2");
	hide2.addEventListener("change", function(){
		
		if(hide2.checked){
            var name_items = document.getElementById('name_items2').innerHTML;
            var price = document.getElementById("price2").value;
            var quantity = document.getElementById("quantity2").value;
            var total=price*quantity;
            
            if(quantity==1){
              
              alert(document.getElementById("quantity2").value+ " item " + name_items + " has been added to the cart");
            }
            else{alert(document.getElementById("quantity2").value+ " item " + name_items + " have been added to the cart");}
            
            document.getElementById('checkbox_price2').setAttribute("value", total);

            addItemToCart(name_items, price, quantity, total);


		}else{

		console.log("Check the items");
		}
    })



 var hide3 = document.querySelector("#checkbox_price3");
	hide3.addEventListener("change", function(){
		
		if(hide3.checked){
            
            var name_items = document.getElementById('name_items3').innerHTML;
            var price = document.getElementById("price3").value;
            var quantity = document.getElementById("quantity3").value;
            var total=price*quantity;
            document.getElementById('checkbox_price3').setAttribute("value", total);
            
            if(quantity==1){
              
              alert(document.getElementById("quantity3").value+ " item " + name_items + " has been added to the cart");
            }
            else{alert(document.getElementById("quantity3").value+ " item " + name_items + " have been added to the cart");}
            
            addItemToCart(name_items, price, quantity, total);
		}else{

		console.log("Check the items");
		}
    })


    var hide4 = document.querySelector("#checkbox_price4");
	  hide4.addEventListener("change", function(){
		
		if(hide4.checked){
            var name_items = document.getElementById('name_items4').innerHTML;
            var price = document.getElementById("price4").value;
            var quantity = document.getElementById("quantity4").value;
            var total=price*quantity;
            document.getElementById('checkbox_price4').setAttribute("value", total);
            
            if(quantity==1){
              
              alert(document.getElementById("quantity4").value+ " item " + name_items + " has been added to the cart");
            }
            else{alert(document.getElementById("quantity4").value+ " item " + name_items + " have been added to the cart");}
            
            addItemToCart(name_items, price, quantity, total);


		}else{

		console.log("Check the items");
		}
    })


  var hide5 = document.querySelector("#checkbox_price5");
	hide5.addEventListener("change", function(){
		
		if(hide5.checked){

            var name_items = document.getElementById('name_items5').innerHTML;
            var price = document.getElementById("price5").value;
            var quantity = document.getElementById("quantity5").value;
            var total=price*quantity;
            document.getElementById('checkbox_price5').setAttribute("value", total);
            
            if(quantity==1){
              
              alert(document.getElementById("quantity5").value+ " item " + name_items + " has been added to the cart");
            }
            else{alert(document.getElementById("quantity5").value+ " item " + name_items + " have been added to the cart");}
            
            addItemToCart(name_items, price, quantity, total);
		}else{

		console.log("Check the items");
		}
    })

  var hide6 = document.querySelector("#checkbox_price6");
	hide6.addEventListener("change", function(){
		
		if(hide6.checked){

            var name_items = document.getElementById('name_items6').innerHTML;
            var price = document.getElementById("price6").value;
            var quantity = document.getElementById("quantity6").value;
            var total=price*quantity;
            document.getElementById('checkbox_price6').setAttribute("value", total);
            
            if(quantity==1){
              
              alert(document.getElementById("quantity6").value+ " item " + name_items + " has been added to the cart");
            }
            else{alert(document.getElementById("quantity6").value+ " item " + name_items + " have been added to the cart");}
            
            addItemToCart(name_items, price, quantity, total);
		}else{

		console.log("Check the items");
		}
    })


  var hide7 = document.querySelector("#checkbox_price7");
	hide7.addEventListener("change", function(){
		
		if(hide7.checked){

            var name_items = document.getElementById('name_items7').innerHTML;
            var price = document.getElementById("price7").value;
            var quantity = document.getElementById("quantity7").value;
            var total=price*quantity;
            document.getElementById('checkbox_price7').setAttribute("value", total);
            
            if(quantity==1){
              
              alert(document.getElementById("quantity7").value+ " item " + name_items + " has been added to the cart");
            }
            else{alert(document.getElementById("quantity7").value+ " item " + name_items + " have been added to the cart");}
            addItemToCart(name_items, price, quantity, total);
		}else{

		console.log("Check the items");
		}
    })


    var hide8 = document.querySelector("#checkbox_price8");
	  hide8.addEventListener("change", function(){
		
		if(hide8.checked){

            var name_items = document.getElementById('name_items8').innerHTML;
            var price = document.getElementById('price8').value;
            var quantity = document.getElementById("quantity8").value;
            var total=price*quantity;
            document.getElementById('checkbox_price8').setAttribute("value", total);
            
            if(quantity==1){
              
              alert(document.getElementById("quantity8").value+ " item " + name_items + " has been added to the cart");
            }
            else{alert(document.getElementById("quantity8").value+ " item " + name_items + " have been added to the cart");}
            
            addItemToCart(name_items, price, quantity, total);
		}else{

		console.log("Check the items");
		}
    })


  var hide9 = document.querySelector("#checkbox_price9");
	hide9.addEventListener("change", function(){
		
		if(hide9.checked){
            var name_items = document.getElementById('name_items9').innerHTML;
            var price = document.getElementById("price9").value;
            var quantity = document.getElementById("quantity9").value;
            var total=price*quantity;
            document.getElementById('checkbox_price9').setAttribute("value", total);
            
            if(quantity==1){
              
              alert(document.getElementById("quantity9").value+ " item " + name_items + " has been added to the cart");
            }
            else{alert(document.getElementById("quantity9").value+ " item " + name_items + " have been added to the cart");}

            addItemToCart(name_items, price, quantity, total);
		}else{

		console.log("Check the items");
		}
    })


  var hide10 = document.querySelector("#checkbox_price10");
	hide10.addEventListener("change", function(){
		
		if(hide10.checked){
            var name_items = document.getElementById('name_items10').innerHTML;
            var price = document.getElementById("price10").value;
            var quantity = document.getElementById("quantity10").value;
            var total=price*quantity;
            document.getElementById('checkbox_price10').setAttribute("value", total);
            
            if(quantity==1){
              
              alert(document.getElementById("quantity10").value+ " item " + name_items + " has been added to the cart");
            }
            else{alert(document.getElementById("quantity10").value+ " item " + name_items + " have been added to the cart");}

            addItemToCart(name_items, price, quantity, total);
			
		}else{

		console.log("Check the items");
		}
    })


  var hide11 = document.querySelector("#checkbox_price11");
	hide11.addEventListener("change", function(){
		
		if(hide11.checked){
            var name_items = document.getElementById('name_items11').innerHTML;
            var price = document.getElementById("price11").value;
            var quantity = document.getElementById("quantity11").value;
            var total=price*quantity;
            document.getElementById('checkbox_price11').setAttribute("value", total);
           
            if(quantity==1){
              
              alert(document.getElementById("quantity11").value+ " item " + name_items + " has been added to the cart");
            }
            else{alert(document.getElementById("quantity11").value+ " item " + name_items + " have been added to the cart");}

            addItemToCart(name_items, price, quantity, total);
		}else{

		console.log("Check the items");
		}
    })

  var hide12 = document.querySelector("#checkbox_price12");
	hide12.addEventListener("change", function(){
		
		if(hide12.checked){
            var name_items = document.getElementById('name_items12').innerHTML;
            var price = document.getElementById("price12").value;
            var quantity = document.getElementById("quantity12").value;
            var total=price*quantity;
            document.getElementById('checkbox_price12').setAttribute("value", total);
            
            if(quantity==1){
              
              alert(document.getElementById("quantity12").value+ " item " + name_items + " has been added to the cart");
            }
            else{alert(document.getElementById("quantity12").value+ " item " + name_items + " have been added to the cart");}

            addItemToCart(name_items, price, quantity, total);

		
		}else{

		console.log("Check the items");
		}
    })


// =======================================function for add items into the cart=================================


function addItemToCart(name_items, price, quantity, total){

  var cartRow = document.createElement('div')
    //cartRow.innerHTML=name_items
  cartRow.classList.add('cart-row')
  var cartItems = document. getElementsByClassName('cart-items')[0]
    //cartItems.append(cartRow)
  var cartRowContents = `
    <span class="cart-items-title">${name_items}</span>
    <span class="cart-price">${price}</span>
    <span class="cart-quantity">${quantity}</span>
    <span class="cart-row-total">${(total).toFixed(2)}</span>
   `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    updateCartTotal() 
   
}

    

// ================================================function for submin information to  page Invoice======================================================= 

var button = document.getElementById("goToInvoice").addEventListener("click", buttonClicked2);

function buttonClicked2(e){

          var total_price = parseFloat(document.getElementById("input_total_sum").value);
          var total_number = document.getElementById("input_total_number").value;
            console.log(total_price);
            console.log(total_number);

        if(total_price.value!="" && total_number.value!=""){

          localStorage.setItem('object_total_price', total_price);
          localStorage.setItem('object_total_number', total_number);
          window.location = "./invoice.html";
        }
        else {alert("You didn't buy anything");}  

}

//=================================================function for show you how much you will be pay total=====================================

function updateCartTotal(){

  var cartItemContainer = document.getElementsByClassName('cart-items')[0];
      console.log(cartItemContainer);
  var cartRows = cartItemContainer.getElementsByClassName('cart-row');
      console.log(cartRows);
  var totals = 0;
  var quantitys =0;

  for (var i=0; i < cartRows.length; i++)
  {
    var cartRow = cartRows[i]
    
    var quantityElement = cartRow.getElementsByClassName('cart-quantity')[0]
    
    var totalElement = cartRow.getElementsByClassName('cart-row-total')[0]
    console.log(totalElement.innerHTML)
    
       totals = totals + parseFloat(totalElement.innerHTML)
       quantitys = quantitys + parseFloat(quantityElement.innerHTML)
  }

  document.getElementsByClassName('cart_total_price')[0].innerText = '$' + (totals).toFixed(2);
      // console.log(quantitys)

  document.getElementsByClassName('cart_total_quantity')[0].innerText = quantitys;

  var total_sum = document.getElementsByClassName('cart_total_price')[0].innerHTML.replace('$','');
      // console.log(total_sum)
  var total_quantity = document.getElementsByClassName('cart_total_quantity')[0].innerHTML;
  
  document.getElementById('input_total_sum').value= total_sum;
  document.getElementById('input_total_number').value= total_quantity;

}











