let canvas=document.getElementById('canvas');
var NewArr=document.getElementById('new');
var BubbleButton=document.getElementById('bubble')
var SpeedSlider=document.getElementById('speed');
var SizeSlider=document.getElementById('number');
var delay;
var size=55;

window.onload=GenNewArray;
NewArr.addEventListener('click',GenNewArray);

let arr_heights=[];
let divs=[];

//resets, creates new array
function GenNewArray(){
    canvas.innerHTML="";
        for(let i=0;i<size;i++){                            //array size 
        arr_heights[i]=(Math.floor(Math.random() * 2500) + 50)/4; // generates random nos b/w 50 and 2500
        divs[i]=document.createElement("div");
        canvas.appendChild(divs[i]);
        divs[i].style="height:"+(arr_heights[i])+"px;background-color:#43FCFF;width:5px;margin:1px;display:inline-block;";
        divs[i].setAttribute("title",`${arr_heights[i]}`);
    }
    
}
SizeSlider.oninput=function(){
    size=this.value;
    console.log(size);
    GenNewArray();
}

SpeedSlider.oninput=function(){
    delay=this.value;
}


function updater(item,height,col){
    
    item.style="height:"+height+"px;background-color:"+col+";width:5px;margin:1px;display:inline-block;";
    item.setAttribute("title",`${height}`);
    
}

function button_disable(){
    document.getElementById('bubble').classList.add('disable_link');
    NewArr.classList.add('disable_link');
    
}
function button_enable(){
    document.getElementById('bubble').classList.remove('disable_link');
    NewArr.classList.remove('disable_link');
    
}
function slider_disable(){
    SpeedSlider.disabled=true;
    SizeSlider.disabled=true;    
}
function slider_enable(){
    SpeedSlider.disabled=false;
    SizeSlider.disabled=false;
}



