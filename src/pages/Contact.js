import ContactInfo from "../components/meetups/ContactInfo";

function Contact() {
  function createPersonHandler(personData) {
    fetch("somelink.com" /* get sendgrid link and put it here */, {
      method: "POST",
      body: JSON.stringify(personData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <section>
      <ContactInfo onCreatePerson={createPersonHandler} />
    </section>
  );
}

export default Contact;
