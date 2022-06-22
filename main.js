
canvas=new fabric.Canvas('myCanvas');
block_width=35;
block_height=35;
player_x=350;
player_y=250;
object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        object=img;
        object.scaleToWidth(100);
        object.scaleToHeight(100);
        object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(object);
    });
}

function block_update(get_image){
    fabric.Image.fromURL(get_image,function(img){
            block=img;
            block.scaleToWidth(block_width);
            block.scaleToHeight(block_height);
            block.set({
                top:player_y,
                left:player_x
            });
            canvas.add(block);
    });
}

window.addEventListener("keydown",key_down);
function key_down(e){
    key_press=e.keyCode;
    console.log(key_press);
    if(e.altKey=true && key_press=='87'){
        block_width=block_width+10;
        document.getElementById("span_1").innerHTML=block_width;
    }
    if(e.altKey==true && key_press=='72'){
        block_height=block_height+10;
        document.getElementById("span_2").innerHTML=block_height;
    }
    if(e.altKey=true && key_press=='86'){
        block_width=block_width-10;
        document.getElementById("span_1").innerHTML=block_width;
    }
    if(e.altKey=true && key_press=='73'){
        block_height=block_height-10;
        document.getElementById("span_2").innerHTML=block_height;
    }
    if(key_press=='37'){
        left();
        console.log("left");
    }
    if(key_press=='38'){
        up();
        console.log("up");
    }
    if(key_press=='39'){
        right();
        console.log("right");
    }
    if(key_press=='40'){
        down();
        console.log("down");
    }
    if(key_press=='68'){
        block_update('diamond_block.jpg');
        console.log("d");
    }
    if(key_press=='71'){
        block_update('gold_block.jpg');
        console.log("g");
    }
    if(key_press=='76'){
        block_update('light_green.png');
        console.log("l");
    }
    if(key_press=='75'){
        block_update('dark_green.png');
        console.log("k");
    }
    if(key_press=='67'){
        block_update('cloud.jpg');
        console.log("c");
    }
    if(key_press=='82'){
        block_update('roof.jpg');
        console.log("r");
    }
    if(key_press=='84'){
        block_update('trunk.jpg');
        console.log("t");
    }
    if(key_press=='65'){
        block_update('wall.jpg');
        console.log("a");
    }
    if(key_press=='85'){
        block_update('unique.png');
        console.log("u");
    }
    if(key_press=='89'){
        block_update('yellow_wall.png');
        console.log("y");
    }
    if(key_press=='69'){
        block_update('creeper.jpg');
        console.log("e");
    }
}

function up(){
    if(player_y>0){
        player_y=player_y-10;
        console.log("up pressed, x= "+ player_x + "y= "+ player_y);
        canvas.remove(object);
        player_update();
    }
}

function down(){
    if(player_y<500){
        player_y=player_y+10;
        console.log("up pressed x= "+ player_x + "y= "+ player_y);
        canvas.remove(object);
        player_update();
    }
}

function left(){
    if(player_x>0){
        player_x=player_x-10;
        console.log("up pressed x= "+ player_x + "y= "+ player_y);
        canvas.remove(object);
        player_update();
    }
}

function right(){
    if(player_x<700){
        player_x=player_x+10;
        console.log("up pressed x= "+ player_x + "y= "+ player_y);
        canvas.remove(object);
        player_update();
    }
}