import React from 'react';
import { CalendarDaysIcon, EyeIcon, RocketLaunchIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const VendorSection = () => {
  const features = [
    {
      icon: <CalendarDaysIcon className="w-8 h-8 text-blue-600" />,
      title: "Established in 2023",
      description: "Founded in 2023, Hashfinity is a professional thinking IT solutions offering innovative solutions in web engineering, mobile, and content technology solutions."
    },
    {
      icon: <EyeIcon className="w-8 h-8 text-blue-600" />,
      title: "Our Values",
      description: "At Hashfinity, we are committed to innovation, integrity, and excellence. Our values are reflected in every project we undertake, fostering trust and fostering business growth."
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8 text-blue-600" />,
      title: "Successful Projects",
      description: "At Hashfinity, we take pride in our track record of successful projects that drive measurable results for our clients. From custom software integrations to cutting-edge digital solutions."
    },
    {
      icon: <LightBulbIcon className="w-8 h-8 text-blue-600" />,
      title: "Reasons for Choosing",
      description: "Choose Hashfinity for our innovation-focused IT solutions, expert team and commitment to delivering optimized results that drive business growth."
    }
  ];

  return (
    <section id='why-us' className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            We&apos;re More Than Just a Vendor, <span className="text-blue-600">We&apos;re Your Product Development Partner</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to your success, from ideation to launch and beyond
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorSection;
