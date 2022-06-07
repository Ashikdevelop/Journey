import bcrypt from 'bcryptjs';
const data = {
  users: [
{
name:'Ashik',
email: 'admin@example.com',
password: bcrypt.hashSync('123456'),
isAdmin: true,
},
{
  name:'Basir',
  email: 'user@example.com',
  password: bcrypt.hashSync('123456'),
  isAdmin: false,
  },
  ],
    products: [
        {
       
            name: 'The Diary Of A Young Girl',
            slug: 'the-diary-of-a-young-girl',
            category: 'teenage',
            image: '/images/img-2.jpg',
            price: 499,
            counterInStock: 40,
            author: 'Anne Frank',
            rating: 3.5,
            numReview: 24,
            description: 'The Diary of a Young Girl, also known as The Diary of Anne Frank, journal by Anne Frank, a Jewish teenager who chronicled her familys two years (1942–44) in hiding during the German occupation of the Netherlands during World War II.',
        },

        {
          
            name: 'The Hound Of The BaskerVilles',
            slug: 'the-hound-of-the-baskerVilles',
            category: 'thriller',
            image: '/images/img-4.jpg',
            price: 350,
            counterInStock: 5,
            author: 'Arthur Conan Doyle',
            rating: 4,
            numReview: 14,
            description: 'Based on a local legend of a spectral hound that haunted Dartmoor in Devonshire, England, the story is set in the moors at Baskerville Hall and the nearby Grimpen Mire, and the action takes place mostly at night, when the terrifying hound howls for blood.',
        },

        {
         
            name: 'Tantrics Of Old',
            slug: 'tantrics-of-old',
            category: 'dark-fantasy',
            image: '/images/img-4.jpg',
            price: 429,
            counterInStock: 15,
            author: ' Krishna Arjun',
            rating: 3.5,
            numReview: 20,
            description:'antrics of Old is dark fantasy, following a young Necromancer, a Tantric, Adri Sen, as he runs from an ancient Horseman, Death, in a city just as old.antrics of Old is dark fantasy, following a young Necromancer, a Tantric, Adri Sen, as he runs from an ancient Horseman, Death, in a city just as old.',
        },
        
        {
        
            name: 'The Orgin Of Species',
            slug: 'the-orgin-of-species',
            category: 'scientific',
            image: '/images/img-7.jpg',
            price: 700,
            counterInStock: 15,
            author: 'Charles Darwin',
            rating: 3.5,
            numReview: 40,
            description:' On the Origin of Species by Means of Natural Selection (1859) is a sustained argument showing that the diversity of organisms and their characteristics can be explained as the result of natural processes. Darwin published his monumental books On the Origin of Species (1859) and The Descent of Man (1871).',
        },

      
        {
         
            name: 'Yoga',
            slug: 'yoga',
            category: 'health',
            image: '/images/img-9.jpg',
            price: 230,
            counterInStock: 15,
            author: 'Swami Vivekananda',
            rating: 3,
            numReview: 14,
            description: 'Swami Vivekananda spelt out the four pathways of attaining moksha from the worldly pleasure and attachment in his books — Raja-yoga, Karma-yoga, Jnana-yoga and Bhakti-yoga. Karma-yoga, or the yoga of selfless action tells that through the correct actions',
        },
        
      

        {
    
            name: 'Relativity',
            slug: 'relativity',
            category: 'scientific',
            image: '/images/img-10.jpg',
            price: 700,
            counterInStock: 15,
            author: 'Albert Einstein',
            rating: 5,
            numReview: 10,
            description: 'Albert Einstein, in his theory of special relativity, determined that the laws of physics are the same for all non-accelerating observers, and he showed that the speed of light within a vacuum is the same no matter the speed at which an observer travels, according to Wired.',
        },
    ],
};
export default data;