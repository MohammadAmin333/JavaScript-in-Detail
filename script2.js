function CheckAge(age){
    if (age < 18){
        throw new Error("User must 18 years old");
    }
    console.log("Age Is Valid",age);
}
try {
    CheckAge(15);
}
catch(error){
console.error("Error",error.message);
}
finally{
console.log("Age Validation Compleate");
}