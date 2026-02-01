export const ZODIACS = [
  { name: "Rat", years: [2032, 2020, 2008, 1996, 1984, 1972, 1960, 1948, 1936] },
  { name: "Ox", years: [2033, 2021, 2009, 1997, 1985, 1973, 1961, 1949, 1937] },
  { name: "Tiger", years: [2034, 2022, 2010, 1998, 1986, 1974, 1962, 1950, 1938] },
  { name: "Rabbit", years: [2035, 2023, 2011, 1999, 1987, 1975, 1963, 1951, 1939] },
  { name: "Dragon", years: [2036, 2024, 2012, 2000, 1988, 1976, 1964, 1952, 1940] },
  { name: "Snake", years: [2025, 2013, 2001, 1989, 1977, 1965, 1953, 1941, 1929] },
  { name: "Horse", years: [2026, 2014, 2002, 1990, 1978, 1966, 1954, 1942, 1930] },
  { name: "Goat", years: [2027, 2015, 2003, 1991, 1979, 1967, 1955, 1943, 1931] },
  { name: "Monkey", years: [2028, 2016, 2004, 1992, 1980, 1968, 1956, 1944, 1932] },
  { name: "Rooster", years: [2029, 2017, 2005, 1993, 1981, 1969, 1957, 1945, 1933] },
  { name: "Dog", years: [2030, 2018, 2006, 1994, 1982, 1970, 1958, 1946, 1934] },
  { name: "Pig", years: [2031, 2019, 2007, 1995, 1983, 1971, 1959, 1947, 1935] },
];

const COLORS = ["Red", "Gold", "Green", "Blue", "Yellow", "Purple", "Pink", "Orange", "Silver", "White"];

const CATEGORY_TEXTS = {
  wealth: [
    "Keep spending simple and intentional. Set a small weekly budget, track your purchases, and avoid impulse buys when emotions run high.",
    "Focus on steady progress over quick wins. Build an emergency buffer first, then consider long-term, diversified saving habits.",
    "Double-check details before committing money. Read terms carefully, compare options, and sleep on big purchases for at least a day.",
    "Strengthen your financial foundation. Pay down high-interest balances, automate basic savings, and keep your paperwork well organised.",
    "Be open to practical advice. Talk through plans with a trusted person and watch for “too good to be true” deals or rushed decisions.",
    "Use a ‘needs-first’ rule this period. Cover essentials, then set a guilt-free fun allowance to stay balanced without overspending."
  ],
  career: [
    "Be visible for the right reasons. Share progress early, communicate clearly, and follow through on small promises consistently.",
    "Prioritise what moves the needle. Pick one key skill or project to improve and protect focused time on your calendar.",
    "Build calm momentum at work. Stay proactive, keep your tone neutral, and avoid getting pulled into unnecessary workplace drama.",
    "Ask for clarity, not assumptions. Confirm expectations, deadlines, and success criteria before investing heavy effort.",
    "Strengthen your network naturally. Offer help, give credit generously, and keep relationships professional and respectful.",
    "When pressure rises, simplify. Break tasks into steps, document decisions, and keep a clean record of what you delivered."
  ],
  relationships: [
    "For married couples, lead with patience and honest listening; small misunderstandings dissolve when you ask questions before reacting. For singles, approach new conversations with curiosity rather than expectations, allowing genuine chemistry to emerge naturally.",
    "For married couples, show care through consistent actions; simple gestures like checking in build trust more than grand promises. For singles, expand your circles gently; say yes to low-pressure social events and let connections grow naturally over time.",
    "For married couples, create space for lightness by planning relaxed activities that focus on shared joy rather than household management. For singles, invest time in hobbies that light you up; your genuine enthusiasm is the most attractive trait you can cultivate.",
    "For married couples, if tension appears, reset the tone by taking a short pause to solve the problem rather than trying to 'win'. For singles, don't let past mismatches discourage you; view every interaction as data that clarifies exactly what you are looking for.",
    "For married couples, respect individual growth by encouraging your partner’s personal goals while maintaining your own separate identity. For singles, set kind boundaries early; being clear about your values ensures you attract people who respect your time and energy.",
    "For married couples, vocalise appreciation for the small things; acknowledging daily efforts prevents resentment and strengthens the bond. For singles, keep an open mind regarding your 'type'; sometimes the best connections come from people who surprise you, not a checklist."
  ],
  health: [
    "Prioritise steady routines. Aim for consistent sleep, regular meals, hydration, and a manageable amount of daily movement.",
    "Reduce stress load where you can. Take short breaks, get fresh air, and use simple breathing or stretching to reset your focus.",
    "Support your body with basics first. Choose balanced meals, limit late-night heavy eating, and keep caffeine/alcohol moderate.",
    "Listen to early signals. If something feels off or persistent, don’t ignore it—consider checking in with a qualified professional.",
    "Move safely and consistently. Pick activities you can sustain (walking, mobility work, light strength) and avoid sudden overexertion.",
    "Protect your energy. Good posture, screen breaks, and a tidy wind-down routine can improve how you feel day to day."
  ]
};

const GENERAL_WRITEUPS = [
  "A new cycle begins for ${zodiacName}-born individuals, bringing fresh chances to reset priorities. Stay adaptable, and you’ll find practical paths to progress in many areas of life.",
  "This period encourages ${zodiacName}-born individuals to build steadily on past efforts. With patience and consistency, small steps can lead to meaningful breakthroughs.",
  "For ${zodiacName}-born individuals, the energy of this year supports reflection and refinement. Let go of what no longer serves you and make space for healthier habits and connections.",
  "This is a favourable time for ${zodiacName}-born individuals to strengthen foundations. Focus on stability, clear communication, and thoughtful planning to make the most of upcoming opportunities.",
  "${zodiacName}-born individuals may feel a renewed sense of motivation this year. Channel that drive into realistic goals, and avoid rushing—measured actions will bring the best results."
];

export const generateLuckData = (zodiacName) => {
  // Use pure random generation as requested
  
  const ratings = {
    wealth: Math.floor(Math.random() * 5) + 1, // 1-5 stars
    career: Math.floor(Math.random() * 5) + 1,
    relationships: Math.floor(Math.random() * 5) + 1,
    health: Math.floor(Math.random() * 5) + 1,
  };

  const luckyNumber = Math.floor(Math.random() * 10); // 0-9
  const luckyColor = COLORS[Math.floor(Math.random() * COLORS.length)];

  // Randomly select one text from each category array
  const categories = {
    wealth: CATEGORY_TEXTS.wealth[Math.floor(Math.random() * CATEGORY_TEXTS.wealth.length)],
    career: CATEGORY_TEXTS.career[Math.floor(Math.random() * CATEGORY_TEXTS.career.length)],
    relationships: CATEGORY_TEXTS.relationships[Math.floor(Math.random() * CATEGORY_TEXTS.relationships.length)],
    health: CATEGORY_TEXTS.health[Math.floor(Math.random() * CATEGORY_TEXTS.health.length)],
  };

  // Select a random general writeup and replace the placeholder
  const rawGeneralWriteup = GENERAL_WRITEUPS[Math.floor(Math.random() * GENERAL_WRITEUPS.length)];
  const generalWriteup = rawGeneralWriteup.replace("${zodiacName}", zodiacName);

  return {
    zodiac: zodiacName,
    ratings,
    luckyNumber,
    luckyColor,
    generalWriteup,
    categories,
  };
};
