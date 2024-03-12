'use client'
const LogoGallery = () => {
  // List of logo images (replace these with your actual logo paths)
  const logos = [
    '/logos/abcopticallogo.png',
    '/logos/bnz-logo.jpg',
    '/logos/expedition-logo.png',
    '/logos/jellyship-logo.png',
    '/logos/ml-strength-logo.png',
    '/logos/petals-logo.png',
    // Add more logos as needed
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {logos.map((logo, index) => (
        <div key={index} className="shadow-lg rounded-lg">
          <img src={logo} alt={`Logo ${index + 1}`} className="object-cover w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default LogoGallery;
