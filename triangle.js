let triangle = function(side1,side2,side3){
    if(side1===side2 && side2===side3)
        return "Equilateral Triangle";
    
    else if(side1===side2 || side2===side3 || side3===side1)
        return "Isosceles Triangle";
    
    else
        return "Scalene Triangle";
}

let result = triangle(5,5,6);
console.log(result);