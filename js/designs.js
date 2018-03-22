// useless here since the script is located just before the closing  body tag, but still, just in case it gets reused somwhere else
//document.addEventListener("DOMContentLoaded", function(event) {

let pixelCanvas = document.querySelector('#pixelCanvas');

    // Select color input for Foreground
    
    let foregroundColor ;
    function setFGColor(evt) {
        foregroundColor = evt.target.value;
    };
    colorPickerForeground = document.querySelector("#colorPickerForeground");
    colorPickerForeground.addEventListener("input", setBGColor, false);
    colorPickerForeground.select();
    
    // Select color input for BackForeground
    let backgroundColor;
    function setBGColor(evt) {
        backgroundColor = evt.target.value;
    }
    colorPickerBackground = document.querySelector("#colorPickerBackground");
    colorPickerBackground.addEventListener("input", setBGColor, false);
    colorPickerBackground.select();


    // Select size input
    let gridHeight;
    let gridWidth;

    


    // When size is submitted by the user, call makeGrid()

    function makeGrid() {   // Select and create grid size
    
        gridHeight = document.querySelector("#inputHeight").value;
        gridWidth = document.querySelector("#inputWidth").value;

        console.log(`height is ${gridHeight} and width is ${gridWidth}`);

        for (let row = 0 ; row < gridHeight ; row++) {  
            pixelCanvas.insertAdjacentHTML('beforeend', '<tr></tr>');
        };
        for (let column = 0 ; column < gridWidth ; column++) {  
            document.querySelector('tr').insertAdjacentHTML('beforeend', '<td></td>');
        };
        // creates the css background color decided before submit grid creation
        document.getElementsByTagName('td').style.background =  backgroundColor;
        
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
    
    $("#eraser").click(function(evt){    // reset grid to initial colours
        evt.preventDefault();
        resetGrid();
    });

    $("#delete-grid-button").click(function(evt){    // erase existing grid function
        evt.preventDefault();
        deleteGrid();
    });
    
    paintColor();   //  call for painting function
    

    

//};