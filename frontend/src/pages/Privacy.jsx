import React from "react";

export default function Privacy() {
  return (
    <main className="bg-white dark:bg-[hsl(var(--background))] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-[hsl(var(--foreground))]">Privacy Policy</h1>
        <p className="mt-4 text-sm text-gray-700 dark:text-[hsl(var(--muted-foreground))]">
          This is placeholder privacy content. Replace with your actual policy. We respect your privacy and only collect information necessary to provide our services. We do not sell your data. Contact us for any questions.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Information We Collect</h2>
        <p className="mt-2 text-sm text-gray-700 dark:text-[hsl(var(--muted-foreground))]">Contact details you provide via the intake form (name, email, project details).</p>
        <h2 className="mt-6 text-xl font-semibold">How We Use It</h2>
        <p className="mt-2 text-sm text-gray-700 dark:text-[hsl(var(--muted-foreground))]">To evaluate and communicate about your project. We keep data secure and delete upon request.</p>
        <h2 className="mt-6 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-sm">For privacy inquiries, email projects@goldleaves.cloud.</p>
      </div>
    </main>
  );
}