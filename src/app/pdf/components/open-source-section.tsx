import { portfolioData } from "@/data/portfolio";
import { OpenSourceContent } from "@/app/components/open-source-content";
import { Section } from "./Section";

export function OpenSourceSection() {
  return (
    <Section title="Open Source Contributions">
      <OpenSourceContent repos={portfolioData.openSourceContributions} isPdf />
    </Section>
  );
}
