import React from "react";
import NewsletterForm from "../components/NewsletterForm";
import useFetchData from "../hooks/useFetchData";
import DataWrapper from "../components/DataWrapper";
import ImageGallery from "../components/ImageGallery";
import Navbar from "../components/Navbar";

const About = () => {
  const { data, loading, error } = useFetchData("/public/galleryImages.json");

  return (
    <div className="w-11/12 max-w-5xl mx-auto py-8">
      <header className="mb-9">
        <Navbar />
      </header>

      <main>
        <section className="mb-10">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            About The Dragon News
          </h1>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed">
            <strong>The Dragon News</strong> is your trusted source for honest,
            unbiased reporting. We are committed to providing accurate, in-depth
            journalism that puts truth above all.
          </p>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed">
            Our growing team of reporters and editors work tirelessly to cover
            stories that matter, reaching readers across the globe with
            insightful perspectives and factual integrity.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe in the freedom of the press, the responsibility of
            information, and the power of storytelling to shape a more informed
            world.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">
            Our Photo Gallery
          </h2>
          <DataWrapper loading={loading} error={error} data={data}>
            <ImageGallery images={data} />
          </DataWrapper>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">
            Stay Informed
          </h2>
          <p className="text-gray-600 mb-4">
            Subscribe to our newsletter and never miss out on top headlines and
            special reports.
          </p>
          <div className="">
            <NewsletterForm />
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
