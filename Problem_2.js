let grade = 55
let letter = ""

if(97<=grade && grade<=100){
    letter ="A+"
}
else if(93<=grade && grade<=96){
    letter = "A"
}
else if(90<=grade && grade<=92){
    letter = "A-"
}
else if(87<=grade && grade<=89){
    letter = "B+"
}
else if(83<=grade && grade<=86){
    letter = "B"
}
else if(80<=grade && grade<=82){
    letter = "B-"
}
else if(77<=grade && grade<=79){
    letter = "C+"
}
else if(73<=grade && grade<=76){
    letter = "C"
}
else if(70<=grade && grade<=72){
    letter = "C-"
}
else if(67<=grade && grade<=69){
    letter = "D+"
}
else if(63<=grade && grade<=66){
    letter = "D"
}
else if(60<=grade && grade<=62){
    letter = "D-"
}
else{
    letter = "F"
}

let text = ""


 switch(letter){
    case "A+":
    case "A": 
    case "A-": 
    case "B+":
    case "B":
    case "B-":
    case "C+":
     case "C": 
     case "C-":
     {
    text= `Your grade is ${grade} which corresponds to ${letter}. You passed!`
     }
     break
     case "D+":
     case "D":
     case "D-":
     case "F":
        {
     text = `Your grade is ${grade} which corresponds to ${letter}. You failed!`
        }
     break
     default: ""
     break

 }

console.log(text);