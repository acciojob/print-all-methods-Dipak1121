//your JS code here. If required.
function allMethods() {
  //write your code here
	let obj = Math;
    return Object.getOwnPropertyNames(obj).filter(function(property) {
      return typeof obj[property] === 'function';
    });
    
  }
  
  console.log(getAllMethods(Math));
}

// alert(allMethods());
