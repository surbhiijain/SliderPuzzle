var empty_row = 3;
var empty_column = 3;


function test(button_row, button_column) {
    var id_String = String(button_row) + String(button_column);
    var block1 = document.getElementById(id_String);
    console.log(id_String);
    var empty_row_store = empty_row;
    var empty_column_store = empty_column;
    if (empty_row === button_row && empty_column === button_column + 1 ||
        empty_row === button_row && empty_column === button_column - 1 ||
        button_column === empty_column && button_row === empty_row + 1 ||
        button_column === empty_column && button_row === empty_row - 1) {
        var emptyimg = document.getElementById(String(empty_row) + String(empty_column));
        pic_switch(block1, emptyimg);
        empty_row = button_row;
        empty_column = button_column;
        button_row = empty_row_store;
        button_column = empty_column_store;
    }
}

function pic_switch(pic1, pic2) {
    var filename1 = pic1.src;// clicked image name
    var filename2 = pic2.src;//empty image name
    pic1.src = filename2;
    pic2.src = filename1;
}

function randomize() {
    var random_row;
    var random_column;
    var counter = 800;
    while (counter > 0) {

        random_row = Math.floor((Math.random() * 3) + 1);
        random_column = Math.floor((Math.random() * 3) + 1);
        test(random_row, random_column);
        counter = counter - 1;
    }
}

function win() {

}

