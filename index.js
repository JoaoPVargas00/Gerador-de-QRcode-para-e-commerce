import prompt from "prompt";

import promptSchemaMain from "./prompts-schema/prompt-main.js"; 

import createQRCode from "./services/qr-code/create.js";

import createPassword from "./services/qr-code/password/create.js";

async function main() {

  prompt.get(PromptSchemaMain, async (err, choose) => {
    if (err) console.log(err);
    
    if(choose.select == 1) await createQRCode();
    if(choose.select == 2) await createPassword();
    });

    prompt.start();
}

main();
