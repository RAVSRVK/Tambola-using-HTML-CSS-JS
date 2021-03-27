
// function buttonRandom(){
// var c = Math.ceil(Math.random()*10);
// document.querySelector(".rand").innerHTML=c;
// buttonRandom();
// }
var c=document.querySelector(".rand")
var d=document.querySelector("#fff")

function getRandom(min, max){
    s1=max-min+1;
    var a=Math.floor(Math.random()*s1)+min;
    return a;
}
function buttonAnimation(k){
    // var p="a"+k;
    // document.querySelector(".a"+k).style.display="block";
    var p=document.querySelector('.a'+k);    
    p.classList.add("pressed")
}
function createArray(start,end){
    let myArray=[];
    for(i=start;i<=end;i++){
        myArray.push(i);
    }
    return myArray;
}
let nums=createArray(1,90);
d.addEventListener('click', ()=>{
    if(nums.length == 0){
        c.innerText= "Game Over";
        return;
    }
let randIndex=getRandom(0,nums.length-1);
let randNum=nums[randIndex];
nums.splice(randIndex,1);
c.innerText= randNum;
buttonAnimation(randNum);
    // var m="a"+randNum;
    // document.querySelector(".a"+k).style.display="block";
    // m.classlist.add(".pressed");
}
);


function ne() {
    if(confirm("Are you sure")) document.location = 'index.html';


}
