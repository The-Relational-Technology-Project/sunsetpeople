import { useEffect } from "react";
import { generateLlmTxt } from "@/data/groups";

export default function LlmTxt() {
  const content = generateLlmTxt();

  useEffect(() => {
    // Set plain text content type via document title hint for crawlers
    document.title = "llm.txt - Sunset People";
  }, []);

  return (
    <pre className="whitespace-pre-wrap font-mono text-sm p-6 bg-white text-charcoal min-h-screen">
      {content}
    </pre>
  );
}
