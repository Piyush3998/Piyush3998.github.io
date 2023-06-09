
/*
//QUERRYSELECTOR TO SELECT ELEMENTS-->
const myHeading = document.querySelector("h1");
myHeading.textContent=mul(3,9,1998);

//CREATING A FUNCTION-->
function mul(num1,num2,num3){
    result= num1*num2*num3;
    return result;
}

//EVENT HANDLER-->
document.querySelector("html").addEventListener("click",()=>{
    alert("ouch! stop poking me");
});*/


//ADDING AN IMAGE CHANGER-->
const myImage=document.querySelector("img");

myImage.onclick=()=>{
    const mySrc=myImage.getAttribute("src");
    if(mySrc==="images/firefox-icon.png"){
        myImage.setAttribute("src","images/firefox2.png");}
    else{
        myImage.setAttribute("src","images/firefox-icon.png");
    }
};

//ADDING A PERSONALIZED WELCOME MESSAGE-->
let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");

function setUserName(){
    const myName=prompt("please enter your name.");
    localStorage.setItem("name",myName);
    myHeading.textContent=`Doraemon is cool, ${myName}!`;
}

//INITIALIZATION CODE-->
if (!localStorage.getItem("name")){
    setUserName();
}
else{
    const storedName=localStorage.getItem("name");
    myHeading.textContent=`Doraemon is cool, ${storedName}!`;
}

//ONCLICK EVENT HANDLER-->
myButton.onclick=()=>{
    setUserName();
}

//A LOOPED CONDITION BLOCK EXAMPLE-->
/*const select = document.querySelector("select");
const para = document.querySelector("p1");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;


  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}*/

//SWITCH AND CASE-->

const select= document.querySelector("select");
const para =document.querySelector("p2");

select.onchange=setTemperature;

function setTemperature(){
  const choice=select.value;

  switch (choice){
    case "hot":
      para.textContent="The temprature is hot right now. Take a water bottle to prevent dehydration.";
      break;

    case "warm":
      para.textContent="Temperature is warm. Good for a hangout.";
      break;

    case "cold":
      para.textContent="The temperature is cold. Should wear a jacket to stay warm.";
      break;

      case "freezing":
        para.textContent="The temperature is extrenly cold. Stay inside the house by the fireplace.";
        break;

      default:
        para.textContent="";

  }
}