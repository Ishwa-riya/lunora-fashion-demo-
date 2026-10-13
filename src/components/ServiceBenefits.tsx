import React from 'react';
import { Truck, PackageCheck, ShieldCheck, Headphones } from 'lucide-react';

export const ServiceBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'Free Shipping',
      subtitle: 'On orders over $99',
    },
    {
      icon: PackageCheck,
      title: 'Easy Returns',
      subtitle: '30-day returns',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payment',
      subtitle: '100% protected',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      subtitle: "We're here to help",
    },
  ];

  return (
    <section className="py-8 md:py-12 max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="bg-[#EEE7DF]/80 rounded-2xl md:rounded-3xl border border-[#E4DCD2] p-8 md:p-10 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {benefits.map((b, index) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className={`flex items-center gap-4.5 px-4 ${
                  index !== benefits.length - 1 ? 'lg:border-r lg:border-[#D8CEBF]' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#F8F5F1] flex items-center justify-center shrink-0 text-[#171615] shadow-xs">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-[#171615]">
                    {b.title}
                  </h4>
                  <p className="text-xs text-[#736F6A] mt-0.5">
                    {b.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
