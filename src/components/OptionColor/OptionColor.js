import clsx from 'clsx';
import { nanoid } from 'nanoid';
import styles from './OptionColor.module.scss';
import propTypes from 'prop-types';

const OptionColor = ({ setCurrentColor, currentColor, colors }) => {
  const changeColor = color => {
    setCurrentColor(color);
  };

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  return (
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
  );
};

OptionColor.propTypes = {
  colors: propTypes.array.isRequired,
  currentColor: propTypes.string.isRequired,
  setCurrentColor: propTypes.func.isRequired,
};

export default OptionColor;
