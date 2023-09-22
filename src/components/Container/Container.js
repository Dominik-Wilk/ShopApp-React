import styles from './Container.module.scss';
import propTypes from 'prop-types';

const Container = props => {
  return <div className={styles.container}>{props.children}</div>;
};

Container.propTypes = {
  children: propTypes.array.isRequired,
};
export default Container;
