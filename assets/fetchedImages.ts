const trending = [
  { id: "1", title: "Oxigen", url: "./../assets/images/movie_1.jpg" },
  { id: "2", title: "Pepelricane", url: "./../assets/images/movie_2.jpg" },
  { id: "3", title: "Essence", url: "./../assets/images/movie_3.jpg" },
];
const upcoming = [
  { id: "1", title: "Oxigen", url: "./../assets/images/movie_1.jpg" },
  { id: "2", title: "Pepelricane", url: "./../assets/images/movie_2.jpg" },
  { id: "3", title: "Essence", url: "./../assets/images/movie_3.jpg" },
];
const toprated = [
  { id: "1", title: "Oxigen", url: "./../assets/images/movie_1.jpg" },
  { id: "2", title: "Pepelricane", url: "./../assets/images/movie_2.jpg" },
  { id: "3", title: "Essence", url: "./../assets/images/movie_3.jpg" },
];
const similar = [
  { id: "1", title: "Oxigen", url: "./../assets/images/movie_1.jpg" },
  { id: "2", title: "Pepelricane", url: "./../assets/images/movie_2.jpg" },
  { id: "3", title: "Essence", url: "./../assets/images/movie_3.jpg" },
];

const imageMap: { [key: string]: any } = {
  "1": require("./../assets/images/movie_1.jpg"),
  "2": require("./../assets/images/movie_2.jpg"),
  "3": require("./../assets/images/movie_3.jpg"),
};
const topCastImageMap: { [key: string]: any } = {
  "1": {
    src: require("./../assets/images/face_1.jpg"),
    name: "John Wick",
    adress: "London, United Kingdom",
    gender: "Male",
    birthday: "1964-09-02",
    married: "Yes",
    popularity: 64.23,
    biography:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    filmography: similar,
  },
  "2": {
    src: require("./../assets/images/face_2.jpg"),
    name: "Johnny Depp",
    adress: "Belgrad, Serbia",
    gender: "Male",
    birthday: "1973-02-23",
    married: "Yes",
    popularity: 74.23,
    biography:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    filmography: similar,
  },
  "3": {
    src: require("./../assets/images/face_3.jpg"),
    name: "Ann Hataway",
    adress: "Moscow, Russian Federation",
    gender: "Female",
    birthday: "1989-09-02",
    married: "Yes",
    popularity: 98.23,
    biography:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    filmography: similar,
  },
  "4": {
    src: require("./../assets/images/face_4.jpg"),
    name: "Julia Roberts",
    adress: "Banja Luka, Republika Srpska",
    gender: "Female",
    birthday: "1964-05-12",
    married: "Yes",
    popularity: 24.23,
    biography:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
    filmography: similar,
  },
  "5": {
    src: require("./../assets/images/face_5.jpg"),
    name: "Meryl Streep",
    adress: "Skoplje, Macedonia",
    gender: "Female",
    birthday: "1954-10-18",
    married: "Yes",
    popularity: 84.23,
    biography:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    filmography: similar,
  },
};

export { trending, upcoming, toprated, similar, imageMap, topCastImageMap };
