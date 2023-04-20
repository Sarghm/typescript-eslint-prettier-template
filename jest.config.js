// THIS IS A JAVASCRIPT FILE SINCE IT IF WHERE TS, JEST WOULD ILLEGAL ACCESS TS-NODE
/** @type {import('jest').Config} */

const config = {
  preset: 'ts-jest',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
}

export default config
