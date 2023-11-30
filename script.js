//your JS code here. If required.
function  Student(name){
	this.name=name;
}
Student.prototype.getKeys()= function(){
	    let keys = [];
    
    // Iterate over the object properties and push keys to the 'keys' array
    for (let key in this) {
      // Check if the property is directly on the object (not in the prototype chain)
      if (this.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    
    return keys;
  };
}