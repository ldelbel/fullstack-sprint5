module.exports = {
  testPathIgnorePatterns: ["/node_modules"],
  setupFilesAfterEnv: [
    "<rootDir>/src/test/setupTests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper:{"\\.(css|scss)$": "<rootDir>/src/test/__mocks__/styleMock.ts"},
  testEnvironment: 'jsdom'
};
