const recipe = [
  {
    name: "Olive Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Heart-friendly fat",
      "Boosts skin glow",
      "Improves brain function",
      "Reduces inflammation naturally",
      "Supports healthy digestion",
    ],
  },
  {
    name: "Coconut Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Boosts metabolism",
      "Improves hair health",
      "Supports skin moisture",
      "Has antimicrobial effects",
      "Aids weight management",
    ],
  },
  {
    name: "Argan Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Rich in Vitamin E",
      "Strengthens hair",
      "Soothes skin irritation",
      "Anti-aging properties",
      "Moisturizes deeply",
    ],
  },
  {
    name: "Avocado Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "High in healthy fats",
      "Supports eye health",
      "Lowers blood pressure",
      "Boosts nutrient absorption",
      "Good for dry skin",
    ],
  },
  {
    name: "Almond Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Lightens dark circles",
      "Soothes dry skin",
      "Promotes heart health",
      "Anti-inflammatory effects",
      "Improves hair texture",
    ],
  },
  {
    name: "Flaxseed Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Rich in Omega-3",
      "Improves digestion",
      "Reduces inflammation",
      "Good for heart health",
      "Supports weight loss",
    ],
  },
  {
    name: "Castor Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Boosts hair growth",
      "Relieves constipation",
      "Heals skin wounds",
      "Hydrates scalp",
      "Anti-fungal properties",
    ],
  },
  {
    name: "Sesame Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Good for bones",
      "Anti-inflammatory",
      "Promotes dental health",
      "Rich in antioxidants",
      "Improves skin elasticity",
    ],
  },
  {
    name: "Tea Tree Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Fights acne",
      "Soothes eczema",
      "Kills bacteria",
      "Reduces dandruff",
      "Promotes wound healing",
    ],
  },
  {
    name: "Jojoba Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Balances oily skin",
      "Promotes collagen",
      "Nourishes scalp",
      "Fights wrinkles",
      "Gentle on sensitive skin",
    ],
  },
  {
    name: "Mustard Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Stimulates blood flow",
      "Fights infections",
      "Improves circulation",
      "Enhances skin tone",
      "Supports joint health",
    ],
  },
  {
    name: "Neem Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Fights skin infections",
      "Natural pesticide",
      "Relieves dandruff",
      "Antibacterial properties",
      "Treats acne naturally",
    ],
  },
  {
    name: "Hemp Seed Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Balances hormones",
      "Rich in Omega-6",
      "Fights inflammation",
      "Supports healthy skin",
      "Boosts immunity",
    ],
  },
  {
    name: "Emu Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Deep skin hydration",
      "Reduces scars",
      "Treats burns",
      "Improves wound healing",
      "Eases joint pain",
    ],
  },
  {
    name: "Pumpkin Seed Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Supports prostate health",
      "Rich in magnesium",
      "Improves bladder function",
      "Boosts heart health",
      "Great for skin care",
    ],
  },
  {
    name: "Black Seed Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Boosts immunity",
      "Anti-cancer properties",
      "Lowers blood sugar",
      "Treats asthma symptoms",
      "Improves skin texture",
    ],
  },
  {
    name: "Grapeseed Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "High in antioxidants",
      "Fights aging signs",
      "Reduces scars",
      "Tightens skin",
      "Supports heart health",
    ],
  },
  {
    name: "Rosehip Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Brightens complexion",
      "Fades dark spots",
      "Treats acne scars",
      "Hydrates dry skin",
      "Reduces fine lines",
    ],
  },
  {
    name: "Kalonji Oil",
    image: "https://skyandsol.co/cdn/shop/articles/olives-and-olive-oil-2023-03-17-17-20-24-utc_1_1_1_f69d3870-4ef2-4cea-bf14-f16142d82a38.jpg?v=1740573025",
    benefits: [
      "Relieves headaches",
      "Improves memory",
      "Boosts liver health",
      "Fights hair fall",
      "Controls diabetes",
    ],
  },
];

export default recipe;
