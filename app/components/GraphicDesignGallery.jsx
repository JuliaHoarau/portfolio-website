'use client'
const GraphicDesignGallery = () => {
  // List of logo images (replace these with your actual logo paths)
  const graphics = [
    '/graphicdesign/beezee-flyer-01.png',
    '/graphicdesign/clove-honey.jpg',
    '/graphicdesign/invite.png',
    '/graphicdesign/julia-icon.png',
    '/graphicdesign/net-security.png',
    '/graphicdesign/shadows-book-cover.png',
    '/graphicdesign/stardust-cover.png',
    '/graphicdesign/edna-space-01.png',
    // Add more logos as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 p-10 mx-3 text-primary">
      {graphics.map((graphic, index) => (
        <div key={index} className="shadow-lg rounded-lg">
          <img src={graphic} alt={`Graphic Design ${index + 1}`} className="object-cover w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default GraphicDesignGallery
