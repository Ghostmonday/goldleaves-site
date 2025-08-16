import React from "react";

export default function Terms() {
  return (
    <main className="bg-white dark:bg-[hsl(var(--background))] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-[hsl(var(--foreground))]">Terms of Service</h1>
        <p className="mt-4 text-sm text-gray-700 dark:text-[hsl(var(--muted-foreground))]">
          This is placeholder terms content. Replace with your actual terms. By using this site and engaging services, you agree to our standard terms including payment, IP ownership, and timelines.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Ownership</h2>
        <p className="mt-2 text-sm text-gray-700 dark:text-[hsl(var(--muted-foreground))]">You own 100% of delivered code and assets upon full payment.</p>
        <h2 className="mt-6 text-xl font-semibold">Payments</h2>
        <p className="mt-2 text-sm text-gray-700 dark:text-[hsl(var(--muted-foreground))]">Standard structure: 50% to start, 50% on delivery unless otherwise agreed.</p>
        <h2 className="mt-6 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-sm">Questions? Email projects@goldleaves.cloud.</p>
      </div>
    </main>
  );
}