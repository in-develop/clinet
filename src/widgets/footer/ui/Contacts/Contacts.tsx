import { ROUTING } from "@/shared/lib/rounting";

import { ContactsCard } from "../ContactsCard";

const Contacts = () => {
  return (
    <section className="mt-32 flex flex-col sm:flex-row">
      <ContactsCard
        title="Find us at"
        description="Kyiv, 4 Khoryva Street, Office 2"
        linkText="Shop now"
        href={ROUTING.shop}
      />
      <ContactsCard
        title="Contact us"
        description="Mon-Fri: 10:00 a.m. – 6:30 p.m."
        linkText="Say hello :)"
        href={ROUTING.contact}
      />
    </section>
  );
};

export { Contacts };
