import { useState } from "react";
import { motion } from "framer-motion";
import { EASE, viewportOnce } from "../../lib/motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mrpgogyw", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setError(
        "We couldn't send your message. Please try again or email us directly."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="px-5 py-12 sm:px-8 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE }}
          className="rounded-3xl border border-[#dceaf4] bg-white p-8 sm:p-10"
        >
          {submitted ? (
            <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
              <h3 className="text-[20px] font-semibold text-ink">
                Thanks — message sent.
              </h3>
              <p className="mt-2 text-[14.5px] text-ink/55">
                We'll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div>
                <label
                  htmlFor="contact-name"
                  className="text-[13.5px] font-medium text-ink/70"
                >
                  Name
                </label>
                <input
                  required
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-[#dceaf4] px-4 py-2.5 text-[14.5px] text-ink outline-none transition-colors focus:border-[#078bd3]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="text-[13.5px] font-medium text-ink/70"
                >
                  Email
                </label>
                <input
                  required
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-[#dceaf4] px-4 py-2.5 text-[14.5px] text-ink outline-none transition-colors focus:border-[#078bd3]"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-company"
                  className="text-[13.5px] font-medium text-ink/70"
                >
                  Company
                </label>
                <input
                  id="contact-company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-[#dceaf4] px-4 py-2.5 text-[14.5px] text-ink outline-none transition-colors focus:border-[#078bd3]"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-[13.5px] font-medium text-ink/70"
                >
                  Message
                </label>
                <textarea
                  required
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1.5 w-full rounded-xl border border-[#dceaf4] px-4 py-2.5 text-[14.5px] text-ink outline-none transition-colors focus:border-[#078bd3]"
                  placeholder="What can we help with?"
                />
              </div>

              {error && (
                <p role="alert" className="text-[13px] text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-medium text-white transition-colors hover:bg-ink/85 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send message"}
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="flex flex-col gap-8 pt-2"
        >
          <div>
            <h3 className="text-[15px] font-semibold text-ink">Phone</h3>
            <p className="mt-1 text-[14.5px] text-ink/55">+91 99999 99999</p>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-ink">Email</h3>
            <p className="mt-1 text-[14.5px] text-ink/55">hello@fridaycore.com</p>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-ink">Response time</h3>
            <p className="mt-1 text-[14.5px] text-ink/55">
              We typically respond within one business day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
