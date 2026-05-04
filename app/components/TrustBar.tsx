"use client";

import { business } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";
import { Clock, Users, BadgeCheck, Shield, Award, DoorOpen } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "25 years experience": <Clock className="w-5 h-5" />,
  "Family run": <Users className="w-5 h-5" />,
  "Free quotes": <BadgeCheck className="w-5 h-5" />,
  "Fully guaranteed": <Shield className="w-5 h-5" />,
  "AESIF member": <Award className="w-5 h-5" />,
  "Garage doors and gates": <DoorOpen className="w-5 h-5" />,
};

export function TrustBar() {
  return (
    <ScrollReveal direction="up">
      <div className="border-y border-slate-200 dark:border-[#222] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {business.trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                <span className="text-accent">{iconMap[point] || <BadgeCheck className="w-5 h-5" />}</span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
