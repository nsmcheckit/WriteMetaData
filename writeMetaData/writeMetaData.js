import wavPathArr from "./getSelectWavPath";
var ffmetadata = require("ffmetadata");
for (let i = 0; i < wavPathArr.length; i++) {
var data = {
    artist: document.getElementById("metadataoutput").value,
  };
  ffmetadata.write(wavPathArr[i], data, function(err) {
      if (err) console.error("Error writing metadata", err);
      else console.log("Data written");
  });
  console.log("2");
}
