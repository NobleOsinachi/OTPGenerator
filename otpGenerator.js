"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otpGenerator = void 0;
class otpGenerator {
    constructor() {
    }
    static generateOTP() {
        // Define the possible characters for the OTP
        const chars = '0123456789';
        // Define the length of the OTP
        const len = 6;
        let otp = '';
        // Generate the OTP
        for (let i = 0; i < len; i++) {
            otp += chars[Math.floor(Math.random() * chars.length)];
        }
        return otp;
    }
    new() {
        return otpGenerator.generateOTP();
    }
}
exports.otpGenerator = otpGenerator;
