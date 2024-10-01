import { expect, it } from 'vitest';

it('should match snapshot', () => {
    expect({ a: 1, b: 2 }).toMatchSnapshot();
});

it('should match snapshot v2', () => {
    const result = 'hello'.toUpperCase();
    expect(result).toMatchSnapshot();
});

it('should match inline snapshot', () => {
    expect({ a: 1, b: 2 }).toMatchInlineSnapshot(`
      {
        "a": 1,
        "b": 2,
      }
    `);
});