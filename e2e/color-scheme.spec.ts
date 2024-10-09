import { expect, test } from '@playwright/test';

test('can toggle color theme', async ({ page }) => {
  await page.goto('/');

  const body = page.locator('css=body');
  const colorSchemeButton = page
    .getByTestId('app-layout')
    .getByLabel('Color Scheme');

  await expect(body).not.toHaveClass('dark');

  await colorSchemeButton.click();

  await expect(body).toHaveClass('dark');
});
