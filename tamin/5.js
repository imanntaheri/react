var a= 50
var b =10
var c = 5
var x1=0
var x2=0
var delta = b*b-4*a*c
if(delta>0) {
    x1=(-b+ Math.sqrt(delta) / (2*a))
    x2=(-b- Math.sqrt(delta) / (2*a))
    console.log("x1:",x1)
    console.log("x2:",x2)
    }
    else if(delta==0) {
        x1=-b/(2*a);
        console.log("x1:",x1)
    }
    else if(delta<0){
        console.log("rishe nadard!")
    }