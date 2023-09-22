import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import { useMemo, useState } from 'react';
import propTypes from 'prop-types';

const Product = ({ colors, sizes, name, title, basePrice }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  const price = useMemo(() => {
    return (basePrice += currentSize.additionalPrice);
  }, [currentSize]);

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
          <span className={styles.price}>Price: {price}$</span>
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

Product.propTypes = {
  colors: propTypes.array.isRequired,
  sizes: propTypes.array.isRequired,
  name: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  basePrice: propTypes.number.isRequired,
};

export default Product;
