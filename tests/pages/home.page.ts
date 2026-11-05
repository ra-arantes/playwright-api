import type { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly heading: Locator;
  readonly getStartedLink: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole("heading", { level: 1 });
    this.getStartedLink = page.getByRole("link", { name: "Get started" });
  }

  async goto(): Promise<void> {
    await this.page.goto("/");
  }
}
