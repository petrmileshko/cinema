import {
  getRandomElement,
  getRandomFloat
} from '../utils/utils';

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

export const generateFilm = () => ({
  title: 'A Little Pony Without The Carpet',
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
    date: '2019-05-11T00:00:00.000Z',
    releaseCountry: 'Finland'
  },
  runtime: 77,
  genre: [
    'Comedy'
  ],
  description: getRandomElement(descriptionsStorage)
});
