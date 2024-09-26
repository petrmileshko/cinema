import {
  getRandomElement,
  getRandomFloat,
  getRandomNumber,
  convertMinutesToTime,
  convertDate
} from '../utils/utils';

const titlesStorage = [
  'Country On Him',
  'Raiders With The Carpet',
  'Guest Who Sold The Darkness',
  'A Tale Of A Little Bird In The Storm',
  'Friends On The Room',
  'Raiders Who Stole Us',
  'Friends Without Themselves',
  'Pioneers Without Us',
  'A Man With Themselves',
  'Guest With The Darkness',
  'A Little Pony Who Bought The Darkness',
  'Family Who Bought The Carpet',
  'Raiders Who Saw Him',
  'Guest Within Him',
  'Pioneers Without The Darkness',
  'A Tale Of A Little Bird With Him',
  'A Shark Who Sold The Wall',
  'Raiders Who The Storm',
  'Family Who Stole The Darkness',
  'A Lion Without Us',
];

const descriptionsStorage = [
  'Oscar-winning film, a war drama about two young people, from the creators of timeless classic \'Nu, Pogodi!\' and \'Alice in Wonderland\', with the best fight scenes since Bruce Lee.',
  'Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant\'s narrow escapape.m prison determined to find the real killer.',
  'Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on the past ruuler observer. And did he knows about it.',
  'The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Martin Lowrence")',
  'In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and Sailor (presumably Bluto playing a "role") '
];

const postersStorage = [
  './images/posters/the-dance-of-life.jpg',
  './images/posters/sagebrush-trail.jpg',
  './images/posters/the-man-with-the-golden-arm.jpg',
  './images/posters/santa-claus-conquers-the-martians.jpg',
  './images/posters/popeye-meets-sinbad.png'
];

const countryStorage = [
  'Finland',
  'England',
  'USA',
  'USSR',
  'Italy',
  'France',
];

const genreStorage = [
  'Comedy',
  'Drama',
  'Musical',
  'Western',
  'Cartoon',
  'Romantic',
  'Animation',
  'Action',
  'Adventure',
  'Family',
  'Horror',
  'Thriller',
];

export const generateFilm = () => ({
  title: getRandomElement(titlesStorage),
  alternativeTitle: 'Laziness Who Sold Themselves',
  totalRating: getRandomFloat(1, 9, 1),
  poster:  getRandomElement(postersStorage),
  ageRating: 0,
  director: 'Tom Ford',
  writers: [
    'Takeshi Kitano'
  ],
  actors: [
    'Morgan Freeman'
  ],
  release: {
    date: convertDate( `${getRandomNumber(1980,2024)}-03-${getRandomNumber(10,30)}T00:00:00.000Z` ),
    releaseCountry: getRandomElement(countryStorage)
  },
  runtime: convertMinutesToTime(getRandomNumber(45,180)),
  genre: [
    getRandomElement(genreStorage)
  ],
  description: getRandomElement(descriptionsStorage)
});
