import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Briefcase } from 'lucide-react';

const StatCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.8, 
  });

  const stats = [
    {
      id: 1,
      label: "Alumni & Awardee LPDP",
      value: 150,
      suffix: "+",
      icon: <Users size={36} className="text-[#B8860B]" strokeWidth={1.2} />,
      minWidth: "min-w-[120px] lg:min-w-[150px]" 
    },
    {
      id: 2,
      label: "Program Kerja",
      value: 12,
      suffix: "",
      icon: <Award size={36} className="text-[#B8860B]" strokeWidth={1.2} />,
      minWidth: "min-w-[80px] lg:min-w-[100px]"
    },
    {
      id: 3,
      label: "Kolaborasi Terbentuk",
      value: 25,
      suffix: "+",
      icon: <Briefcase size={36} className="text-[#B8860B]" strokeWidth={1.2} />,
      minWidth: "min-w-[60px] lg:min-w-[80px]"
    },
  ];

  return (
    <div className="relative w-full flex justify-center z-20 -mt-10 lg:-mt-12 px-5 font-urbanist">
      <div 
        ref={ref}
        className="bg-[#0D1B2A] rounded-2xl py-8 lg:py-10 px-10 lg:px-20 flex flex-wrap justify-center gap-10 lg:gap-32 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
      >
        {stats.map((stat) => (
          <div key={stat.id} className="flex items-center gap-6">
            <div className="flex-shrink-0 opacity-90">
              {stat.icon}
            </div>
            
            <div className={`flex flex-col ${stat.minWidth}`}>
              <span className="text-[11px] lg:text-[12px] font-semibold text-gray-400 tracking-[0.2em] uppercase mb-1">
                {stat.label}
              </span>
              
              <span className="text-[28px] lg:text-[36px] font-bold text-white leading-none tabular-nums">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} separator="." />
                ) : (
                  `0${stat.suffix}`
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCounter;
