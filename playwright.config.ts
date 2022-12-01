import { devices } from "@playwright/test";
import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./src",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  reporter: "line",
  use: {
    headless: true,
    ignoreHTTPSErrors: true
  },
  webServer: {
    command: "yarn start",
    url: "http://localhost:4200",
    timeout: 120 * 1000,
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    }
  ]
};

export default config;
