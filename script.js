try{
    var num = 10;
    var result = num / 0;
    console.log("Result", result);

    if (result === Infinity) {
         throw new Error("Division by 0 is not alloud");
    }
}
catch(error){
    console.error("An error occurred",error.message);
}
finally{
    console.log("Max")
}
