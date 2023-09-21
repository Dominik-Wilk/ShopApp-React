import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import { nanoid } from 'nanoid'; // import propTypes from "prop-types"

const Product = ({ colors, sizes, name, title, basePrice }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);
  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const changeColor = color => {
    setCurrentColor(color);
  };
  const changeSize = size => {
    setCurrentSize(size);
  };
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
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={addToCart}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size => (
                <li key={nanoid()}>
                  <button
                    onClick={() => changeSize(size)}
                    type='button'
                    className={clsx(size === currentSize && styles.active)}>
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => (
                <li key={nanoid()}>
                  <button
                    onClick={() => changeColor(color)}
                    type='button'
                    className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button type='submit' className={styles.button}>
            <span className='fa fa-shopping-cart' />
          </Button>
        </form>
      </div>
    </article>
  );
};

export default Product;
