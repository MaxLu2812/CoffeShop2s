const fieldClass =
  "w-full rounded-sm border border-[var(--color-cream-200)] bg-[var(--color-bg-primary)] px-4 py-3 font-[var(--font-body)] text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] transition-colors focus:border-[var(--color-accent)] focus:outline-none";

const labelClass =
  "mb-2 block font-[var(--font-body)] text-sm font-medium text-[var(--color-text-primary)]";

export default function ContactForm() {
  return (
    <form>
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="message" className={labelClass}>Message</label>
          <textarea id="message" name="message" rows={4} placeholder="How can we help?" className={fieldClass} />
        </div>
      </div>
    </form>
  );
}
