var slaying = true;
var youHit = Math.floor(Math.random() *2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying){
    if(youHit){
        console.log("Congrarulations, you hit the dragon");
        totalDamage += damageThisRound;
        if(totalDamage>=4){
            console.log("you slew the dragon");
            slaying = false;
        }
        else{
            youHit = Math.floor(Math.random() *2);
        }
    }
    else{
        console.log("Dargon defeated you!");
        slaying = false;
    }
    
}
