const {log,clear} = console




const run = (word) => {
  
  let result = {}

  word.split('').forEach(o => {
    result[o] = (typeof result[o] === 'undefined') ? 1 : result[o] + 1;
  });

  log(result)

}


clear();
run('555555');