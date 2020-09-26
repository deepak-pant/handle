const context = {
  title: 'Welcome to shoeStore',
  body: 'Footwear fitting specialists focussing on quality and comfort shoes for men, women and children ',


  instruments: [
    {
      image: 'images/sale.jpg',
      name: 'LongNeck Boot',
      description: '2019 Outdoor Men Shoes Comfortable Casual Shoes Men Fashion Breathable Flats. ',
      price: '$1,99.00',
      sale: '$109.89'
    },
    {
      image: 'images/thula.jpg',
      name: 'Electric Shoes',
      description: '2020 Over Knee High Boots Mens Military Boots Natural Cow light Leather Men Long Waterproof Snowboots and Motocycle Boots.',
      price: '$599.99'
    },
    
      
    {
      image: 'images/kada.jpg',
      name: 'Winter Boot',
      description: 'The Premium Waterproof Boot for Men keeps your feet warm, dry, and cozy, even after hours of walking.',
      price: '$649.00',
      sale: '$349.00'
    },
    {
      image:'images/cold.jpg',
      name: 'Causal hero',
      description:'These shoes keep your feet dry in any condition, with a comfortable padded collar that help prevent small debris from going into the shoe. It even gives them maximum warmth.',
      price:'$245.00'
    },
	{
      image:'images/rata.jpg',
      name: 'All time',
      description:'Fashion Safety Shoes Mens Boots Casual Designer Casual Sneakers For Men Rubber Mans Footwear Winter Wearable Working Boots Men',
      price:'$245.00'
    }
  ]
};

const templateElement= document.getElementById('templateHB');
const templateSource =templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledhtml = template(context);

document.getElementById('information').innerHTML= compiledhtml;


