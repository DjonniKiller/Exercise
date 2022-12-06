const str = 'Hello my little word, dab, dab';

console.log([...str].reduce((Amount, char) => 
	Amount += char === 'l'
, 0));
