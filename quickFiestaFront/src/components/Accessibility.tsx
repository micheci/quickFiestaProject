import React from "react";

export default function Accessibility() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-700">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Accessibility Statement
      </h1>

      <p className="mb-4">
        QuickFiesta is committed to ensuring digital accessibility for all users,
        including people with disabilities. We are continually improving the
        user experience and applying relevant accessibility standards where
        possible.
      </p>

      <p className="mb-4">
        Our goal is to make our website easy to use and accessible for everyone.
        If you experience any difficulty accessing any part of this website or
        need assistance, we want to hear from you.
      </p>

      <p className="mb-4">
        Please contact us and we will work with you to provide the information or
        services you need in an accessible format.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Contact for Accessibility Assistance
      </h2>

      <p>
        Email:{" "}
        <a
          href="mailto:support@quickfiesta.com"
          className="text-blue-600 hover:underline"
        >
          support@quickfiesta.com
        </a>
      </p>
    </main>
  );
}
