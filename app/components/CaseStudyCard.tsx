"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

export interface CaseStudy {
  id: number;
  title: string;
  date: string;
  location: string;
  service: string;
  challenge: string;
  recommendedSolution: string;
  installationDetails: string;
  productUsed: string;
  result: string;
  customerComment: string;
  images: string[];
}

export function CaseStudyCard({ caseStudy, index = 0 }: { caseStudy: CaseStudy; index?: number }) {
  return (
    <ScrollReveal delay={index * 0.15}>
      <article className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-[4/3] md:aspect-auto bg-slate-200">
            <Image
              src={caseStudy.images[0]}
              alt={caseStudy.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6 lg:p-8">
            <div className="flex flex-wrap gap-3 text-sm text-slate-500 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {caseStudy.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {caseStudy.location}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{caseStudy.title}</h3>
            <p className="text-sm font-medium text-accent mb-4">{caseStudy.service}</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-900">Challenge</h4>
                <p className="text-sm text-slate-600 mt-1">{caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">Solution</h4>
                <p className="text-sm text-slate-600 mt-1">{caseStudy.recommendedSolution}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">Result</h4>
                <p className="text-sm text-slate-600 mt-1">{caseStudy.result}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:text-accent-600 transition-colors"
              >
                Discuss a similar project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}
