function slots(quarters){
    //Just change the 0 in the while loop to set the amount the players is willing to leave with. 
    while(quarters > 0){
        quarters--; 
        if(Math.random() < 0.01){
            quarters = quarters + Math.floor(Math.random()*50 + 51); 
        }
        console.log(quarters);  
    }
}