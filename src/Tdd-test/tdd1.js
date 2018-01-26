const add = (a,b)=> a+b // it can be imported

if( add(2,2) !== 4 ) throw Error('Add cant add 2 + 2!')

if( add(10,12) !== 22 ) throw Error('Add cant add 10 + 12!')

if( add('11','12') !== 23 ) throw Error('Add cant add strings!')