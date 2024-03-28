'use client'
const LogoGallery = () => {
  // List of logo images (replace these with your actual logo paths)
  const logos = [
    '/logos/ml-strength-logo.png',
    '/logos/abcopticallogo.png',
    '/logos/expedition-logo.png',
    '/logos/bnz-logo.jpg',
    '/logos/petals-logo.png',

    // Add more logos as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10  p-5 lg:p-10 my-5 lg:mx-3 text-primary">
      {logos.map((logo, index) => (
        <div key={index} className="shadow-lg rounded-lg">
          <img src={logo} alt={`Logo ${index + 1}`} className="object-cover w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default LogoGallery;
