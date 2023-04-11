var text = [{
    "id" : "1",
    "message": "Hi",
    "Name": "Surya"
},
{
    "id": "2",
    "message": "Hello",
    "Name": "Shark"
}];
for (var i = 0; i < text.length; i++){
    var obj = text[i];
    console.log(obj.id + " " + obj.message + " " + obj.Name); 
}

