'use strict';

var myObj = {
    "string": "Lenin",
    "number": 30,
    "boolean": true,
    "null": null,
    "object": {
        "foo": "bar"
    },
    "array": [
        1, 2, 3
    ],
    "birth":"1986-06-14",
    "func": "function () {return this.number;}"
};
document.getElementById("js-json-stringify").innerHTML = JSON.stringify(myObj);
for ( var key in myObj ) {
    document.getElementById("js-json-key-value").innerHTML += key + ' : ' + myObj[key] + ', ';
}

delete myObj.object;
for ( var key in myObj ) {
    document.getElementById("js-json-deleted").innerHTML += key + ' : ' + myObj[key] + ', ';
}
var parsed = JSON.parse(JSON.stringify(myObj), function (key, value) {
    if (key == "birth") {
        return new Date(value);
    } else {
        return value;
    }
});
document.getElementById("js-json-parse").innerHTML = parsed.birth;

parsed.func = eval("(" + parsed.func + ")");
document.getElementById("js-json-eval").innerHTML = parsed.func();
