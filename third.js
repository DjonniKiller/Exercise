let data = [1, 2, 3, false, undefined, 4, undefined, false, undefined];

console.log(data.filter((arg)=>{if (typeof(arg)==="number") return arg;}));

//Сделать через filter, но проще