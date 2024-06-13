/*let sayHello = (firstName: String, lastName:String) =>
{
	console.log(`sayHello: Hello ${firstName} ${lastName}`);

}
sayHello("Functional","Programming");*/

const balances = [1, 10, 50];
const totaliser = (total, balance) => total + balance
const startingBalance = 0
const sum = balances.reduce(totaliser, startingBalance)
console.log(sum);
