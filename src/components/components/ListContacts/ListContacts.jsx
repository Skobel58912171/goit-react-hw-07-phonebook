import { Item, List, DataContact, BtnDelete } from './ListContacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selector';
import { deleteContact } from 'redux/contactsSlice';

const ListContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <DataContact>
            <span>{name}</span>: <span>{number}</span>
          </DataContact>
          <BtnDelete
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </BtnDelete>
        </Item>
      ))}
    </List>
  );
};

export default ListContacts;
