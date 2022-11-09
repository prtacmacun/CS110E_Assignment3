let dec = 100;
let bin = "";

while(dec>0){
    
    if(dec%2==1){
        bin = "1" + bin
    }
    else{
        bin = "0" + bin
    }
    dec = Math.floor(dec/2);

}
console.log(bin);


