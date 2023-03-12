import PropTypes from 'prop-types';
import { ContactPropType } from 'ContactPropType';
import { deleteContact } from '../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <li className="list-item">
      {name}: {number}
      <button
        type="button"
        className="button-delete"
        onClick={() => dispatch(deleteContact({ contactId: id }))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: ContactPropType,
  onDeleteContact: PropTypes.func,
};

export default ContactItem;
