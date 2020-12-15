const franc = require("franc");
const langs = require("langs");
const input = process.argv[2];
const langcode = franc(input);

if(langcode==="und"){
    console.log("Sorry, couldn't figure it out! try something else.")
}else{
    const lang =langs.where("3",langcode);
    console.log("Our best guess is: "+lang.name);
}
