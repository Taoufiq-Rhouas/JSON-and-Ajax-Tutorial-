// *****************-1-******************
		//object
		// var car = {
		// 	"name":"Saphira",
		// 	"model":"honda"
		// }
		// document.write("<h2>"+car.name+"</h2>");
		// //table
		// var favCar = ["Honda","Mercides"];
		// document.write("<h2>"+favCar[0]+"</h2>");
		// // *****************-2-******************
		// var cars = [
		// 	{
		// 		"name":"Saphira",
		// 		"model":"Honda"
		// 	},
		// 	{
		// 		"nam":"Massi",
		// 		"model":"Mercides"
		// 	}
        // ]
        
// *******************************************************
var xReq = new XMLHttpRequest();
xReq.open('GET','cars_js.json');
xReq.onload = function(){
    var xData = JSON.parse(xReq.responseText);
    document.write(xData[0].name);
}
xReq.send();