"use client";

const stats = [
  { value: "20+",  label: "Products",         sub: "Across GP & GYN" },
  { value: "2",    label: "Divisions",         sub: "GP + Gynecology" },
  { value: "500+", label: "Doctors Trusted",   sub: "Pan India Network" },
  { value: "3",    label: "Certifications",    sub: "GMP · ISO · USP" },
];

export default function StatsCounter() {
  return (
    <section className="w-full bg-white border-b border-gray-100">
      <div className="w-full px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center px-8 py-10"
            >
              <span className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                {stat.value}
              </span>
              <span className="mt-1.5 text-sm font-semibold text-gray-700 uppercase tracking-widest">
                {stat.label}
              </span>
              <span className="mt-1 text-xs text-gray-400 tracking-wide">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
