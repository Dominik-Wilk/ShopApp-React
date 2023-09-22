import clsx from 'clsx';
import { nanoid } from 'nanoid';
import styles from './OptionSize.module.scss';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
  const changeSize = size => {
    setCurrentSize(size);
  };

  return (
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
  );
};

export default OptionSize;
