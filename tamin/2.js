var first = 12
var second = 20
var bmm = 0
if (first>second){
    bmm=second
}
else{
    bmm=first
}
while (bmm >1){
    if (first % bmm == 0 && second% bmm == 0){
    console.log('bmm is ',bmm)
    break;
    }
    else{
        bmm -=1
        if (first % bmm ==0  && second % bmm ==0 ){
             console.log("bmm is ", bmm)
        }
    }
}
