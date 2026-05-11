import { coupons } from "@/lib/content";
import { CouponCard } from "./CouponCard";
import { ScrollReveal } from "./ScrollReveal";

export function CouponSection() {
  return (
    <section className="py-16 lg:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 whitespace-nowrap">
              Current Offers
            </h2>
            <p className="text-slate-600 text-lg">
              Mention these coupons when you call. Save on repairs, installation and new doors.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal stagger={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coupons.map((coupon) => (
              <CouponCard key={coupon.id} {...coupon} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
