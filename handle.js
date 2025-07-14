import permittedCharacteres from "./utils/permittedCharacters.js";

async function permittedCharacteres(){
    let permitted = [];
}

async function handle() {
    let characteres = [];
    let password = "";


const passwordLength = process.env.PASSWORD_LENGTH
characteres = await permittedCharacteres();

for (let i =0; i< passwordLength; i++){
    const index = Math.floor(Math.random() * characteres.length)
    password += characteres[index];
}
return  password;


}

export default handle;

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