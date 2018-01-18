const similar = require('string-similarity')

//module to search a question and return answer from a json file
module.exports.search = function(echo , config)
{
   var answer = ""
   for(var i=0 ; i<config.test.length; i++){
    var similarity = similar.compareTwoStrings(echo, config.test[i].question)
       if(echo === config.test[i].question || similarity>= 0.7){
       answer = config.test[i]['answer'];
      }
   }

   return answer
}

