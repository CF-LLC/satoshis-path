// Test script to verify referral links are working
import { getReferralUrl, getAllReferralLinks } from '../src/utils/referrals.js';

console.log('Testing Referral System...\n');

// Test individual referral URLs
const testKeys = ['fold', 'strike', 'swan', 'fountain'];

testKeys.forEach(key => {
  const url = getReferralUrl(key);
  console.log(`${key}: ${url}`);
});

console.log('\nAll Referral Links:');
const allLinks = getAllReferralLinks();
Object.entries(allLinks).forEach(([key, url]) => {
  console.log(`${key}: ${url}`);
});

console.log('\nReferral system test completed!');