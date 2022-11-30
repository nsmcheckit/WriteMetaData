import { USC_listJson } from '../metadataCSV/UCS_list.js';
const list1 = [];
var Category = "";
var SubCategory = "";
var list2 = [];
var list3 = [];
var metadata1 = []
var metadata2 = []
var metadata3 = [];
document.getElementById("metadata").innerHTML  = `<input id="metadataoutput" type="text" class="form-control" aria-label="Recipient's username" value= ""aria-describedby="button-addon2">
<button id="writeMetadata" class="btn btn-outline-secondary" type="button">Write Metadata</button>
<button id="reset" class="btn btn-outline-secondary" type="button">Reset</button>`;

document.getElementById("reset").addEventListener("click", function(e) {
    metadata1 = [];
    metadata2 = [];
    metadata3 = [];
    document.getElementById("metadataoutput").value = "";
});

function unique (arr) {
    return Array.from(new Set(arr))
  }

var listHTML1 = `<div id="listHTML1" class="btn-group-vertical" role="group" aria-label="Vertical button group">`;
for (let i = 0; i < USC_listJson.length; i++) {
    list1.push(USC_listJson[i]["Category"]);
}
for (let i = 0; i < list1.length; i++) {
    if (!listHTML1.includes(list1[i])) {
    listHTML1 +=
    `<button type="button" aria-pressed="true"
        style="width: 10rem">`
    + list1[i] 
    + `</button>`;
    }
};
listHTML1 += `</div>`;

document.getElementById("list1").innerHTML = listHTML1;
document.getElementById("list1").addEventListener("dblclick", function(e) {
    metadata1.push(e.target.innerHTML);
    document.getElementById("metadataoutput").value = unique(metadata1) + " " + unique(metadata2) + " " + unique(metadata3);
    console.log(document.getElementById("metadataoutput").value);
});
document.getElementById("list1").addEventListener("click", function(e) {
        if (e.target && e.target.nodeName == "BUTTON") {
            Category = e.target.innerHTML;
            var listHTML2 = ``;
            list2 = [];
            listHTML2 = `<div id="listHTML2" class="btn-group-vertical" role="group">`;
            for (let i = 0; i < USC_listJson.length; i++) {
                if (USC_listJson[i]["Category"] == Category) {
                    //console.log(USC_listJson[i]["SubCategory"]);
                    list2.push(USC_listJson[i]["SubCategory"]);
                }
            }
            for (let i = 0; i < list2.length; i++) {
                if (!listHTML2.includes(list2[i])) {
                listHTML2 +=
                `<button type="button" aria-pressed="true"
                    style="width: 10rem">`
                + list2[i] 
                + `</button>`;
                }
            };
            listHTML2 += `</div>`;
            document.getElementById("list2").innerHTML = listHTML2;
            document.getElementById("list2").addEventListener("dblclick", function(e) {
                metadata2.push(e.target.innerHTML);
                document.getElementById("metadataoutput").value = unique(metadata1) + " " + unique(metadata2) + " " + unique(metadata3);
                console.log(document.getElementById("metadataoutput").value);
            });
            document.getElementById("list3").innerHTML = '';

            document.getElementById("list2").addEventListener("click", function(e) {
                if (e.target && e.target.nodeName == "BUTTON") {
                    SubCategory = e.target.innerHTML;
                    var listHTML3 = ``;
                    list3 = [];
                    listHTML3 = `<div id="listHTML3" class="btn-group-vertical" role="group" aria-label="Vertical button group">`;
                    for (let i = 0; i < USC_listJson.length; i++) {
                        if (USC_listJson[i]["Category"] == Category && USC_listJson[i]["SubCategory"] == SubCategory) {
                            //console.log(USC_listJson[i]["SubCategory"]);
                            list3 = (USC_listJson[i]["Synonyms - Comma Separated"]).split(",");
                        }
                    }
                    for (let i = 0; i < list3.length; i++) {
                        if (!listHTML3.includes(list3[i])) {
                        listHTML3 +=
                        `<button type="button" aria-pressed="true" 
                            style="width: 10rem">`
                        + list3[i] 
                        + `</button>`;
                        }
                    };
                    listHTML3 += `</div>`;
                    document.getElementById("list3").innerHTML = listHTML3;
                    document.getElementById("list3").addEventListener("dblclick", function(e) {
                        metadata3.push(e.target.innerHTML);
                        document.getElementById("metadataoutput").value = unique(metadata1) + " " + unique(metadata2) + " " + unique(metadata3);
                        console.log(document.getElementById("metadataoutput").value);
                    });
                    }
            });
            }
    });


$(document).ready(function(){
    $("#myInput1").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#listHTML1 button").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$(document).ready(function(){
    $("#myInput2").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#listHTML2 button").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$(document).ready(function(){
    $("#myInput3").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#listHTML3 button").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});