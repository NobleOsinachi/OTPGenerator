// import { expect } from 'chai';
// import otpGenerator from './otpGenerator';

describe('otpGenerator', () => {
    describe('generateOTP()', () => {
        it('should generate a 6-digit OTP', () => {
            const otp = otpGenerator.generateOTP();
            expect(otp).toMatch(/^\d{6}$/);
        });
    });
});


