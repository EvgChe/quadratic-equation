module.exports = function solveEquation(equation) {
var temp = equation.split(' ').join('').split('*x');
var a = parseInt(temp[0]);
var b = parseInt(temp[1].replace('^2', ''));
var c;
var x = [];
if(temp.length == 3){
    c = parseInt(temp[2]);
}
else{
    c = 0;
}

  var x_1, x_2;

  var Discr =Math.pow(b,2)-(4*a*c);

  if (Discr < 0) {
    return NaN;
  }
  else if (Discr == 0) {
    x_1 = x_2 = Math.round(-b/(2*a));

  }
  else {
    x_1 = Math.round ((-b + Math.sqrt(Discr))/(2*a));
    x_2 = Math.round ((-b - Math.sqrt(Discr))/(2*a));

  }

  x_1 > x_2 ? x.push(x_2) : x.push(x_1);
  x_1 > x_2 ? x.push(x_1) : x.push(x_2);

  return x;
}
