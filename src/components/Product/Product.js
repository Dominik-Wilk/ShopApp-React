import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import { useState } from 'react';
// import propTypes from "prop-types"

const Product = ({ colors, sizes, name, title, basePrice }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  const getPrice = () => {
    return (basePrice += currentSize.additionalPrice);
  };
  const addToCart = e => {
    e.preventDefault();
    console.log(`
    Summary
    ==================
    Name: ${title}
    Price: ${basePrice}$
    Size: ${currentSize.name}
    Color: ${currentColor}
    `);
  };

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          addToCart={addToCart}
          sizes={sizes}
          currentSize={currentSize}
          colors={colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
        />
      </div>
    </article>
  );
};

export default Product;
