let grading = function(score){
    let p = parseInt(score/10);
    switch(p){
        case 10:
        case 9:
            console.log("S Grade");
            break;
        case 8:
            console.log("A Grade");
            break;
        case 7:
            console.log("B Grade");
            break;
        case 6:
            console.log("C Grade");
            break;
        case 5:
            console.log("D Grade");
            break;
        case 4:
            console.log("E Grade");
            break;
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("Student has failed");
            break;
        default:
            console.log("Invalid Marks");
            break; 
    }
}
score = 123;
grading(score);
