'use client';

import { useState, useEffect, useRef } from 'react';

export default function MarqueeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const partners = [
    {
      name: "Partner 1",
      width: 151,
      height: 32,
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="151" height="32" viewBox="0 0 151 32" fill="none">
          <rect width="151" height="32" rx="4" fill="#E5E7EB"/>
          <text x="75.5" y="20" textAnchor="middle" className="fill-gray-600 text-sm font-semibold">Partner</text>
        </svg>
      )
    },
    {
      name: "Partner 2", 
      width: 108,
      height: 32,
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="108" height="32" viewBox="0 0 108 32" fill="none">
          <rect width="108" height="32" rx="4" fill="#E5E7EB"/>
          <text x="54" y="20" textAnchor="middle" className="fill-gray-600 text-sm font-semibold">Tech Co</text>
        </svg>
      )
    },
    {
      name: "Partner 3",
      width: 139,
      height: 32,
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="139" height="32" viewBox="0 0 139 32" fill="none">
          <rect width="139" height="32" rx="4" fill="#E5E7EB"/>
          <text x="69.5" y="20" textAnchor="middle" className="fill-gray-600 text-sm font-semibold">Solutions</text>
        </svg>
      )
    },
    {
      name: "Partner 4",
      width: 137,
      height: 32,
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="137" height="32" viewBox="0 0 137 32" fill="none">
          <rect width="137" height="32" rx="4" fill="#E5E7EB"/>
          <text x="68.5" y="20" textAnchor="middle" className="fill-gray-600 text-sm font-semibold">Digital</text>
        </svg>
      )
    },
    {
      name: "Partner 5",
      width: 137,
      height: 32,
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="137" height="32" viewBox="0 0 137 32" fill="none">
          <rect width="137" height="32" rx="4" fill="#E5E7EB"/>
          <text x="68.5" y="20" textAnchor="middle" className="fill-gray-600 text-sm font-semibold">Systems</text>
        </svg>
      )
    },
    {
      name: "DraftBit",
      width: 137,
      height: 32,
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="137" height="32" viewBox="0 0 137 32" fill="none">
          <g clipPath="url(#clip0_2856_17259)">
            <path d="M17.9924 0.58729L28.2782 6.35924C29.7135 7.16467 30.601 8.67531 30.601 10.3128V21.6873C30.601 23.3247 29.7135 24.8353 28.2782 25.6407L17.9924 31.4127C16.597 32.1957 14.8907 32.1957 13.4952 31.4127L3.20956 25.6407C1.77427 24.8353 0.886719 23.3247 0.886719 21.6873V10.3128C0.886719 8.67531 1.77427 7.16467 3.20956 6.35924L13.4952 0.58729C14.8907 -0.195763 16.597 -0.195763 17.9924 0.58729ZM2.60101 10.3588V21.6873C2.60101 22.7038 3.153 23.6433 4.0485 24.1458L14.1881 29.8357C14.3194 29.8866 14.4594 29.913 14.601 29.913C15.2322 29.913 15.7439 29.4013 15.7439 28.7701V19.6137C15.7439 18.1214 14.9132 16.7532 13.5893 16.0647L12.8345 15.6723C12.6565 15.5965 12.4807 15.5135 12.3077 15.4231L2.60101 10.3588ZM13.2351 14.4099C15.0569 15.3604 16.4357 15.3604 18.2576 14.4099L28.1048 8.88166C27.8624 8.32644 27.4418 7.85269 26.8916 7.54393L17.1536 2.08227C16.2792 1.59163 15.2085 1.59163 14.3342 2.08227L4.61464 7.54393C4.0644 7.85269 3.64387 8.32644 3.40137 8.88166L13.2351 14.4099ZM15.7439 4C17.8867 4 19.636 5.05314 19.7391 6.37647L19.7439 8.64286C19.7439 10.0236 17.953 11.1428 15.7439 11.1428C13.5347 11.1428 11.7439 10.0236 11.7439 8.64286V6.37647C11.8517 5.05314 13.601 4 15.7439 4ZM15.7443 8C17.6 8 19.1043 7.24784 19.1043 6.32C19.1043 5.39216 17.6 4.64 15.7443 4.64C13.8886 4.64 12.3843 5.39216 12.3843 6.32C12.3843 7.24784 13.8886 8 15.7443 8Z" fill="#717680"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M46.3583 16.8587C46.3583 18.1404 46.6879 19.1704 47.3471 19.9485C48.0062 20.7268 48.8759 21.1158 49.9563 21.1158C50.9999 21.1158 51.8513 20.7222 52.5105 19.9349C53.1697 19.1475 53.4993 18.113 53.4993 16.8313C53.4993 15.5678 53.1789 14.5608 52.538 13.8101C51.8972 13.0594 51.0457 12.684 49.9837 12.684C48.9217 12.684 48.052 13.0639 47.3745 13.8238C46.6971 14.5837 46.3583 15.5954 46.3583 16.8587ZM56.5754 3.70288V23.5877H54.7752C54.2987 23.5877 53.8623 23.3203 53.6459 22.8956C53.5298 22.6679 53.4718 22.4465 53.4718 22.2313C53.1021 22.6539 52.8081 23.0088 52.1123 23.3933C51.4164 23.7779 50.4964 23.9173 49.5992 23.9173C47.6949 23.9173 46.1477 23.249 44.9575 21.9124C43.7675 20.5756 43.1724 18.8911 43.1724 16.8587C43.1724 14.8996 43.772 13.2425 44.9713 11.8875C46.1707 10.5326 47.6949 9.85508 49.5443 9.85508C50.6063 9.85508 51.4623 10.0473 52.1123 10.4318C52.7622 10.8164 53.2155 11.265 53.4718 11.7777V3.70288H56.5754ZM67.9438 10.0473V13.2883H67.534C65.1353 13.2883 63.936 14.5974 63.936 17.2157V23.5877H60.7501V10.2121H62.8162C63.1827 10.2121 63.5075 10.4484 63.6203 10.7972L63.936 11.7735C64.0881 11.4566 64.5107 10.753 65.2501 10.4002C65.9895 10.0473 66.8474 10.0473 67.7262 10.0473H67.9438ZM69.7291 19.9623C69.7291 18.827 70.0998 17.9161 70.8414 17.2295C71.5829 16.5429 72.558 16.108 73.7665 15.925L77.1996 15.403C77.8588 15.3115 78.1884 14.9911 78.1884 14.4418C78.1884 13.8376 77.9778 13.3478 77.5567 12.9724C77.1356 12.5971 76.5038 12.4093 75.6615 12.4093C74.8559 12.4093 74.215 12.6337 73.739 13.0823C73.2629 13.5308 72.9883 14.1122 72.9151 14.8263L70.0438 14.7989C70.172 13.5903 70.7087 11.9287 71.7341 11.0773C72.7593 10.2259 74.0594 9.80015 75.6341 9.80015C77.5749 9.80015 79.0077 10.2671 79.9324 11.2009C80.8571 12.1347 81.3194 13.334 81.3194 14.7989V21.4454C81.3194 22.3243 81.3743 23.0383 81.4841 23.5877H79.771C79.5899 23.5877 79.4103 23.5544 79.2413 23.4897C78.6732 23.2717 78.389 22.9171 78.389 22.4258C77.7553 23.4821 76.1284 23.9996 74.2608 23.9996C72.9059 23.9996 71.8118 23.6014 70.9788 22.805C70.1456 22.0085 69.7291 21.0609 69.7291 19.9623ZM74.8651 21.5003C75.8539 21.5003 76.6549 21.2302 77.2683 20.6901C77.8817 20.1499 78.1884 19.2665 78.1884 18.0397V17.4355L74.7003 17.9574C73.5101 18.1588 72.9151 18.7629 72.9151 19.7701C72.9151 20.2461 73.089 20.6535 73.4369 20.9923C73.7847 21.3309 74.2608 21.5003 74.8651 21.5003ZM91.097 6.84448C90.566 6.84448 90.1037 6.99553 89.71 7.29765C89.3164 7.59976 89.1195 8.12617 89.1195 8.87689V10.2121H92.223V12.9862H89.1195V23.5877H85.906V12.9862H83.5715V10.2121H84.4884C85.2713 10.2121 85.906 9.57744 85.906 8.79451C85.906 7.31137 86.3363 6.13954 87.1969 5.27895C88.0575 4.41838 89.1836 3.98809 90.5751 3.98809H92.223V6.84448H91.097ZM99.7189 6.17475V10.2671H102.493V13.0959H99.7189V19.3031C99.7189 19.889 99.8563 20.3147 100.131 20.5802C100.406 20.8457 100.836 20.9785 101.422 20.9785H101.859V23.8074H100.57C99.3252 23.8074 98.3457 23.455 97.6316 22.75C96.9175 22.0451 96.5604 21.07 96.5604 19.825V13.0959H94.0885V10.2671H94.7752C95.4527 10.2671 95.9653 10.0748 96.3133 9.69029C96.6611 9.30578 96.8351 8.80225 96.8351 8.1797V6.17475H99.7189ZM105.075 3.6395H108.178V11.8242C108.435 11.3114 108.967 10.8903 109.617 10.5058C110.267 10.1213 111.301 9.87198 112.363 9.87198C114.213 9.87198 115.69 10.4692 116.89 11.8242C118.089 13.1791 118.49 14.8847 118.49 16.8439C118.49 18.8764 118.094 20.5123 116.903 21.8489C115.714 23.1855 114.056 23.9215 112.152 23.9215C111.255 23.9215 110.444 23.7145 109.749 23.33C109.054 22.9454 108.548 22.5905 108.178 22.1679C108.178 22.3831 108.12 22.6045 108.004 22.8323C107.787 23.2569 107.351 23.5243 106.875 23.5243H105.075V3.6395ZM114.296 19.9623C114.974 19.1932 115.313 18.1588 115.313 16.8587C115.313 15.5587 114.983 14.538 114.324 13.7963C113.665 13.0548 112.795 12.684 111.715 12.684C110.671 12.684 109.811 13.0548 109.134 13.7963C108.455 14.538 108.117 15.5587 108.117 16.8587C108.117 18.1404 108.455 19.1658 109.134 19.9349C109.811 20.7038 110.671 21.0884 111.715 21.0884C112.777 21.0884 113.637 20.713 114.296 19.9623ZM121.602 13.3579H120.286V10.1889H123.455V10.2121H124.761V23.5877H121.602V13.3579ZM121.712 6.97123C121.31 6.56841 121.108 6.0832 121.108 5.51558C121.108 4.94797 121.31 4.45817 121.712 4.0462C122.115 3.63422 122.6 3.42822 123.168 3.42822C123.753 3.42822 124.248 3.62963 124.651 4.03246C125.054 4.43528 125.255 4.92965 125.255 5.51558C125.255 6.0832 125.054 6.56841 124.651 6.97123C124.248 7.37406 123.753 7.57547 123.168 7.57547C122.6 7.57547 122.115 7.37406 121.712 6.97123ZM132.918 6.11982V10.2121H135.691V13.041H132.918V19.2482C132.918 19.8341 133.056 20.2598 133.33 20.5253C133.605 20.7909 134.035 20.9236 134.62 20.9236H135.058V23.7525H133.769C132.524 23.7525 131.544 23.4001 130.831 22.6951C130.116 21.9901 129.76 21.0151 129.76 19.7701V13.041H127.287V10.2121H127.974C128.651 10.2121 129.164 10.0199 129.512 9.63536C129.86 9.25085 130.034 8.74732 130.034 8.12478V6.11982H132.918Z" fill="#717680"/>
          </g>
          <defs>
            <clipPath id="clip0_2856_17259">
              <rect width="135.467" height="32" fill="white" transform="translate(0.810547)"/>
            </clipPath>
          </defs>
        </svg>
      )
    }
  ];

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Duplicate partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section ref={sectionRef} className="py-8 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className={`text-center mb-4 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies
          </h2>
        </div>

        {/* Marquee Container */}
        <div className={`relative transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}>
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Marquee */}
          <div className="marquee-container overflow-hidden">
            <div className="marquee-content flex items-center gap-12 animate-marquee">
              {duplicatedPartners.map((partner, index) => (
                <div 
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-16 px-6 transition-all duration-300 hover:scale-110 hover:opacity-80 grayscale hover:grayscale-0"
                  style={{ minWidth: `${partner.width}px` }}
                >
                  {partner.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 128px,
            black calc(100% - 128px),
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 128px,
            black calc(100% - 128px),
            transparent
          );
        }
        
        .marquee-content {
          animation: marquee 40s linear infinite;
          width: fit-content;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .marquee-content:hover {
          animation-play-state: paused;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .marquee-content {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
