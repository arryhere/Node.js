const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, '05-00_file1.txt'), 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(result);
        const first = result;
        fs.readFile(path.join(__dirname, '05-00_file2.txt'), 'utf-8', (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(result);
                const second = result;
                fs.writeFile(path.join(__dirname, '05-00_file3.txt'), ``, (err, result)=>{});
                fs.writeFile(path.join(__dirname, '05-00_file3.txt'), `${first}\n${second}\n`, {flag:'a'}, (err, result)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log(result);
                    }
                });
            }
        })
    }
})

// pls dont do this kind of callback hell :)