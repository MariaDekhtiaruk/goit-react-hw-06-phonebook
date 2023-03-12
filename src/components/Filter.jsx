import NameInput from './NameInput';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

export function Filter() {
  const dispatch = useDispatch();

  const onChangeHandler = evt => {
    dispatch(setFilter({ filter: evt.target.value }));
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
