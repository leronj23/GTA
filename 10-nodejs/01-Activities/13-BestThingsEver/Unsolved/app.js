var fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf8', function(error, data){
    if(error){
        console.log(error)
    }

   var fixedData = data.split(",");

    for (var i in fixedData){
        console.log(fixedData[i]);
    }

    
})