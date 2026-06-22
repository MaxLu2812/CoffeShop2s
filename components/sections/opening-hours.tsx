import { openingHours } from "@/lib/data/site";

export default function OpeningHours() {
  return (
    <div>
      <h3 className="mb-6 font-[var(--font-heading)] text-lg font-semibold text-[var(--color-text-primary)]">
        Opening Hours
      </h3>
      <dl className="space-y-3 text-sm">
        {openingHours.map((entry) => (
          <div key={entry.day} className="flex justify-between">
            <dt className="font-[var(--font-body)] text-[var(--color-text-secondary)]">
              {entry.day}
            </dt>
            <dd className="font-[var(--font-body)] font-medium text-[var(--color-text-primary)]">
              {entry.closed ? "Closed" : `${entry.open} – ${entry.close}`}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
