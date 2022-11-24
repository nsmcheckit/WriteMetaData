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
        console.log(wavPathArr);
        document.getElementById("show").innerHTML = `共选择了` + wavPathArr.length + `个文件`;
        console.log(ffmetadata.read(wavPathArr[0], function(err, data) {
          if (err) console.error("Error reading metadata", err);
          else console.log(data);
        }));
        
      });
      document.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      document.getElementById("writeMetadata").addEventListener("click", function(e) {
        for (let i = 0; i < wavPathArr.length; i++) {
          var data = {
            IKEY: (document.getElementById("metadataoutput").value).toString(),
            ISBJ: (document.getElementById("metadataoutput").value).toString(),
            };
          //   var data = {
          //       comment: (document.getElementById("metadataoutput").value).toString(),
          //       time_reference: "0"
          //     };
          // var options = {
          //   "BWF": true,
          // };
            ffmetadata.write(wavPathArr[i], data, function(err) {
                if (err) console.error("Error writing metadata", err);
                else console.log("Data written");
            });
  
          }
      });
}
getSelectWavPath();
export default wavPathArr;