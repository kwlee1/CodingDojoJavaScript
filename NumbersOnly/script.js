function onlyNumbers(arr){
    var newArray = [];
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            newArray.push(arr[i]); 
        }
    }
    console.log(newArray)
    return newArray; 
}