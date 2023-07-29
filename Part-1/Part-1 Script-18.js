let countdown = 100;

while (countdown > 0) 
{
    countdown--;
    if(countdown == 0)
    {
     console.log("bomb triggered");
     break;
    }
    else if(countdown == 50)
    {
    console.log("bomb disarmed")
    break;
    }
 }