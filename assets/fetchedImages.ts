const trending=[
    { id: '1', title: 'Oxigen', url:'./../assets/images/movie_1.jpg' },
    { id: '2', title: 'Pepelricane', url:'./../assets/images/movie_2.jpg' },
    { id: '3', title: 'Essence', url:'./../assets/images/movie_3.jpg' },
  ]
  const upcoming=[
    { id: '1', title: 'Oxigen', url:'./../assets/images/movie_1.jpg' },
    { id: '2', title: 'Pepelricane', url:'./../assets/images/movie_2.jpg' },
    { id: '3', title: 'Essence', url:'./../assets/images/movie_3.jpg' },
  ]
  const toprated=[
    { id: '1', title: 'Oxigen', url:'./../assets/images/movie_1.jpg' },
    { id: '2', title: 'Pepelricane', url:'./../assets/images/movie_2.jpg' },
    { id: '3', title: 'Essence', url:'./../assets/images/movie_3.jpg' },
  ]
  const similar=[
    { id: '1', title: 'Oxigen', url:'./../assets/images/movie_1.jpg' },
    { id: '2', title: 'Pepelricane', url:'./../assets/images/movie_2.jpg' },
    { id: '3', title: 'Essence', url:'./../assets/images/movie_3.jpg' },
  ]

 const imageMap: { [key: string]: any } = {
    "1": require("./../assets/images/movie_1.jpg"),
    "2": require("./../assets/images/movie_2.jpg"),
    "3": require("./../assets/images/movie_3.jpg"),
  };
  const topCastImageMap: { [key: string]: any } = {
    "1": {src:require("./../assets/images/face_1.jpg"), name:'John Wick'},
    "2": {src:require("./../assets/images/face_2.jpg"), name:'Johnny Depp'},
    "3": {src:require("./../assets/images/face_3.jpg"), name:'Ann Hataway'},
    "4": {src:require("./../assets/images/face_4.jpg"), name:'Julia Roberts'},
    "5": {src:require("./../assets/images/face_5.jpg"), name:'Meryl Streep'}, 
  };

  export {trending, upcoming, toprated,similar, imageMap, topCastImageMap}