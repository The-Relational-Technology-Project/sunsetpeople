import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-charcoal text-sand">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold mb-1">
              outersunset.us
            </p>
            <p className="text-sm text-sand/70">
              Made by neighbors, for neighbors.
            </p>
          </div>

          <a
            href="https://outersunset.today"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sand/80 hover:text-sand transition-colors text-sm"
          >
            outersunset.today
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-sand/10 text-center">
          <p className="text-xs text-sand/50">
            A neighborhood guide to the Outer Sunset, San Francisco
          </p>
        </div>
      </div>
    </footer>
  );
}
