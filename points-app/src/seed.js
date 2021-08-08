export function seedDatabase(firebase) {
    const users = [
        {
            userId: 'G2nzaY2JCtNSKxBtKYRqEw1qz8x2',
            username: 'karl',
            emailAddress: 'karl@gmail.com',
            following: ['2'],
            followers: ['2', '3'],
            dateCreated: Date.now()
        },
        {
            userId: '2',
            username: 'john',
            emailAddress: 'john@gmail.com',
            following: [],
            followers: ['G2nzaY2JCtNSKxBtKYRqEw1qz8x2'],
            dateCreated: Date.now()
        },
        {
            userId: '3',
            username: 'luna',
            emailAddress: 'luna@wp.pl',
            following: [],
            followers: ['G2nzaY2JCtNSKxBtKYRqEw1qz8x2'],
            dateCreated: Date.now()
        },
    ]
    
    for (let k = 0; k < users.length; k++) {
        firebase.firestore().collection('users').add(users[k])
    }
}