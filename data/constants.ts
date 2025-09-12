export const companyInfo = {
  name: "mountain explorer, s. r. o.",
  businessId: "53226119",
  vatId: "SK2121306704",
  address: {
    street: "Karpatske namestie 7770/10A",
    city: "Bratislava",
    postalCode: "83106",
    country: "Slovakia (European Union)"
  }
} as const;

export const contactInfo = {
  email: "martin@techseovitals.com",
  author: "Martin Stepanek"
} as const;

export const socialLinks = {
  linkedin: "https://linkedin.com/in/techseovitals",
  bluesky: "https://bsky.app/profile/techseovitals.com",
  youtube: "https://youtube.com/@techseovitals"
} as const;

export const companyLogos = {
  main: [
    {
      src: "/images/company-logos/touchit-logo.png",
      alt: "TOUCHIT",
      width: 140,
      height: 50
    },
    {
      src: "/images/company-logos/post-affiliate-pro-logo.png",
      alt: "Post Affiliate Pro",
      width: 140,
      height: 50
    },
    {
      src: "/images/company-logos/liveagent-logo.png",
      alt: "LiveAgent",
      width: 140,
      height: 50
    }
  ]
};

export const badges = {
  available: {
    text: "Available for projects",
    className: "w-3 h-3 bg-green-400 rounded-full animate-pulse"
  },
  pulse: {
    className: "w-2 h-2 bg-white rounded-full animate-pulse"
  }
} as const;

export const commonText = {
  consultation: "✓ Free consultation",
  noCommitment: "✓ No commitment",
  unsubscribeAnytime: "No spam, ever. Unsubscribe at any time."
} as const;