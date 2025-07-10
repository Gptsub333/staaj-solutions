// components/WhyChooseUsItem.tsx
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface WhyChooseUsItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    stats?: string;
    details?: string[];
    finalLine?: string;
    image: string | string[]; // string for regular, string[] for multiple (Our People)
    reverse?: boolean;
    isPeopleSection?: boolean;
}

export const WhyChooseUsItem: React.FC<WhyChooseUsItemProps> = ({
    icon, title, description, stats, details, finalLine, image, reverse, isPeopleSection = false
}) => (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch min-h-[600px] md:min-h-[500px]`}>
        {/* IMAGE */}
        <div className="md:w-2/5 w-full bg-gray-100 flex items-center justify-center p-4">
            {/* "Our People" - Mobile: stacked, Desktop: side by side */}
            {isPeopleSection && Array.isArray(image) ? (
                <>
                    {/* Mobile - Stacked */}
                    <div className="flex flex-col items-center gap-4 w-full md:hidden">
                        {image.map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt={`Person ${idx + 1}`}
                                className="w-32 h-32 rounded-lg border-4 border-white shadow-lg object-cover"
                                loading="lazy"
                            />
                        ))}
                    </div>
                    {/* Desktop - Side by side */}
                    <div className="hidden md:flex flex-col items-center gap-6 w-full">
                        {image.map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt={`Person ${idx + 1}`}
                                className="w-40 h-40 rounded-lg border-4 border-white shadow-lg object-cover"
                                loading="lazy"
                            />
                        ))}
                    </div>
                </>
            ) : (
                // All other sections: single image
                <div className="w-full h-full max-w-md max-h-80 relative">
                    <img
                        src={typeof image === "string" ? image : ""}
                        alt={title}
                        className="w-full h-full object-contain rounded-lg"
                        loading="lazy"
                    />
                </div>
            )}

        </div>
        {/* TEXT */}
        <div className="md:w-3/5 w-full p-6 md:p-8 flex flex-col justify-center">
            <div className="text-indigo-600 mb-3 md:mb-4 transition-transform duration-200 inline-block">
                {React.cloneElement(icon as React.ReactElement, { className: "w-7 h-7 md:w-8 md:h-8" })}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{title}</h3>
            <div className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                {description.split('\n\n').map((paragraph, pIndex) => {
                    const lines = paragraph.split('\n');
                    return (
                        <div key={pIndex} className={pIndex > 0 ? 'mt-4' : ''}>
                            {lines.map((line, lIndex) => {
                                if (line.startsWith('**') && line.endsWith('**')) {
                                    const name = line.slice(2, -2);
                                    return (
                                        <h4 key={lIndex} className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                                            {name}
                                        </h4>
                                    );
                                } else if (lIndex === 1 && lines[0].startsWith('**')) {
                                    return (
                                        <p key={lIndex} className="text-sm md:text-base font-semibold text-indigo-600 mb-2">
                                            {line}
                                        </p>
                                    );
                                } else if (line.trim()) {
                                    return (
                                        <p key={lIndex} className="text-gray-600 leading-relaxed">
                                            {line}
                                        </p>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    );
                })}
            </div>
            {stats && <div className="text-sm md:text-base font-semibold text-indigo-700 mb-4">{stats}</div>}
            {details && details.length > 0 && (
                <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                        {details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                {detail}
                            </li>
                        ))}
                    </ul>
                    {finalLine && (
                        <p className="mt-4 text-sm md:text-base font-medium text-indigo-700 italic">
                            {finalLine}
                        </p>
                    )}
                </div>
            )}
        </div>
    </div>
);
