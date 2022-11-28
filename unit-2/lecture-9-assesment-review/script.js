function argFunc(x, y, z){
    console.log(arguments[0]);
}

function argFuncNoArg(){
  
  console.log(arguments[0]);
}

// argFunc(1, 2, 3)
// argFuncNoArg(4, 5, 6)
argFunc(1, 2, 3, 4, 5, 6)
