const sum = require('./ejercicio');

test('1er caso', () => {
    expect(
        uniqueCombination(
            [
                2,1,1,0,0
            ]
        )
    ).toBe(13);
});
test('2de caso', () => {
    expect(
        uniqueCombination(
            [
                2,2,1,1,1
            ]
        )
    ).toBe(31);
});
test('3er caso', () => {
    expect(
        uniqueCombination(
            [
                2,2,2,1,1
            ]
        )
    ).toBe(31);
});
