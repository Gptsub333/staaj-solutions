// components/WhyChooseUsSection.tsx
import { WhyChooseUsItem } from './WhyChooseUsItem';
// import your icons and images

type SectionItem = {
  // Replace these with the actual props expected by WhyChooseUsItem
  title: string;
  description: string;
  icon: React.ReactNode; // Make icon required
  image?: string | string[];
  [key: string]: any;
};

interface WhyChooseUsSectionProps {
  sections: SectionItem[];
}

export const WhyChooseUsSection = ({ sections }: WhyChooseUsSectionProps) => (
  <section id="why-us" className="py-16 bg-gray-50 relative">
    {/* Optional: <DotBackground ... /> */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 mb-4 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200">
          Why Work With Us
        </span>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Consulting for Any Organisation
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We combine broad industry knowledge with deep operational expertise to deliver solutions for any business or sector.
        </p>
      </div>
      <div className="space-y-12 md:space-y-16">
        {sections.map((item, idx) => (
          <WhyChooseUsItem
            key={idx}
            {...item}
            image={item.image ?? ""}
            reverse={idx % 2 !== 0}
          />
        ))}
      </div>
    </div>
  </section>
);
