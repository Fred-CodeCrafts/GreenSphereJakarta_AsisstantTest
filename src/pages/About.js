const About = () => {
    return (
      <div className="container mx-auto py-10 px-4">
        {/* About Us Heading */}
        <h2 className="text-4xl font-bold text-center mb-6">About Us</h2>
  
        {/* Flex Container for Text and Image */}
        <div className="flex justify-between items-center gap-10">
          {/* Text Section */}
          <div className="w-2/3 text-lg text-justify">
            <p className="mb-6">
              At <strong>GreenSphere</strong>, we are on a mission to reshape how people
              approach sustainability. Through innovative and accessible solutions, we aim to
              inspire individuals and businesses to reduce their environmental impact. We recognize
              the urgency of addressing climate change and environmental degradation, and we are
              determined to make a lasting difference. Our team works tirelessly to develop initiatives
              that tackle the most pressing environmental issues, from reducing carbon footprints to
              promoting renewable energy sources. By encouraging sustainable living practices and
              providing the necessary resources, we empower people to make a positive impact on
              the planet every day.
            </p>
  
            <p className="mb-6">
              Our vision is a future where sustainable practices are the norm, not the exception.
              We believe that by fostering environmental awareness and creating solutions that
              are both practical and scalable, we can build a world where nature thrives alongside
              human progress. Our initiatives focus on educating communities, improving waste
              management systems, and supporting eco-friendly technologies. From the food we consume
              to the way we generate energy, GreenSphere is dedicated to leading the way in
              environmental innovation. We know that sustainable change is a collaborative effort,
              and we are committed to working alongside individuals, organizations, and governments
              to make the world a better place for generations to come.
            </p>
          </div>
  
          {/* Image Section */}
          <div className="w-1/3">
            <img
              src="Designer.png"
              alt="Our Team"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  