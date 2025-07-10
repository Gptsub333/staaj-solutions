// ServiceCard.jsx
import Link from "next/link";
import { CheckCircle, LucideProps } from "lucide-react";

import { ComponentType, ReactNode } from "react";

type ServiceCardProps = {
    icon: ComponentType<{ className?: string }>;
    iconBg: string;
    iconColor: string;
    border?: string;
    hoverShadow?: string;
    title: string;
    subtitle?: string;
    description: string;
    features: { icon: React.FC<LucideProps>; text: string }[];
    badge: ReactNode;
    badgeBg: string;
    badgeText: string;
    link: string;
};

export default function ServiceCard({
    icon: Icon,
    iconBg,
    iconColor,
    border,
    hoverShadow,
    title,
    subtitle,
    description,
    features,
    badge,
    badgeBg,
    badgeText,
    link,
}: ServiceCardProps) {
    return (
        <div className={`bg-white rounded-xl p-8 shadow-sm transition-all duration-500 border-2 transform hover:scale-105 group flex flex-col h-full ${border} ${hoverShadow}`}>
            <div className={`w-16 h-16 ${iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                <Icon className={`w-8 h-8 ${iconColor}`} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
            {subtitle && (
                <p className="text-gray-600 mb-2 leading-relaxed font-semibold">{subtitle}</p>
            )}
            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
            <div className="space-y-3 mb-6">
                {features.map((feat, i) => (
                    <div className="flex items-center space-x-3" key={i}>
                        <feat.icon className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feat.text}</span>
                    </div>
                ))}
            </div>
            {/* Footer always at bottom */}
            <div className="mt-auto">
                <div className="text-center mb-4">
                    <span className={`inline-block ${badgeBg} ${badgeText} text-xs px-3 py-1 rounded-full font-medium`}>
                        {badge}
                    </span>
                </div>
                <div className="text-center">
                    <Link
                        href={link}
                        scroll={false}
                        className="inline-block px-5 py-2 mt-2 rounded-xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow hover:scale-105 transition"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
}
