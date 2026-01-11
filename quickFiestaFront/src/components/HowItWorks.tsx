import React from 'react';
import { FaClipboardList, FaPhoneAlt, FaSmile } from 'react-icons/fa';

const steps = [
  {
    icon: <FaClipboardList size={48} className="text-[#FF6600]" />,
    title: 'Request a Free Quote',
    description:
      'Fill out a quick form with your party details, and we’ll get back to you personally with a recommended package.',
  },
  {
    icon: <FaPhoneAlt size={48} className="text-[#FF6600]" />,
    title: 'We Handle the Details',
    description:
      'We coordinate vendors, decorations, and entertainment so you don’t have to stress. From one feature to a full setup, we’ve got it covered.',
  },
  {
    icon: <FaSmile size={48} className="text-[#FF6600]" />,
    title: 'Celebrate Stress-Free',
    description:
      'Enjoy the day with your child while we make sure everything runs smoothly. No calls, no chaos, just fun.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#FFF9F0] font-inter">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-poppins">
          How It Works
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          Planning a birthday party doesn’t have to be stressful. We make it simple from start to finish.
        </p>

        <div className="grid md:grid-cols-3 gap-10 items-stretch">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition flex flex-col h-full"
            >
              <div className="mb-6 flex justify-center">
                <div className="bg-[#FFF3E0] rounded-full p-6 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 font-poppins">
                {step.title}
              </h3>

              <p className="text-gray-700 flex-grow">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
