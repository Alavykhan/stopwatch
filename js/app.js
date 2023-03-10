let watchTime = 0;
let tenthTime = 0;
const outputSecond = document.getElementById('watch-count');
const outputTenth= document.getElementById('tenth');
let Interval = 0;

document.getElementById('btn-start').addEventListener('click', ()=>{
    clearInterval(Interval);
    Interval = setInterval(setTime, 10);
})

document.getElementById('btn-stop').addEventListener('click', ()=>{
    clearInterval(Interval);
})

document.getElementById('btn-restart').addEventListener('click', ()=>{
    clearInterval(Interval);
    watchTime ='00';
    tenthTime = '00';
    outputSecond.innerHTML = watchTime;
    outputTenth.innerHTML = tenthTime;
})

function setTime(){
    tenthTime++;
    if(tenthTime <= 9){
        outputTenth.innerHTML ='0' + tenthTime;
    }else if (tenthTime >9){
        outputTenth.innerHTML = tenthTime;
    }else if(tenthTime >99){
        watchTime ++;
        outputSecond.innerHTML = '0' + watchTime;
        tenthTime = 0;
        outputTenth.innerHTML = '0' + tenthTime;
    }else if( watchTime > 9){
        outputSecond.innerHTML = watchTime;
    }
}