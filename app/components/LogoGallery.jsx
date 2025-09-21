'use client'
const LogoGallery = () => {
  // List of logo images (replace these with your actual logo paths)
  const logos = [
    '/logos/scrapps-black-stars.png',
    '/logos/ml-strength-logo.png',
    '/logos/agencytwelvehundred-01.png',
    '/logos/abcopticallogo.png',
    '/logos/expedition-logo.png',
    '/logos/bnz-logo.jpg',
    '/logos/petals-logo.png',


    // Add more logos as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 p-10 mx-3 text-primary">
      {logos.map((logo, index) => (
        <div key={index} className="shadow-lg rounded-lg">
          <img src={logo} alt={`Logo ${index + 1}`} className="object-cover w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default LogoGallery;
