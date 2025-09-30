import React from "react";

export default function Footer({ links = [], copyright }) {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10 text-sm text-gray-600">
      <div className="flex justify-center space-x-4 mb-2">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="hover:text-blue-600">
            {link.label}
          </a>
        ))}
      </div>
      <p>{copyright || "© 2025 DocuRead. All rights reserved."}</p>
    </footer>
  );
}
