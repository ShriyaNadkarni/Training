const endDate= "14 September 2023 9:44 am";

document.getElementById("end-date").innerText =endDate;
const inputs = document.querySelectorAll("input");
let intervalId;

function clock(){
    const end = new Date(endDate);
    const now = new Date();


    const diff = (end - now )/1000 ;

    
    if(diff <= 0) {
        clearInterval(intervalId);
        alert('Happy birthday Donkey! ');
        return;
    }
    console.log(diff);
    inputs[0].value= (Math.floor(diff/3600/24));
    inputs[1].value= (Math.floor(diff/3600) % 24);
    inputs[2].value = (Math.floor(diff / 60)% 60);
    inputs[3].value = (Math.floor(diff)% 60);
}
clock()

// 1 day = 24 hrs
// 1 hr  = 60 mins
// 60 mins = 3600 sec

intervalId = setInterval(() => {
    clock();
}, 1000);
