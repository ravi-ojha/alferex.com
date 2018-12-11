import React from 'react';
import { Link } from 'gatsby';

export default ({ pageContext: { allProducts } }) => (
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>Product list</h1>
    <ul style={{ padding: 0 }}>
      {allProducts.map(product => (
        <li
          key={product.node.id}
          style={{
            textAlign: 'center',
            listStyle: 'none',
            display: 'inline-block'
          }}
        >
          <Link to={`${product.node.slug}`}>
            <p>{product.node.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);