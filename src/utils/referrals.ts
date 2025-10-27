import referralsData from '../../data/referrals.json';

/**
 * Get a referral URL by key from the centralized referral links
 */
export function getReferralUrl(key: string): string {
  return referralsData.referralLinks[key as keyof typeof referralsData.referralLinks] || '#';
}

/**
 * Get all referral links
 */
export function getAllReferralLinks() {
  return referralsData.referralLinks;
}

/**
 * Map platform names to referral link keys and get the URL
 */
export function getPlatformReferralUrl(platformName: string): string {
  const nameToKey: Record<string, string> = {
    'Swan Bitcoin': 'swan',
    'Strike': 'strike',
    'River Financial': 'river',
    'Fold App': 'fold',
    'Lolli': 'lolli',
    'Fountain': 'fountain',
    'Coinbase Pro': 'coinbase',
    'Kraken': 'kraken',
    'Ledger Nano S Plus': 'ledger',
    'Trezor Model T': 'trezor',
    'CoinTracker': 'cointracker',
    'Koinly': 'koinly',
    'Compass Mining': 'compass'
  };

  const key = nameToKey[platformName];
  return key ? getReferralUrl(key) : '#';
}