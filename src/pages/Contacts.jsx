import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectContact, selectIsLoading, selectErorr } from "redux/contascts/contactsSelectors";
import { fetchContacts } from "redux/contascts/contactsOperations";
import { Section } from "components/Section/Section";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Loader } from "components/Loader/Loader";
import { Helmet } from "react-helmet";

export default function Contacts () {
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErorr);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
      <Section title="Phone book">
        <ContactForm />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
       )} 
      {isLoading && !error && <Loader />}
    </div>
  );

};