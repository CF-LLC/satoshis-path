export type GuideSection = { h: string; p?: string[]; list?: string[] };
export type Guide = {
  slug: string;
  title: string;
  description: string;
  emoji: string;
  minutes: number;
  intro: string;
  sections: GuideSection[];
  takeaway: string;
};

export const guides: Guide[] = [
  {
    slug: "buy-bitcoin-without-overpaying-fees",
    title: "How to buy Bitcoin without overpaying fees",
    description:
      "Plain-English guide to spreads, trading fees and withdrawal fees, and how to compare what you actually receive before you buy a small amount of Bitcoin.",
    emoji: "💸",
    minutes: 6,
    intro:
      "When you buy a small amount of Bitcoin, the fees can quietly take a meaningful bite. The good news: you can see most of them before you click buy, if you know where to look.",
    sections: [
      {
        h: "The three costs to look for",
        list: [
          "Spread: the gap between the market price and the price the app quotes you. Some apps advertise \"no fees\" and earn through a wider spread instead.",
          "Purchase or trading fee: a flat amount or percentage added at checkout. Flat fees hit small purchases hardest.",
          "Withdrawal or network fee: charged when you move Bitcoin off the platform to your own wallet. It's separate from the purchase.",
        ],
      },
      {
        h: "Compare the one number that matters",
        p: [
          "Ignore the headline price for a moment. Before you confirm, note two numbers: the total dollars you will pay, and the amount of Bitcoin (or sats) you will receive. Divide dollars by BTC to get your effective price, then compare it with a public market price at the same moment.",
          "Do this on two or three platforms with the same dollar amount. The difference between them is the real cost of convenience.",
        ],
      },
      {
        h: "Habits that usually lower costs",
        list: [
          "Read the platform's current fee schedule rather than relying on old reviews. Fees change.",
          "Check whether bank transfer and card payments are priced differently. Cards often cost more.",
          "If you plan to withdraw to your own wallet, factor in the withdrawal fee. Fewer, larger withdrawals usually cost less than many tiny ones.",
          "Record the total you paid in one place so you don't double-count fees later.",
        ],
      },
    ],
    takeaway:
      "Focus on how much Bitcoin you receive for the dollars you spend. That single comparison reveals the spread, the fee and the real price together.",
  },
  {
    slug: "move-bitcoin-to-a-wallet-safely",
    title: "How to move Bitcoin to your own wallet safely",
    description:
      "Step-by-step beginner guide to withdrawing Bitcoin from an exchange to a self-custody wallet: recovery phrase backup, test transfers and address checks.",
    emoji: "🔐",
    minutes: 7,
    intro:
      "Moving Bitcoin from an exchange to a wallet you control means nobody can freeze it, but it also means you're responsible for keeping it safe. Go slowly the first time.",
    sections: [
      {
        h: "Before you send anything",
        list: [
          "Install a reputable wallet only from the official website or official app store listing. Check the developer name.",
          "Write the recovery phrase on paper, in order, and store it somewhere safe and private. Never photograph it, email it or save it in cloud notes.",
          "Use the wallet's backup check if it has one, so you know you wrote it down correctly.",
        ],
      },
      {
        h: "Do a small test transfer",
        list: [
          "Copy a receiving address from your wallet. Paste it into the exchange's withdrawal form.",
          "Compare the first and last several characters of the pasted address with your wallet. Some malware swaps copied addresses.",
          "Make sure the network is Bitcoin (on-chain) or Lightning, matching what your wallet expects.",
          "Send a small amount first and wait until it shows in your wallet before sending the rest.",
        ],
      },
      {
        h: "After it arrives",
        p: [
          "Write down the date, amount and any withdrawal fee in your records, and log it as a transfer rather than a new purchase. Then confirm you can still find your recovery phrase backup. That's the step people skip.",
        ],
      },
    ],
    takeaway:
      "Back up the recovery phrase offline, test with a small amount, and check the address every time. Slow and boring is safe.",
  },
  {
    slug: "spot-bitcoin-scams",
    title: "How to spot Bitcoin scams before they cost you",
    description:
      "The most common Bitcoin scam patterns explained plainly: fake support, recovery phrase phishing, guaranteed returns, giveaways and romance or investment scams.",
    emoji: "🚩",
    minutes: 6,
    intro:
      "Most Bitcoin losses don't come from hackers breaking cryptography. They come from people being rushed or tricked into sending funds or revealing a recovery phrase.",
    sections: [
      {
        h: "Red flags",
        list: [
          "Anyone asking for your recovery phrase, for any reason. Legitimate support never needs it.",
          "Guaranteed returns, \"risk-free\" profits or a mentor who will \"trade for you\".",
          "Giveaways that ask you to send Bitcoin first to receive more back.",
          "Urgency: \"act in the next hour\", \"your account will be closed\".",
          "Unsolicited messages from \"support\" on social media, or links that look almost like an official site.",
          "Someone you met online who steers the conversation toward an investment platform.",
        ],
      },
      {
        h: "What to do instead",
        list: [
          "Pause. Scams depend on speed.",
          "Contact the company only through its official website or app, typed in yourself.",
          "Search the offer's name with the word \"scam\" and check official warnings from regulators.",
          "If you think you've been scammed, report it to the platform and your local authorities. Be wary of \"recovery services\"; many are a second scam.",
        ],
      },
    ],
    takeaway:
      "Your recovery phrase is the keys to the vault. Nobody legitimate will ever ask for it, and nobody can guarantee returns.",
  },
  {
    slug: "exchange-vs-self-custody",
    title: "Exchange account vs. self-custody wallet: what's the difference?",
    description:
      "A beginner's comparison of keeping Bitcoin on an exchange versus in a self-custody wallet: who holds the keys, the trade-offs, and how people usually transition.",
    emoji: "🏦",
    minutes: 5,
    intro:
      "Where your Bitcoin sits changes who's responsible for it. Neither option is perfect. Understanding the trade-off is what matters.",
    sections: [
      {
        h: "Exchange (custodial) account",
        list: [
          "The company holds the keys. You log in with a password and usually two-factor authentication.",
          "Convenient for buying and selling, and you can usually recover access through support.",
          "You rely on the company staying solvent and not freezing withdrawals.",
        ],
      },
      {
        h: "Self-custody wallet",
        list: [
          "You hold the keys through a recovery phrase. Nobody can freeze or move the funds without it.",
          "If you lose the phrase and the device, nobody can recover it for you.",
          "Hardware wallets keep keys offline; phone wallets are convenient for smaller amounts.",
        ],
      },
      {
        h: "A common, cautious approach",
        p: [
          "Many beginners buy on an exchange, learn how wallets work with a small amount, and move larger balances to self-custody once they're confident with backups. There's no single right day to switch.",
        ],
      },
    ],
    takeaway: "Convenience vs. control. Learn self-custody with small amounts before you trust it with more.",
  },
  {
    slug: "what-is-dollar-cost-averaging",
    title: "Dollar-cost averaging, explained without hype",
    description:
      "What dollar-cost averaging (DCA) is, what it does and doesn't do, and how to keep a simple record of regular small Bitcoin purchases.",
    emoji: "📅",
    minutes: 5,
    intro:
      "Dollar-cost averaging means buying a fixed dollar amount on a regular schedule, like $20 every week, regardless of price. It's a way to manage timing, not a way to guarantee profit.",
    sections: [
      {
        h: "What it does",
        list: [
          "Removes the pressure of picking the \"right\" day to buy.",
          "Spreads purchases over time, so your average cost reflects many prices instead of one.",
          "Fits ordinary budgets: small, predictable amounts.",
        ],
      },
      {
        h: "What it doesn't do",
        list: [
          "It doesn't prevent losses. If the price falls and stays down, your holdings are worth less.",
          "Frequent tiny purchases can mean higher fees as a percentage. Check the cost per purchase.",
          "Past results from any calculator don't predict future results.",
        ],
      },
      {
        h: "Keep it simple",
        p: [
          "Pick an amount you can genuinely afford to leave alone, a schedule, and one place to record each purchase: date, dollars paid including fees, and Bitcoin received. Review monthly, not hourly.",
        ],
      },
    ],
    takeaway: "DCA is a habit for managing timing and emotions. It isn't a promise of returns.",
  },
  {
    slug: "track-bitcoin-purchases-and-average-cost",
    title: "How to track Bitcoin purchases and your average cost",
    description:
      "A simple method to record Bitcoin purchases, fees, rewards and transfers so you know your real average cost without double-counting.",
    emoji: "🧮",
    minutes: 6,
    intro:
      "After a few purchases across different apps, most people lose track of what they've paid. A simple log fixes that and makes tax time less painful.",
    sections: [
      {
        h: "What to record for each purchase",
        list: [
          "Date, platform, Bitcoin received, and total dollars paid including fees.",
          "Optionally, the fee on its own in a separate column for visibility, but don't add it twice.",
        ],
      },
      {
        h: "Keep these separate",
        list: [
          "Rewards and cashback: Bitcoin you received without paying cash. Track them separately so they don't distort your purchase average.",
          "Transfers between your own wallets: not new purchases. Log the move and any network fee.",
        ],
      },
      {
        h: "Average cost, simply",
        p: [
          "Average cost per bitcoin = total dollars paid ÷ total bitcoin purchased. Example: $374.75 paid for 0.00565 BTC is about $66,327 per BTC. Your exchange's tax forms are the official record. A personal log is for understanding, not a replacement for tax software or advice.",
        ],
      },
    ],
    takeaway: "One log, total cost in one place, and rewards and transfers kept separate. That's 90% of good record-keeping.",
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
