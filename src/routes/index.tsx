import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteHeader } from "@/components/home/site-header";
import {
  Cta,
  Faq,
  FocusMarquee,
  Hero,
  Product,
  Security,
  SiteFooter,
  Why,
} from "@/components/home/sections";

const TITLE = "2Cube AI — Geometry of Infinite Intelligence";
const DESCRIPTION =
  "2Cube AI builds responsible, privacy-first AI products that empower people, automate work, and help modern businesses scale from pilot to production.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <main className="relative min-h-screen">
      <SiteHeader />
      <Hero />
      <FocusMarquee />
      <Product />
      <Why />
      <Security />
      <Faq />
      <Cta />
      <SiteFooter />
    </main>
  );
}
