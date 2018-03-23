// useless here since the script is located just before the closing  body tag, but still, just in case it gets reused somwhere else
//document.addEventListener("DOMContentLoaded", function(event) {



    // Select color input for Foreground
    
    let foregroundColor = '#FEDD00' ;
    function setFGColor(evt) {
        foregroundColor = evt.target.value;
    };
    colorPickerForeground = document.querySelector("#colorPickerForeground");
    colorPickerForeground.addEventListener("input", setBGColor, false);
    colorPickerForeground.select();
    
    // Select color input for BackForeground
    let backgroundColor = '#588C7E' ;
    function setBGColor(evt) {
        backgroundColor = evt.target.value;
    }
    colorPickerBackground = document.querySelector("#colorPickerBackground");
    colorPickerBackground.addEventListener("input", setBGColor, false);
    colorPickerBackground.addEventListener("change", setBGColor, false);
    colorPickerBackground.select();




    


    // When size is submitted by the user, call makeGrid()

    function makeGrid() {   // Select and create grid size
    
        // select the table
        let pixelCanvas = document.querySelector('#pixelCanvas');
        
        // Select size input
        let gridHeight;
        let gridWidth;
        
        gridHeight = document.querySelector("#inputHeight").value;
        gridWidth = document.querySelector("#inputWidth").value;

        console.log(`gridHeight is ${gridHeight} and gridWidth is ${gridWidth}`);

        for (let i = 0 ; i < gridHeight ; i++) {
            console.log(`before building row ${i} of ${gridHeight}`);
            pixelCanvas.insertAdjacentHTML('beforeend', '<tr></tr>');
        };
        
        let trs = document.querySelectorAll("tr");
        console.log(`trs.length is ${trs.length}`);
        for (let i = 0 ; i < gridWidth ; i++) { 
            console.log(`before building column ${i} of ${gridWidth}`);
            
            for (let tr = 0; tr < trs.length; tr++) {
                console.log(`before building on tr ${tr} of ${trs.length}`);
                trs[tr].insertAdjacentHTML('beforeend', '<td></td>');
            }
        }
        
        // creates the css background color decided before submit grid creation
//        console.log(`background color is ${backgroundColor}`);
//        document.getElementsByTagName("td").style.backgroundColor =  backgroundColor;
        
    };

    function resetGrid() {  // Reset grid to initial color
        let colorGridBackground = $("#colorBackground").val();
         $("td").css("background", colorGridBackground);
    };

    function deleteGrid() {  // Erase eventual existing grid
        pixelCanvas.remove;
    };


    
   
    document.querySelector("#sizePicker").addEventListener('submit',function(evt){ // call for function to create grid
        
        evt.preventDefault();   // prevent from reloading the page when click submit
        deleteGrid();
        makeGrid();

    });
    
//    $("#eraser").click(function(evt){    // reset grid to initial colours
//        evt.preventDefault();
//        resetGrid();
//    });
//
//    $("#delete-grid-button").click(function(evt){    // erase existing grid function
//        evt.preventDefault();
//        deleteGrid();
//    });
    
//    paintColor();   //  call for painting function
    

    

//};

//TODO : make it JS ES6 ( for loops -> for of loops, function arrows => ) 