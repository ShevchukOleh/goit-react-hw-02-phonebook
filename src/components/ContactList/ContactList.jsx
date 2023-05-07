import PropTypes from 'prop-types';
import { Button, ListItem } from './ContactList.styled';

export const ContactList = ({contacts, deleteContact}) => {
    return (
        <ul>
            {contacts.map(contact => (<ListItem key={contact.id} >{contact.name}: {contact.number}
                <Button type="button" onClick={() => deleteContact(contact.id)}>Delete</Button></ListItem>))}
        </ul>
    );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};