let prime = function(start,end){ 
    for(let i=start;i<=end;i++){
        for(let j=2;j<i;j++){
            if(i%j==0){
                break;
            }
            else if(j==i-1){
                let fact = 1;
                for(let k=1;k<=i;k++){
                    fact = fact * k;
                }
                console.log(`Factorial of ${i} is ${fact}`);
            }   
        }
    } 
}
prime(1,100);