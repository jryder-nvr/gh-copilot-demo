import {describe, it, } from 'mocha';
import { expect } from 'chai';

import { validateDate, validateIPv6, validateGUID } from '../utils/validators';

//Write some tests for the validateDate function; make it as thorough as possible, testing all edge cases and whatnot.
describe('validateDate', () => {
  it('should return a valid Date object for a valid date string', () => {
    const result = validateDate('31/12/2020');
    expect(result).to.be.instanceOf(Date);
    expect(result?.getDate()).to.equal(31);
    expect(result?.getMonth()).to.equal(11);
    expect(result?.getFullYear()).to.equal(2020);
  });

  it('should return null for an invalid date string', () => {
    const result = validateDate('31/02/2020');
    expect(result).to.be.null;
  });

  it('should return null for a date string in an invalid format', () => {
    const result = validateDate('2020/12/31');
    expect(result).to.be.null;
  });

  it('should return null for a non-date string', () => {
    const result = validateDate('Hello World');
    expect(result).to.be.null;
  });
});

//Write some tests for the validateGUID function; make it as thorough as possible, testing all edge cases and whatnot.
describe('validateGUID', () => {
  it('should return true for a valid GUID', () => {
    const result = validateGUID('123e4567-e89b-12d3-a456-426614174000');
    expect(result).to.be.true;
  });

  it('should return false for an invalid GUID with incorrect format', () => {
    const result = validateGUID('123e4567-e89b-12d3-a456-42661417400Z');
    expect(result).to.be.false;
  });

  it('should return false for a GUID with incorrect length', () => {
    const result = validateGUID('123e4567-e89b-12d3-a456-42661417');
    expect(result).to.be.false;
  });

  it('should return false for a non-GUID string', () => {
    const result = validateGUID('Hello World');
    expect(result).to.be.false;
  });
}
);

//Write some tests for the validateIPv6 function; make it as thorough as possible, testing all edge cases and whatnot.
describe('validateIPv6', () => {
  it('should return true for a valid IPv6 address', () => {
    const result = validateIPv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334');
    expect(result).to.be.true;
  });

  it('should return false for an invalid IPv6 address with incorrect format', () => {
    const result = validateIPv6('2001:0db8:85a3::8a2e:0370:7334::');
    expect(result).to.be.false;
  });

  it('should return false for an IPv6 address with incorrect length', () => {
    const result = validateIPv6('2001:0db8:85a3::8a2e:0370');
    expect(result).to.be.false;
  });

  it('should return false for a non-IPv6 string', () => {
    const result = validateIPv6('Hello World');
    expect(result).to.be.false;
  });
}
);