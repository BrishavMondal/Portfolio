import Container from "../layout/Container";
import FadeUp from "../animations/FadeUp";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <Container>
        <FadeUp>
          <span className="text-cyan-400 uppercase tracking-[6px]">
            Contact
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Let's Build Something Great
          </h2>

          <p className="mt-6 max-w-xl text-lg text-gray-400">
            Have a project, internship, or collaboration in mind?
            I'd love to hear from you.
          </p>
        </FadeUp>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <ContactForm />
          <SocialLinks />
        </div>
      </Container>
    </section>
  );
}