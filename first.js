const obj = { city: 'Luhansk', job: 'LGPU' };

const addWorker = (arg) => {
    //arg.worker = 'Eugene';
    return {...arg, worker: 'Eugene'};
}

console.log(addWorker(obj)); //{ city: 'Luhansk', job: 'LGPU', worker: 'Eugene' }
console.log(obj); // { city: 'Luhansk', job: 'LGPU' } - Результат должен быть таким
