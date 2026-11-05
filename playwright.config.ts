import "dotenv/config";
import { defineConfig, devices } from "@playwright/test";

const isCI = Boolean(process.env.CI);

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 2 : undefined,
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }],
  ],
  use: {
    baseURL: process.env.BASE_URL ?? "https://restful-booker.herokuapp.com",
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      testMatch: "**/e2e/**/*.spec.ts",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      testMatch: "**/e2e/**/*.spec.ts",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      testMatch: "**/e2e/**/*.spec.ts",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "api",
      testMatch: "**/api/**/*.spec.ts",
      use: {
        baseURL:
          process.env.API_BASE_URL ?? "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
          Accept: "application/json",
        },
      },
    },
  ],
});
