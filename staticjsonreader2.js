//Code attempting to read files from external JSON file, based on the js script that reads a static string. Incomplete, non-functioning.


fetch("staticjson.json")
.then(response => response.json())
.then(data => showinfo(data));

function showinfo(data) {

}




const staticdata = '{"name": 1, "class": "A", "Availability": true}';
const obj = JSON.parse(extdata);
document.getElementById("staticjson").innerHTML = "id: " + obj.name + ", class: " + obj.class + ", availability: " + obj.availability;



