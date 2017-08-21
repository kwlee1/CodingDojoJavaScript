var days = 30; 
function doubles(days){
    money = .01
    for(var i = 1; i < days; i++){
        money = money * 2; 
    }
    console.log(money); 
}
doubles(days)
// Reward after 30 days was $5,368,709.12. 

function daystill10k(days){
    money = .005
    // used .005 to account for first day being 0.01, not an issue in the doubles function because I used i < days as the condition
    for(var i = 1; money < 10000; i++){
        // used money < 10000 as conditional to end the for loop
        // console.log(i); 
        money = money * 2;
        // console.log(money);
        // used the console.log(i) and the console.log(money) to track my output but commented them out for the final function
    }
    console.log(i - 1);
    // since I used a conditional rather than a break I still need to account for the last increment for the i and use minus 1 to get that original value 
}
// Cleaner version without all the comments below
function daystill10k(days){
    money = .005
    for(var i = 1; money < 10000; i++){
        money = money * 2; 
    }
    console.log(i-1); 
}
// Ran the same code with 1000000000 instead of 100000 and got 38 days. 
// Checked 38 days with original function doubles and got 1,374,389,534.72. 
// Ran the same code with Infinity instead of 100000 and got 1032 days. 
// Checked 1032 days with original function doubles and got output Infinity. 


