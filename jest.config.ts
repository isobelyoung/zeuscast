export {};
module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        'src/components/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!**/vendor/**',
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform: {
        '.(ts|tsx)': 'ts-jest',
    },
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/coverage',
        'package.json',
        'package-lock.json',
        'reportWebVitals.ts',
        'setupTests.ts',
        'index.tsx',
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(scss|css|less)$': 'identity-obj-proxy',
    },
};
