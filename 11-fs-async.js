
const {readFile, writeFile} = require('fs');
console.log("start async");
readFile('./content/first.txt', 'utf8', (err, result) => {
  if(err){
    console.log(err);
    return null;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err,result)=>{
    if(err){
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/result-async.txt', 
      `Ohayo Nyan, Here is your order desu ${first} ${second}`
    , (err, result) => {
      if(err){
        console.log(err);
        return;
      }
      console.log("done async");
    })
  })
});
console.log('starting next task');
