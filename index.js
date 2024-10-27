import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    {
        message : "Enter the URL",
        name : "URL",
    },
]) .then((answers) => {
    const userUrl=answers.URL;
    var qr_yt=qr.image(userUrl);
    qr_yt.pipe(fs.createWriteStream("qr_youtube.png"));
    
}) .catch((error) => {
    if(error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
    } else {
        console.log(error);
    }
})