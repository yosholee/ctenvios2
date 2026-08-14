import type { ReactElement } from "react";
import { buildJsonLdGraph } from "@/lib/json-ld";

export function JsonLd(): ReactElement {
  const data = buildJsonLdGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
