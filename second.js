const str = 'Hello my little word, dab, dab';

console.log([...str].reduce((Amount, char) => {
	return Amount += char === 'l';
}, 0));
