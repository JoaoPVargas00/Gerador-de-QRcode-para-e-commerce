async function permittedCharacteres(){
    let permitted = [];
}

if(process.env.UPPERCASE_LETTERS === "true"){
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
}

if (process.envLOWERCASE_LETTERS === "true"){
    permitted.push(..."abcdefghijklmnopqrstuvxwyz");
}

if (process.envNUMBERS === "true"){
    permitted.push(..."0123456789");
}

if (process.envSPECIAL_CHARACTERES === "true"){
    permitted.push(..."!#@$%&*()");
}

return permitted;

export default permittedCharacteres;