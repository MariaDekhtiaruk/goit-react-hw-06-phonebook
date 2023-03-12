import NameInput from './NameInput';
import PropTypes from 'prop-types';

export function Filter({ onFilterUpdate }) {
  const onChangeHandler = evt => {
    onFilterUpdate(evt.target.value);
  };

  return (
    <NameInput
      title="Find contacts by name"
      onChange={onChangeHandler}
    ></NameInput>
  );
}

Filter.propTypes = {
  onDeleteContact: PropTypes.func,
};

export default Filter;
