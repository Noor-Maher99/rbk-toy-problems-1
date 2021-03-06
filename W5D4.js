function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

/*
1-write the the filter function
*/

function filter(array,predicate) {
  var acc=[]
  each(array,function(element){
  	if(predicate(element)){
  		acc.push(element)
  	}
  });
  return acc
}

/*
2-write the the new version of reduce function
*/

function reduce(array,f,start) {
  var acc=start;
   each(array,function(element){
   	acc=f(acc,element);

   });
return acc;
}
