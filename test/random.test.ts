import Random from '../src/index';

const seed = 44444;

test('Checking first 10 values of next(32)', () => {
    const random = new Random(seed);

    expect(random.next(32)).toBe(808335106);
    expect(random.next(32)).toBe(-2071974800);
    expect(random.next(32)).toBe(1642053614);
    expect(random.next(32)).toBe(1266353680);
    expect(random.next(32)).toBe(-1031470248);
    expect(random.next(32)).toBe(60610945);
    expect(random.next(32)).toBe(693209954);
    expect(random.next(32)).toBe(-1626706672);
    expect(random.next(32)).toBe(-1343145554);
    expect(random.next(32)).toBe(-82294530);
});

test('Testing value of nextInt()', () => {
    const random = new Random(seed);

    expect(random.nextInt()).toBe(808335106);
});

test('Testing value of nextBoolean()', () => {
    const random = new Random(seed);

    expect(random.nextBoolean()).toBe(false);
});

test('Testing value of nextLong()', () => {
    const random = new Random(seed);

    expect(random.nextLong()).toBe(3471772842406718576n);
});

test('Testing value of nextDouble()', () => {
    const random = new Random(seed);

    expect(random.nextDouble()).toBe(0.18820519026489213);
});

test('Testing value of nextFloat()', () => {
    const random = new Random(seed);

    expect(random.nextFloat()).toBe(0.18820518);
});

test('Testing first 5 values of nextFloat()', () => {
    const random = new Random(seed);

    expect(random.nextFloat()).toBe(0.18820518);
    expect(random.nextFloat()).toBe(0.51758075);
    expect(random.nextFloat()).toBe(0.38232034);
    expect(random.nextFloat()).toBe(0.29484594);
    expect(random.nextFloat()).toBe(0.7598421);
});

test('Testing value of nextGaussian()', () => {
    const random = new Random(seed);

    expect(random.nextGaussian()).toBe(-1.1917916659685546);
});