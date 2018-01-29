const add = (a, b) => a + b

test('it can and 2 + 5 and equals 7', () => {
    expect(add(2,5)).toBe(7)
})


test('it can add "10" + "5" and equals 15', () => {
    expect(add('10', '5')).toBe(15)
})

//--------------------------------------