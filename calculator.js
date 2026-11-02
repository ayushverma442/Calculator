let calculation=localStorage.getItem('calculation') || "";
calculate();
function updatecalculation(val){
    calculation += val;
    calculate();
    console.log(calculation);
    localStorage.setItem('calculation',calculation);
}
function calculate(){
    document.querySelector('.js-cal').innerHTML=` ${calculation}`;
}