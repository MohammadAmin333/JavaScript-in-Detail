try{
    console.log("String the main try block")

    try{
        let num=10;
        console.log("Inner try block", num / 0);
        throw new Error("Custom error in inner try block");
    }
    catch(innererror){
        console.error("Console try error", innererror.message);
    }
    console.log("Continuing in the main try block after inner try...catch.");

   
}
catch (outerError) {
    console.log("Outer catch block Error", outerError.message);
}
finally {
console.log("Main finally block excused");
}

