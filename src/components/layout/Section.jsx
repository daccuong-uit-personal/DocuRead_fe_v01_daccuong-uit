import React from "react";

export default function Section({ title, children, action }) {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {action && <div>{action}</div>}
      </div>
      {children}
    </section>
  );
}
