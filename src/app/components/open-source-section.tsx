import { portfolioData } from "@/data/portfolio";
import { Section } from "./Section";
import { OpenSourceContent } from "./open-source-content";

export function OpenSourceSection() {
  return (
    <Section title="Open Source Contributions">
      <OpenSourceContent repos={portfolioData.openSourceContributions} />
    </Section>
  );
}
