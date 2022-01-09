const fs =require('fs')

fs.writeFileSync('new.txt','')

fs.copyFileSync('new.txt','copied.txt')

fs.renameSync('new.txt','more-new.txt')

fs.readdir('./', (err, files) => {
    files.forEach(file => {
       console.log(file);
})});

fs.appendFileSync('copied.txt','this is a copied file')