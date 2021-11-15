// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('2468101 isPhoneNumber', () => {
    expect( functions.isPhoneNumber('2468101') ).toBe(false);
});
test('123456789 isPhoneNumber', () => {
    expect( functions.isPhoneNumber('123456789') ).toBe(false);
});
test('(619)444-8888 isPhoneNumber', () => {
    expect( functions.isPhoneNumber('(619)444-8888') ).toBe(true);
});
test('(812)321-7654 isPhoneNumber', () => {
    expect( functions.isPhoneNumber('(812)321-7654') ).toBe(true);
});


test('@gmail.com isEmail', () => {
    expect( functions.isEmail('@gmail.com') ).toBe(false);
});
test('google.com isEmail', () => {
    expect( functions.isEmail('google.com') ).toBe(false);
});
test('joe@gmail.com isEmail', () => {
    expect( functions.isEmail('joe@gmail.com') ).toBe(true);
});
test('joe@ucsd.edu isEmail', () => {
    expect( functions.isEmail('joe@ucsd.edu') ).toBe(true);
});


test('joe@ucsd.edu isStrongPassword', () => {
    expect( functions.isStrongPassword('joe@ucsd.edu') ).toBe(false);
});
test('wee isStrongPassword', () => {
    expect( functions.isStrongPassword('wee') ).toBe(false);
});
test('strong isStrongPassword', () => {
    expect( functions.isStrongPassword('strong') ).toBe(true);
});
test('password isStrongPassword', () => {
    expect( functions.isStrongPassword('password') ).toBe(true);
});


test('10/10 isDate', () => {
    expect( functions.isDate('10/10') ).toBe(false);
});
test('110/10/1985 isDate', () => {
    expect( functions.isDate('110/10/1985') ).toBe(false);
});
test('10/10/1010 isDate', () => {
    expect( functions.isDate('10/10/1010') ).toBe(true);
});
test('11/14/2021 isDate', () => {
    expect( functions.isDate('11/14/2021') ).toBe(true);
});


test('#HEXCOL isHexColor', () => {
    expect( functions.isHexColor('#HEXCOL') ).toBe(false);
});
test('2a852 isHexColor', () => {
    expect( functions.isHexColor('2a852') ).toBe(false);
});
test('#32a852 isHexColor', () => {
    expect( functions.isHexColor('#32a852') ).toBe(true);
});
test('#5c1950 isHexColor', () => {
    expect( functions.isHexColor('#5c1950') ).toBe(true);
});