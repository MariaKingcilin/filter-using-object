const kings=[
{
	name:"Mariya",
	age:26
},
{
	name:"Anto",
	age:23
},
{
	name:"Sathish",
	age:21
},
{
	name:"mariya",
	age:27
}
];
let a=kings.filter(function(f)
{
	return f.age>25;
});
console.log(a);

