import React from 'react';

const products = [
  { id: 1, name: 'Granite', image: '/path-to-granite.jpg' },
  { id: 2, name: 'Marble', image: '/path-to-marble.jpg' },
  { id: 3, name: 'Slate', image: '/path-to-slate.jpg' },
];

const Products = () => (
  <section id="products" className="py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
