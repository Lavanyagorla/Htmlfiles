
  var a = 12, b = 3;
  var add, sub, mul, div, mod;
   add = a+b; //addition of 3 and 12
   sub = a-b; //subtract 3 from 12
   mul = a*b; //Multiplying both
   div = a/b; //dividing 12 by 3 (number of times)
   mod = a%b; //calculation the remainder

   document.getElementById("add").innerHTML = "Addition of " +a +' and ' +b +" is = " + add;
   document.getElementById("sub").innerHTML = "Subtraction of " +a +' and ' +b +" is = " + sub;
   document.getElementById("mul").innerHTML = "Multiplication of " +a +' and ' +b +" is = "+ mul;
   document.getElementById("div").innerHTML = "Division of " +a +' and ' +b +" is = " +  div;
   document.getElementById("mod").innerHTML = "Modulus of " +a +' and ' +b +" is = " +  mod;
