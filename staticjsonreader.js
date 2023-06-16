//Code reads from static JSON string
    const staticdata = '{"name": 1, "class": "A", "Availability": true}';
    const obj = JSON.parse(staticdata);
    document.getElementById("staticjson").innerHTML = "id: " + obj.name + ", class: " + obj.class + ", availability: " + obj.availability;