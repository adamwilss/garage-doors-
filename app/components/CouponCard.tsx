import { Phone } from "lucide-react";
import { business } from "@/lib/content";

interface CouponCardProps {
  title: string;
  subtitle: string;
  description: string;
  code: string;
  disclaimer: string;
}

export function CouponCard({ title, subtitle, description, code, disclaimer }: CouponCardProps) {
  return (
    <div className="bg-white border-2 border-accent rounded-xl p-6 text-center flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
      <div className="text-urgent font-bold text-4xl sm:text-5xl mb-2">
        {title}
      </div>
      <p className="text-slate-900 font-bold text-sm uppercase tracking-wide mb-3">
        {subtitle}
      </p>
      <p className="text-slate-600 text-sm mb-4 flex-1">
        {description}
      </p>
      <div className="bg-slate-100 rounded-lg px-4 py-2 mb-3">
        <span className="text-xs text-slate-500 uppercase tracking-wide">Code:</span>{" "}
        <span className="text-accent font-bold text-sm">{code}</span>
      </div>
      <a
        href={business.phoneHref}
        className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-urgent hover:bg-urgent-600 text-white rounded-md font-semibold text-sm transition-colors"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <p className="text-xs text-slate-500 mt-3">{disclaimer}</p>
    </div>
  );
}
