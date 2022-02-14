var n=28
var sum = 0
for(var i = 1; i<n; i++){
    if(n % i == 0){
        sum=sum+i
    }
}
if (n==sum){
    console.log("add kamel hast ")
}
else{
    console.log("add kamel nist")
}