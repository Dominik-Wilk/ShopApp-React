import Button from '../Button/Button';
import styles from './ProductForm.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = ({ addToCart, sizes, setCurrentSize, currentSize, colors, currentColor, setCurrentColor }) => {
  return (
    <form onSubmit={addToCart}>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <OptionSize currentSize={currentSize} setCurrentSize={setCurrentSize} sizes={sizes} />
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <OptionColor setCurrentColor={setCurrentColor} colors={colors} currentColor={currentColor} />
      </div>
      <Button type='submit' className={styles.button}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

export default ProductForm;
