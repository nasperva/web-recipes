
//* 1. kullanıcıdan input almak için inquirer

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
        message: "URL'nizi girin: ",
        name: "URL",
  }])
  .then((answers) => {
    const url = answers.URL;
    //* qr-image npm ile kullanıcı inputunu QR'a çevir
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    //* kullanıcı inputunu txt içerisine al
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("Dosya kaydedildi.");
    });

  })



