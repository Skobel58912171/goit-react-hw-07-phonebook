import { FormContacts } from './FormContacts/FormContacts';
import InputFilter from './InputFilter/InputFilter';
import ListContacts from './ListContacts/ListContacts';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vh',
        display: 'block',

        paddingLeft: 100,

        fontSize: 24,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>

      <FormContacts />
      <h2>Contacts</h2>
      <InputFilter />

      <ListContacts />
    </div>
  );
};
