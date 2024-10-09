import { expect, test } from '@playwright/test';

test.use({
  viewport: { width: 1920, height: 900 },
});

test('can fetch example files', async ({ page }) => {
  await page.goto('/');

  const fetchExmapleFilesButton = page.getByRole('button', {
    name: 'Open sample files',
  });

  await fetchExmapleFilesButton.click();

  for (let i = 1; i <= 10; i += 1) {
    const fileId = i.toString().length === 1 ? `00${i}` : `0${i}`;
    const fileName = `File-${fileId}`;
    const fileElement = page.getByText(fileName);

    await expect(fileElement).toBeVisible();
  }
});
