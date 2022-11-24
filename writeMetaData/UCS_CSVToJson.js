const readcsv = require ('readcsv');
const UCS_listCSV = 'C:\\Users\\mengqingjie1\\AppData\\Roaming\\REAPER\\Scripts\\zaibuyidao Scripts\\Various\\UCS\\UCS_list.csv';
var UCS_list;

readcsv (true, UCS_listCSV, (err, data) => {
  if (err) {
    console.log (err);
    return;
  }
  console.log (data);
});

// setTimeout(() => {
//     fs.writeFile( './metaDataCSV/UCS_list.json', JSON.stringify(UCS_list),(err) => { 
//         if (err) 
//           console.log(err); 
//         else { 
//           console.log("File written successfully\n"); 
//           console.log("The written has the following contents:"); 
//           console.log(fs.readFileSync("./metaDataCSV/UCS_list.json", "utf8")); 
//         }
//     })
// }, 3000);


 