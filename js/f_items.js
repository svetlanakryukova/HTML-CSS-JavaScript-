
// ===============================================Array of Items=================================================
  var finItems = [
      {
          name: "Cloud",
          url:'media/img-7.png',
          tissue: "Silk",
          picture: "Batic",
          type: "Handmade",
          price: "$550.99"

  },{
            name: "Rainbow",
            url:'media/img-8.png',
            tissue: "Cotton",
            picture: "Batic",
            type: "Handmade",
            price: "$690.99"

  }, { 
            name: "Drama",
            url:'media/img-9.png',
            tissue: "Calico",
            picture: "Batic",
            type: "Handmade",
            price: "$300.99"

  },{
            name: "Sun",
            url:'media/img-10.png',
            tissue: "Wool",
            picture: "Batic",
            type: "Handmade",
            price: "$350.99"
  },{
            name: "Red",
            url:'media/img-11.png',
            tissue: "Silk",
            picture: "Batic",
            type: "Handmade",
            price: "$250.99"
  },{
            name: "Star",
            url:'media/img-12.png',
            tissue: "Silk",
            picture: "Batic",
            type: "Handmade",
            price: "$399.99"
  }];


 //========================================Function for search finished items================================================================= 

var button = document.getElementById("button").addEventListener("click", buttonClicked);

// console.log(finItems);


function buttonClicked(e){

    
   let item = document.getElementById("name-to-find").value.toUpperCase();

    // console.log(item);
        
    for(let index=0; index < finItems.length; index++){

        if (item == finItems[index].name.toUpperCase()) 
        {
            
            alert("This item name: "+item+" found");
             
            document.getElementById("output_pic").innerHTML =  "<img src='"+ finItems[index].url+"'>" ;
            document.getElementById("output_desc").innerHTML = "<h3>" + "Name: " + finItems[index].name + "</h3>" + "<li>" +"Tissue: "+ finItems[index].tissue +"</li>"
                                                              +"<li>" + "Picture: " + finItems[index].picture +"</li>"+"<li>" +"Type: " + finItems[index].type+"</li>"+"<li>" 
                                                              + "Price: "+ finItems[index].price+"</li>"; 
        }
    }

    document.getElementById("name-to-find").value="";

}

