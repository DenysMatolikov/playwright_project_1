import { test, expect } from '@playwright/test';
const { loginToLinkedIn, searchOnLinkedIn } = require('../helpers/playwrightHelpers');
const SELECTORS = require('../helpers/linkedinSelectors');

test('Search results are visible after performing search', async ({ page }) => {
  await loginToLinkedIn(page);

  // Type the search query in the search box and press Enter
  await searchOnLinkedIn(page, 'Playwright');
  await page.waitForSelector(SELECTORS.SEARCH_RESULTS);

  // Check if the search results page is loading
  console.log('Check if the search results page is loading');
  const areSearchResultsVisible = await page.isVisible(SELECTORS.SEARCH_RESULTS);
  expect(areSearchResultsVisible).toBe(true, 'Search results are not visible');
});
