import referralsData from '../../data/referrals.json';

/**
 * Get a referral URL by category and key from the centralized referral links
 */
export function getReferralUrl(category: string, key: string): string {
  const categoryData = referralsData[category as keyof typeof referralsData];
  if (!categoryData || typeof categoryData !== 'object') return '#';
  
  const item = categoryData[key as keyof typeof categoryData];
  if (!item) return '#';
  
  // Handle different data structures
  if (typeof item === 'string') return item;
  if (typeof item === 'object' && item !== null && 'url' in item) {
    return (item as { url: string }).url;
  }
  
  return '#';
}

/**
 * Get exchange referral URL
 */
export function getExchangeUrl(key: string): string {
  return getReferralUrl('exchanges', key);
}

/**
 * Get earning app referral URL
 */
export function getEarningAppUrl(key: string): string {
  return getReferralUrl('earning_apps', key);
}

/**
 * Get hardware wallet referral URL
 */
export function getHardwareWalletUrl(key: string): string {
  return getReferralUrl('hardware_wallets', key);
}

/**
 * Get all referral links (for backwards compatibility)
 */
export function getAllReferralLinks() {
  const allLinks: Record<string, string> = {};
  
  // Flatten all categories into a single object
  Object.entries(referralsData).forEach(([category, items]) => {
    if (typeof items === 'object' && items !== null && !Array.isArray(items)) {
      Object.entries(items).forEach(([key, value]) => {
        if (typeof value === 'string') {
          allLinks[key] = value;
        } else if (typeof value === 'object' && value !== null && 'url' in value) {
          allLinks[key] = (value as { url: string }).url;
        }
      });
    }
  });
  
  return allLinks;
}

/**
 * Map platform names to referral URLs using the new structure
 */
export function getPlatformReferralUrl(platformName: string): string {
  const nameToPath: Record<string, [string, string]> = {
    'Swan Bitcoin': ['exchanges', 'swan'],
    'Strike': ['exchanges', 'strike'],
    'River Financial': ['exchanges', 'river'],
    'Coinbase': ['exchanges', 'coinbase'],
    'Kraken': ['exchanges', 'kraken'],
    'Fold App': ['earning_apps', 'fold'],
    'Lolli': ['earning_apps', 'lolli'],
    'ZBD Gaming': ['earning_apps', 'zbd'],
    'Yotta Banking': ['earning_apps', 'yotta'],
    'Ledger Nano S Plus': ['hardware_wallets', 'ledger'],
    'Trezor Model T': ['hardware_wallets', 'trezor'],
    'CoinTracker': ['other', 'cointracker'],
    'Koinly': ['other', 'koinly'],
    'Compass Mining': ['mining', 'compass']
  };

  const path = nameToPath[platformName];
  return path ? getReferralUrl(path[0], path[1]) : '#';
}