let row=6;
let col=8;
let seatNumList=[];
let price=document.getElementById("movie");
let count=document.getElementById("count");
let costs=document.getElementById("costs");



let booking=(event,i,j)=>{
    if(event.target.classList.contains("seat")){
        event.target.classList.replace("seat","occupied");
        seatNumList.push(i*8+j+1);
    }else{
        event.target.classList.replace("occupied","seat");
        let idx=seatNumList.indexOf(i*8+j+1)
        seatNumList.splice(idx,1);
    }
    count.innerHTML=seatNumList.length;
    costs.innerHTML=seatNumList.length*price.value;
}

let seatContainer=document.getElementsByClassName("seatContainer");
let screen=document.getElementsByClassName("screen");

for(let i=0; i<=row; i++){
    let div=document.createElement("div");
        div.classList.add("row")
    for(let j=0; j<col; j++){
        let span=document.createElement("span");
        span.classList.add("seat");
        div.appendChild(span);
        span.addEventListener("click",(event)=>booking(event,i,j));
    }
    seatContainer[0].insertBefore(div,screen[0].nextSibling); //시트콘텐츠(부모) 뒤에 집어넣는데, div태그를 screen안의 시블링 관계(텍스트)의 앞에 넣는다.
    // screen.parentNode.insertBefore(div,screen[0].nextSibling);

}

let movie=document.getElementById("movie");
let getMovie=(event)=>{
    let movietitle=event.target.value
}
movie.addEventListener("change", getMovie);

