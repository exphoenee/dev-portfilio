/* ============================================================
   FORBIDDEN WORDS, the shared profanity filter for the hire and
   booking forms. Mirrors the data/locales/*-page.js shape: one list
   per UI language, entries lowercase.

   The matcher (scripts/modals/form-guards.js) aggregates every
   language's list into a single Unicode-aware word-boundary regex,
   so a message is screened against all six languages no matter which
   UI language the visitor picked. Common inflected forms are listed
   explicitly (e.g. "fucking" next to "fuck", "kurvák" next to
   "kurva") because the matcher requires exact word matches and does
   not do stem/prefix matching, keeping false positives (like "class"
   for "ass") out.
   ============================================================ */

export const FORBIDDEN_WORDS = {
  en: [
    'fuck', 'fucking', 'fucked', 'fucker', 'fuckers', 'motherfucker', 'motherfucking',
    'shit', 'shits', 'shitty', 'bullshit',
    'bitch', 'bitches', 'bitching',
    'bastard', 'bastards', 'whore', 'whores', 'slut', 'sluts',
    'cunt', 'cunts', 'dick', 'dicks', 'dickhead', 'dickheads',
    'prick', 'pricks', 'pussy', 'pussies',
    'asshole', 'assholes', 'arsehole', 'arseholes', 'dumbass', 'dumbasses',
    'jackass', 'jackasses', 'douchebag', 'douchebags', 'fucktard', 'fucktards',
    'twat', 'wanker', 'wankers',
    'fag', 'faggot', 'faggots', 'nigga', 'niggas', 'nigger', 'niggers',
    'cocksucker', 'cocksuckers', 'cocksucking',
    'piss', 'pissing'
  ],
  de: [
    'scheiße', 'scheisse', 'fick', 'ficken', 'ficker', 'gefickt',
    'arsch', 'arschloch', 'arschloecher', 'wichser',
    'hurensohn', 'fotze', 'schwuchtel', 'miststück', 'miststueck', 'verpiss'
  ],
  hu: [
    'basz', 'baszom', 'baszik', 'bazd', 'bazdmeg',
    'geci', 'gecik', 'gecizik',
    'kurva', 'kurvak', 'kurvara', 'kurvára', 'kurvák',
    'picsa', 'picsaba', 'picsába',
    'szar', 'szart', 'szarik', 'szarok', 'szarul',
    'fasz', 'faszom', 'faszod', 'faszfej', 'balfasz',
    'segg', 'seggfej', 'seggfejek', 'buzi', 'buzik',
    'kibaszott', 'kibaszottul', 'megbasz', 'leszar',
    'rohadj', 'dögölj', 'dogolj', 'takarodj'
  ],
  fr: [
    'putain', 'merde', 'con', 'conne', 'connard', 'connasse',
    'salope', 'batard', 'pute',
    'enculé', 'encule', 'enculer', 'chier', 'foutre',
    'bite', 'couille', 'couilles', 'nique', 'niquer'
  ],
  it: [
    'cazzo', 'cazzi', 'merda', 'stronzo', 'stronza', 'stronzi',
    'coglione', 'coglioni', 'cogliona',
    'vaffanculo', 'fanculo', 'troia', 'troie',
    'puttana', 'puttane', 'zoccola', 'zoccole', 'minchia'
  ],
  es: [
    'joder', 'jodete', 'jódete',
    'puta', 'puto', 'putas', 'putos',
    'mierda', 'coño', 'cojones', 'culo',
    'cabrón', 'cabron', 'cabrones', 'gilipollas',
    'pendejo', 'pendeja', 'maricón', 'maricon', 'zorra', 'zorras'
  ]
};
