var daysleft = 205; 
function countdown(daysleft){
    if(daysleft > 30){
        console.log(daysleft + " days left until my birthday... :C ");
    }
    else if(daysleft > 5){
        console.log(daysleft + " until my birthday... :D ");
    }
    else{
        console.log(daysleft + " DAYS UNTIL MY BIRTHDAY!!! AHHHH!!");
    }
}
countdown(daysleft)