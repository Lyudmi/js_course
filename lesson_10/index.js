const myAge = 20;
let name_year;

if(typeof(myAge) == "string" || myAge <0 )
  {
     console.log(`Пожалуйста, введите возраст цифрами > 0`);
  }
else{
 name_year = (myAge % 10 == 1 && myAge%100 != 11 ) ? 'год' : ((myAge%10 >= 2 && myAge%10 <= 4) && (myAge%100 < 11 ||  myAge%100 > 14)) ? 'года': 'лет';
    console.log (`Мой возраст ${myAge} ${name_year}`);
}