function printRange(start,end,skip){
    if(end === undefined){
        end = start; 
        start = 0; 
        skip = 1; 
    }
    else if(skip === undefined){
        skip = 1; 
    }
    for(start; start < end; start += skip){
        console.log(start); 
    }
}