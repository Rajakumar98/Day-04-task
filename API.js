//XML-HTTP REQUEST
//4 steps

//1st step: creat a XHR object
var request = new XMLHttpRequest();

//2nd step: API URL
request.open("GET","https://restcountries.com/v2/all");

//3rd step: establishing the bridge
request.send();

//4th setp: once the data successfully received from server
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
}