var ffmetadata = require("ffmetadata");
ffmetadata.setFfmpegPath("")
var wavPathArr = [];
let errNum = 0;
let successNum = 0;
function getSelectWavPath(){
    document.addEventListener('drop', (e) => {
        document.getElementById("alertWindow").innerHTML = "";
        wavPathArr = [];
        errNum = 0;
        successNum = 0;
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
        document.getElementById("alertWindow").innerHTML = "";
        errNum = 0;
        successNum = 0;
        for (let i = 0; i < wavPathArr.length; i++) {
          var data = {
            IKEY: (document.getElementById("myInput0").value + " " +document.getElementById("metadataoutput").value).toString(),
            ISBJ: (document.getElementById("myInput0").value + " " +document.getElementById("metadataoutput").value).toString(),
            };
          //   var data = {
          //       comment: (document.getElementById("metadataoutput").value).toString(),
          //       time_reference: "0"
          //     };
          // var options = {
          //   "BWF": true,
          // };
            ffmetadata.write(wavPathArr[i], data, function(err) {
                if (err) {
                  console.error("Error writing metadata", err);
                  errNum = errNum + 1;
                  document.getElementById("alertWindow").innerHTML += 
                  `<div class="alert alert-danger alert-dismissible fade show" role="alert">`
                  + wavPathArr[i] + `文件被占用，写入失败`
                  +`<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
                }
                else {
                  console.log("Data written");
                  successNum = successNum + 1;
                  document.getElementById("show").innerHTML = `共选择了` + wavPathArr.length + `个文件，成功` + successNum + `个文件，失败` + errNum + `个文件`;
                }
            }); 
        }
      });
}
getSelectWavPath();
export default wavPathArr;