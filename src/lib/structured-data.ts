export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hashfinity",
  "description": "Leading software development company specializing in custom web applications, mobile apps, and digital solutions.",
  "url": "https://hashfinity.tech",
  "logo": "https://hashfinity.tech/logo1.png",
  "foundingDate": "2020",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8421917322",
    "contactType": "Customer Service",
    "email": "business@hashfinity.tech",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4, Roshan Apartments, Pudumjee Park, New Nana Peth",
    "addressLocality": "Pune",
    "postalCode": "411002",
    "addressCountry": "India"
  },
  "sameAs": [
    "https://linkedin.com/company/hashfinity",
    "https://github.com/hashfinity"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "Custom Software Development",
      "description": "Custom web and mobile application development services"
    },
    {
      "@type": "Service", 
      "name": "Web Application Development",
      "description": "Modern web application development using React, Node.js, and other technologies"
    },
    {
      "@type": "Service",
      "name": "Mobile App Development", 
      "description": "Cross-platform mobile app development using Flutter and React Native"
    },
    {
      "@type": "Service",
      "name": "SaaS Development",
      "description": "Software as a Service platform development and deployment"
    },
    {
      "@type": "Service",
      "name": "API Development & Integration",
      "description": "RESTful API development and third-party system integrations"
    }
  ]
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Hashfinity",
  "image": "https://hashfinity.tech/logo1.png",
  "telephone": "+91-8421917322",
  "email": "business@hashfinity.tech",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4, Roshan Apartments, Pudumjee Park, New Nana Peth",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411002",
    "addressCountry": "India"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "18.5204",
    "longitude": "73.8567"
  },
  "url": "https://hashfinity.tech",
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$"
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Hashfinity",
  "description": "Transform your vision into digital excellence with custom software development services",
  "url": "https://hashfinity.tech",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://hashfinity.tech/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
