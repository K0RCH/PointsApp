export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'h1LugIEuRpdgIGmwA4HWXtjROZS2',
        username: 'test_user',
        emailAddress: 'test.user@pointsapp.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'raphael',
        emailAddress: 'raphael@sanzio.com',
        following: [],
        followers: ['h1LugIEuRpdgIGmwA4HWXtjROZS2'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'dali',
        emailAddress: 'salvador@dali.com',
        following: [],
        followers: ['h1LugIEuRpdgIGmwA4HWXtjROZS2'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'orwell',
        emailAddress: 'george@orwell.com',
        following: [],
        followers: ['h1LugIEuRpdgIGmwA4HWXtjROZS2'],
        dateCreated: Date.now()
      }
    ];
  
    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/raphael/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'dali',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'orwell',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
}