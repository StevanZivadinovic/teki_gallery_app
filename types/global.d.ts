export type HeaderType = {
  type: 'favoriteMovies' | 'favoriteActors'; // mora da se slaže sa strukturom u bazi
  itemData: any;
};