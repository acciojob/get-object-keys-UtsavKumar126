//your JS code here. If required.
let student={
	name:"Utsav"
}
Object.prototype.getKeys= function(){
	let ans=[];
	for(let i in this){
	if (this.hasOwnProperty(i)) {
		ans.push(i);
	}
}
	return ans;
}