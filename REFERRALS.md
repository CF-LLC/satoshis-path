# Referral Links Management

This document explains how to manage referral links for Satoshi's Path.

## Overview

All referral links are centrally managed in `data/referrals.json` under the `referralLinks` object. This makes it easy to update all links from one location.

## Current Referral Links

The current referral links are stored as key-value pairs:

```json
{
  "referralLinks": {
    "fold": "https://use.foldapp.com/r/COOPER123",
    "strike": "https://strike.me/cooper",
    "swan": "https://swanbitcoin.com/coopstack",
    "fountain": "https://fountain.fm/invite/cooper",
    "river": "https://river.com/signup?r=cooper",
    "coinbase": "https://coinbase.com/join/cooper_stack",
    "kraken": "https://r.kraken.com/cooper",
    "ledger": "https://shop.ledger.com/?r=cooper",
    "trezor": "https://trezor.io/r/cooper",
    "cointracker": "https://www.cointracker.io/r/cooper",
    "koinly": "https://koinly.io/r/cooper",
    "lolli": "https://lolli.com/r/cooper",
    "compass": "https://compassmining.io/r/cooper"
  }
}
```

## How It Works

1. **Centralized Storage**: All referral URLs are stored in the `referralLinks` object
2. **Key-Based References**: Platform data uses `referralKey` instead of direct URLs
3. **Automatic Resolution**: The utility functions automatically resolve keys to URLs

## Updating Referral Links

To update a referral link:

1. Open `data/referrals.json`
2. Find the key in the `referralLinks` object
3. Update the URL value
4. Save the file

Example - updating Strike referral link:
```json
"strike": "https://strike.me/cooper-updated-link"
```

## Adding New Referral Links

To add a new platform:

1. Add the key-value pair to `referralLinks`:
   ```json
   "newplatform": "https://newplatform.com/r/cooper"
   ```

2. Add the platform to the appropriate section with `referralKey`:
   ```json
   {
     "name": "New Platform",
     "referralKey": "newplatform",
     "description": "Description of new platform"
   }
   ```

3. Update the utility function mapping if needed (in `src/utils/referrals.ts`)

## Benefits

- **Single Source of Truth**: All referral links in one place
- **Easy Updates**: Change a link once, updates everywhere
- **Type Safety**: TypeScript ensures referral keys exist
- **Maintainable**: Clear separation between data and URLs

## Usage in Code

```typescript
import { getReferralUrl } from '@/utils/referrals';

// Get a specific referral URL
const swanUrl = getReferralUrl('swan');

// Get all referral links
const allLinks = getAllReferralLinks();
```

The system automatically handles fallbacks and ensures all platforms display the correct referral URLs throughout the site.