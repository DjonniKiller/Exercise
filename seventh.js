const str = '123456789'; // Сумма чисел (reduce())

console.log([...str].reduce((Sum, curr) => {
	return Sum += parseInt(curr);
}, 0));
