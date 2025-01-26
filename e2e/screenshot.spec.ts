import { expect, test } from '@playwright/test';

test('메인 페이지', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test('사이프 소개 페이지', async ({ page }) => {
  await page.goto('/about', { waitUntil: 'networkidle' });

  await expect(page).toHaveScreenshot({
    fullPage: true,
    maxDiffPixelRatio: 0.2,
  });
});

test('사이퍼 모집 페이지', async ({ page }) => {
  await page.goto('/recruit', { waitUntil: 'networkidle' });

  await expect(page).toHaveScreenshot({
    fullPage: true,
    maxDiffPixelRatio: 0.2,
  });
});

test('사이퍼 소개 페이지', async ({ page }) => {
  await page.goto('/people', { waitUntil: 'networkidle' });

  await expect(page).toHaveScreenshot({
    fullPage: true,
    maxDiffPixelRatio: 0.2,
  });
});

test('사이퍼 활동 페이지', async ({ page }) => {
  await page.goto('/activity', { waitUntil: 'networkidle' });

  await expect(page).toHaveScreenshot({
    fullPage: true,
    maxDiffPixelRatio: 0.2,
  });
});
