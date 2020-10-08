
// ============================================================================= function for open miniImage and Description
$(document).ready(function(){

var clickElem = document.querySelectorAll("img#grid-img");
//console.log(clickElem);
var main = document.querySelectorAll('div#main');
//console.log(main);

for(var i=0; i < clickElem.length; i++){

    clickElem[i].addEventListener('click', function(e){
        
            main[0].style.display = 'block';
            main[1].style.display = 'block';
            main[2].style.display = 'block';
            main[3].style.display = 'block';
            main[4].style.display = 'block';
            main[5].style.display = 'block';
    })
}

})

// $(document).ready(function(){


//     $('#grid-img').on('click', function(){
        
//          var mains = document.querySelectorAll('div#main');
//          console.log(mains);
        
//          for(var i=0; i<mains.length; i++){


//             main[0].style.display = 'block';
//             main[1].style.display = 'block';
//             main[2].style.display = 'block';
//             main[3].style.display = 'block';
//             main[4].style.display = 'block';
//             main[5].style.display = 'block';

//             // $('main[0]').show();
//          }
        
//     })




















// ===============================================================function for open big image========================================

function openImageWindow(src) {
    var image = new Image();
    image.src = src;
    var width = image.width;
    var height = image.height;
    window.open(src ,"Image","width=" + width + ",height=" + height);
 }






