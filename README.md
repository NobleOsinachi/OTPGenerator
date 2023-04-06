# One Time Password Generator

## Introduction

otpGenerator is a simple TypeScript code that generates a 6-digit One Time Password (OTP) using a mathematical algorithm. This OTP can be used as an additional layer of security for various online accounts and services that require two-factor authentication.

## Installation

To use this code, follow these steps:

1. Clone this repository to your local machine using `https://github.com/NobleOsinachi/otpGenerator.git`
2. Install the necessary dependencies by running `npm install`
3. Compile the TypeScript code by running `tsc`
4. Run the generated JavaScript code by running `node index.js`

To use otpGenerator, you need to have Node.js installed on your machine. Once you have Node.js installed, you can clone the repo or download the zip file from the Github page.

After downloading the repo, navigate to the root folder and run the following command in your terminal to install the necessary dependencies:

Copy code

`npm install`

Usage
-----

To generate a 6-digit OTP, you can use the `generateOTP()` function provided in the `otp-generator.ts` file. This function takes in no arguments and returns a 6-digit OTP as a string.

Example:


```typescript
import { generateOTP } from './otpGenerator';

const otp: string = generateOTP();
console.log(`Your One Time Password is ${otp}`);
```

Testing
-------

The `otpGenerator` repo includes a test file, `otp-generator.test.ts`, which tests the `generateOTP()` function using Jest. To run the tests, navigate to the root folder of the repo and run the following command in your terminal:

```bash
npm run test
```

## Contributing

If you would like to contribute to otpGenerator, you can submit a pull request on Github. Before submitting a pull request, please ensure that your code follows the existing coding standards and includes appropriate tests.

If you find a bug or would like to contribute to this code, please open an issue or submit a pull request.

If you would like to contribute to otpGenerator, you can submit a pull request on Github. Before submitting a pull request, please ensure that your code follows the existing coding standards and includes appropriate tests.

## License

otpGenerator is licensed under the MIT license. Please see the `LICENSE` file for more details.

## Contact

If you have any questions or issues with otpGenerator, please feel free to contact the developer by opening an issue on Github.
