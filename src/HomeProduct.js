import React from 'react';
const products = [
  { name: 'Jersey', price: 20, orginalPrice:100, image: './img/p1.png' },
  { name: 'Cricket Bat', price: 30, orginalPrice:200, image: './img/bat.png' },
  { name: 'Cap', price: 25, orginalPrice:70,  image: './img/cap.png' },
  { name: 'Water Bottle', price: 40, orginalPrice:150, image: './img/water.png' },
  // Add more products as needed
  ];

function HomeProduct() {
  return (
    <section className='products-section'>
   <div> <h2 style={{color:'white', margin:'20px'}}>Our Products</h2></div>
    <div className='products-grid'>
        {products.map((product, index) => (
            <div key={index} className='product-card' style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
                <h3>{product.name}</h3>
                <p>${product.price} <del>{product.orginalPrice}</del></p>
            </div>
        ))}
    </div>
    <a href="/shopping" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' ,margin:'10px' }}>
        Go to Shopping Section
    </a>
</section>
  )
}

export default HomeProduct
