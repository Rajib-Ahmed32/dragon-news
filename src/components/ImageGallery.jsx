import React from "react";

const ImageGallery = ({ images }) => (
  <section className="mt-8">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((img, idx) => (
        <div key={idx} className="overflow-hidden rounded-md shadow-sm">
          <img
            src={img.image_url}
            alt={img.alt}
            className="w-full h-32 object-cover hover:scale-105 transition-transform"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </section>
);

export default ImageGallery;
