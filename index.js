const dob = document.getElementById('dob');
const luckyNum = document.getElementById('lucky-number');
const checkBtn = document.getElementById('check');
const msg = document.getElementById('msg');
const error = document.getElementById('error');

checkBtn.addEventListener('click',() => {
    msg.innerText = '';
    error.innerText = '';
    isLucky(dob.value, luckyNum.value);
})

function isLucky(dob, luckyNum){
    if(dob && luckyNum){
        const sum = findSum(dob)
        if(sum%luckyNum == 0){
            msg.innerText = "Your birthday is lucky 🎉";
        }else{
            msg.innerText = "Your birthday is not lucky 😔";
        }
    }else{
        error.innerText = 'Please enter both the fields';
    }
    
}

function findSum(dob){
    dob = dob.replaceAll('-','');
    let sum = 0;
    for(let num of dob){
        sum += Number(num);
    }
    
    return sum;
}