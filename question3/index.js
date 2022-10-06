const fs = require('fs');

let logFiles = () => {
    let logs = "./logs";
    if (!fs.existsSync(logs)){
        fs.mkdirSync(logs);
    }
    for (let i = 0; i < 10; i++) {
        let log = logs + "/log" + i + ".txt";
        fs.writeFile(log, "Log file " + i,  (err) => {
            if (err) throw err;
            console.log("File" + i +  " is created successfully.");
        });
    }
}
logFiles();
