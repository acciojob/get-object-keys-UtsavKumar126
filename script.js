//your JS code here. If required.
function  Student(name){
	this.name=name;
}
Student.prototype.getKeys= function(){
	let ans=[];
	for(let i in this){
	if (this.hasOwnProperty(i)) {
		ans.push(i);
	}
}
	return ans;
}