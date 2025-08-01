// tests/example.spec.js
import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright'; // Import Allure

test('Browse to site', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  const screenshotBuffer = await page.screenshot();
  await allure.attachment('Login Page', screenshotBuffer, 'image/png');
});

test('Click on intro link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/.*intro/);
  const screenshotBuffer = await page.screenshot();
  await allure.attachment('Login Page', screenshotBuffer, 'image/png');
});