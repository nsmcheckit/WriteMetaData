var ffmetadata = require("ffmetadata");
var wavPathArr = [];
function getSelectWavPath(){
    document.addEventListener('drop', (e) => {
        wavPathArr = [];
        e.preventDefault();
        e.stopPropagation();
    
        for (const f of e.dataTransfer.files) {
          wavPathArr.push(f.path);
        }
        for (let i = 0; i < wavPathArr.length; i++) {
          var data = {
              artist: "hhhhhh",
            };
            ffmetadata.write(wavPathArr[i], data, function(err) {
                if (err) console.error("Error writing metadata", err);
                else console.log("Data written");
            });
            console.log("2");
          }
          
        console.log(wavPathArr);
      });
      document.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
}
getSelectWavPath();
export default wavPathArr;