export default {
  getImage () {
    return {
      id: '59428604968',
      publicId: '4ZJ2pwDkMjMFjOi',
      userId: 'platzigram',
      liked: false,
      likes: 0,
      src: 'http://platzigram.test/4ZJ2pwDkMjMFjOi.jpg',
      description: '#awesome',
      tags: [ 'awesome' ],
      createdAt: new Date().toString()
    }
  },

  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },

  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },

  getUser () {
    return {
      id: '57etdydt78diyu',
      name: 'Freddy Vega',
      username: 'freddier',
      email: 'f@platzi.test',
      password: 'pl4tzi',
      createdAt: new Date().toString()
    }
  }
}
