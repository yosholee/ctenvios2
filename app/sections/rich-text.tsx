import type { ReactElement } from "react";
import Link from "next/link";

const LINK_PATTERN = /\[([^\]]+)\]\((\/[^)\s]+)\)/g;

/**
 * Renders plain text that may contain markdown-style internal links,
 * e.g. "pide [el estimado para tu provincia](/blog/...) hoy".
 * Anything that is not a [label](/internal-path) match stays plain text.
 */
export function RichText({ text }: { text: string }): ReactElement {
  const parts: ReactElement[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<span key={key++}>{text.slice(lastIndex, match.index)}</span>);
    }
    parts.push(
      <Link
        key={key++}
        href={match[2]}
        className="font-semibold text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-2 hover:text-brand-navy/80"
      >
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(<span key={key++}>{text.slice(lastIndex)}</span>);
  }
  return <>{parts}</>;
}

/** Removes the link markup, leaving only the visible label (for JSON-LD). */
export function stripRichText(text: string): string {
  return text.replace(/\[([^\]]+)\]\((\/[^)\s]+)\)/g, "$1");
}
