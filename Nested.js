const myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
  //accessing property
  // document.getElementById("demo1").innerHTML = myObj.myCars.car2;
  document.getElementById("demo").innerHTML = myObj["myCars"]["car2"];