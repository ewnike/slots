function slots(quarters){
  while(quarters >0){
    if(Math.floor(Math.random()*100)==1){
      quarters= quarters +(Math.floor(Math.random()*51) + 50);
      return (quarters + " You Win!!");
    }
    else {
      quarters = quarters -1;
    }
  }
  return("you went bust!");
}

console.log(slots(50))
