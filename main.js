
 function cardAt(n){
    let numCard =['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A']; 
    let num,checkCard,mainCard;
    if(n<0||n>52){
        console.log("Error number Card!!!");
        return;
    }
    else if(n>=0&&n<52){
      checkCard=n;
      num=n/13;
      if(num>=0&&num<1){
           //C
           console.log(numCard[checkCard]+'C');
           return;
      }
      else if(num>=1&&num<2){
          //D
        console.log(numCard[checkCard-13]+'D');
        return;
    }
    else if(num>=2&&num<3){
          //H
        console.log(numCard[checkCard-26]+'H');
        return;
    }
    else  if(num>=3&&num<1){
          //S
        console.log(numCard[checkCard-39]+'S');
        return;
      }
   }
}
//test call function 
cardAt(35)
cardAt(60)
cardAt(0);
cardAt(1) 
cardAt(34)
