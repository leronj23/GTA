var arg1 = process.argv[2];
var arg2 = process.argv[3];

if( arg1 === arg2){
    console.log(true)
}
else{
    console.log(false)
}

if ((arg1%7) === 0 && (arg2%7) === 0) {
    console.log(true)
}
else{
    console.log(false)
}