// Test script to verify referral links are working
import { getReferralUrl, getAllReferralLinks, getExchangeUrl, getEarningAppUrl } from '../src/utils/referrals.js';

console.log('Testing Referral System...\n');

// Test individual referral URLs with new structure
console.log('Exchange URLs:');
const exchangeKeys = ['coinbase', 'kraken', 'strike', 'swan', 'river'];
exchangeKeys.forEach(key => {
  const url = getExchangeUrl(key);
  console.log(`${key}: ${url}`);
});

console.log('\nEarning App URLs:');
const earningKeys = ['fold', 'zbd', 'yotta', 'lolli'];
earningKeys.forEach(key => {
  const url = getEarningAppUrl(key);
  console.log(`${key}: ${url}`);
});

console.log('\nAll Referral Links (flattened):');
const allLinks = getAllReferralLinks();
Object.entries(allLinks).forEach(([key, url]) => {
  console.log(`${key}: ${url}`);
});

console.log('\nReferral system test completed!');