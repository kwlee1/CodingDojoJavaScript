function printNames(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i].first_name + " " + arr[i].last_name);
    }
}

function printNamesplus(arr){
    for(var i = 0; i < arr.length; i++){
        console.log((i + 1) + " - " + arr[i].first_name + " " + arr[i].last_name + " - " + (arr[i].first_name.length + arr[i].last_name.length));
    }
}
