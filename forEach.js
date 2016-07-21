function iterativeLog(array){
  array.forEach((element,index) => {
    console.log(`${index}: ${element}`)
  })
}


function iterate(callback){
  stones_array = ['Mick', 'Keith', 'Ian', 'Charlie','Brian','Bill']
  stones_array.forEach(callback)
  return stones_array
}

function doToArray(array, callback){
  array.forEach(callback)
}