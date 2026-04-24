import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    [
      'playwright-qase-reporter',
      {
        mode: 'testops',
        testops: {
          api: {
            token: process.env.QASE_API_TOKEN,
          },
          project: 'YOUR_PROJECT_CODE',
        },
      },
    ],
  ],
});