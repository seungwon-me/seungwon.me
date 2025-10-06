"use client";

import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight mb-8">{title}</h2>
      {children}
    </section>
  );
}