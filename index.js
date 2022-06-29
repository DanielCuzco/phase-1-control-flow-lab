function scuberGreetingForFeet(feet){
  // Write your code here!
  let ride;
  if( feet < 400) {
    ride = "This one is on me!";
    return ride 
  }
  else if(feet >= 400 && feet <= 2000) {
    ride = "That will be twenty bucks.";
    return ride;
  }
   else if(feet > 2000 && feet <= 2500) {
    ride = "I will gladly take your thirty bucks.";
    return ride;
  }
  else(feet > 2500) 
    ride = "No can do."
    return ride;



}

function ternaryCheckCity(city){
  // if(city === "NYC") {
    // return "Ok, sounds good.";
  // }
    // else{
      // return "No go.";
    // }
    return (city === "NYC") ? "Ok, sounds good." : "No go."


  // Write your code here!
}

function switchOnCharmFromTip(tipString) {
  switch(tipString) {
    case "generous":
      return "Thank you so much."
      break;
    case "not as generous":
      return "Thank you."
      break;
    default:
      return "Bye."
      break;

    
    }

}