/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tracks').del()
  await knex('tracks').insert([
    {id: 1, coverart: 'https://images.genius.com/e14ea3e9d432ebf403c2ee8cf8a6b662.1000x1000x1.png', artist: 'future', genre: 'Hip-Hop' , title: 'Puffin On Zooties', audiofile: 'file'},
    {id: 2, coverart: 'https://upload.wikimedia.org/wikipedia/en/f/f8/Is_This_Love_%28Bob_Marley_%26_The_Wailers_single_-_cover_art%29.jpg', artist: 'Bob Marley', genre: 'Reggae' , title: 'Is This Love' , audiofile: 'file'},
    {id: 3, coverart: 'https://i.ytimg.com/vi/S1QasDs5Jcc/maxresdefault.jpg', artist: 'Miss Aphrodite', genre: 'R&B' , title: 'Your Hands' , audiofile: 'file'},
    {id: 4, coverart: 'https://i.scdn.co/image/ab67616d0000b2736c30c36a8657487454f46642', artist: 'Bobby Blue Bland', genre: 'Blues' , title: 'Ain\'t No Sunshine When She\'s Gone' , audiofile: 'file'},
    {id: 5, coverart: 'https://www.metallica.com/on/demandware.static/-/Sites-Metallica-Library/default/dw6503eaa3/images/releases/20150807_213844_7549_752889.jpeg', artist: 'Metallica', genre: 'Rock' , title: 'The Four Horseman' , audiofile: 'file'},
   
  ]);
};
