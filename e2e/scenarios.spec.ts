import { test, expect } from '@playwright/test';

test.describe('Funduz Platform E2E Scenarios', () => {
  
  test('navigation and home page rendering', async ({ page }) => {
    await page.goto('/');
    
    // Check logo
    const logo = page.getByRole('link', { name: 'FUNDUZ' });
    await expect(logo).toBeVisible();
    
    // Check if main sections are visible
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('search functionality', async ({ page }) => {
    await page.goto('/');
    
    // Click search button to expand
    const searchBtn = page.locator('header button').filter({ has: page.locator('svg') }).first();
    await searchBtn.click();
    
    // Wait for input and type
    const searchInput = page.locator('header input[type="text"]');
    await searchInput.fill('Eco');
    await searchInput.press('Enter');
    
    // Check if URL changed to search
    await expect(page).toHaveURL(/.*search.*/);
    // Check if search query is in URL
    await expect(page).toHaveURL(/.*q=Eco.*/);
  });

  test('login and dashboard flow', async ({ page }) => {
    await page.goto('/login');
    
    // Fill login form
    await page.locator('#login-email').fill('test@example.com');
    await page.locator('#login-password').fill('password123');
    
    // Click submit button - using more flexible regex and filtering
    const submitBtn = page.locator('form button').filter({ hasText: /(Kirish|Войти|Login|system)/i }).first();
    await submitBtn.click();
    
    // Should redirect to home or dashboard
    await expect(page).toHaveURL(/\/(dashboard|profile)?$/);
    
    // Verify user is logged in (wait for header to update)
    await expect(page.locator('header')).toContainText(/test/i, { timeout: 10000 });
  });

  test('navigate to project and check donation button', async ({ page }) => {
    await page.goto('/explore');
    
    // Click on the first project card link - targeting /project/ URL specifically
    const projectLink = page.locator('a[href*="/project/"]').first();
    await projectLink.click();
    
    // Check if we are on a project page
    await expect(page).toHaveURL(/.*project\/\d+.*/);
    
    // Check for donation button - using partial match on links/buttons
    const donateBtn = page.locator('a, button').filter({ hasText: /(Qo'llab-quvvatlash|Поддержать|Back|Donate|Support)/i }).first();
    await expect(donateBtn).toBeVisible();
  });

});
