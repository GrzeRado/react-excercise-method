const add = (a, b) => {
    if (
        typeof Number(a) !== 'number'
        ||
        typeof Number(b) !== 'number'
    ) return NaN

    return Number(a) + Number(b)
}

if (add(2, 3) !== 5) throw Error('2 + 3 not equals 5')
if (add(5, 10) !== 15) throw Error('5 + 10 not equals 5')
if (add('5', '10') !== 15) throw Error('"5" + "10" not equals 5')
if (typeof add('ala ma', 'kota')  !== 'number') throw Error('"ala ma" + "kota" not equals NaN')
if (typeof add({}, {})  !== 'number') throw Error('{} + {} not equals NaN')
if (typeof add([], [])  !== 'number') throw Error('[] + [] not equals NaN')