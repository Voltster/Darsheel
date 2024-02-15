import React from 'react';

const WhyChooseMe = () => {
  // Sample data for benefits (replace with actual data)
  const benefitsData = [
    { title: 'Innovative Solutions', description: 'We provide cutting-edge solutions tailored to your business needs.', progress: 80,
  img:`https://img.freepik.com/free-photo/top-view-statistics-presentation-with-arrow_23-2149023748.jpg?w=1060&t=st=1707943067~exp=1707943667~hmac=0302cf751c249a03f3f026fb81268f935184fe22a5acaef7a2741e81ad0df247` },
    { title: 'Trustworthy Partnerships', description: 'Build lasting partnerships with trust and collaboration at the core.', progress: 90,
  img:`https://img.freepik.com/free-photo/top-view-statistics-presentation-with-arrow_23-2149023750.jpg?t=st=1707943067~exp=1707943667~hmac=d6fccfceade783c15cc88fc06f6b262f86092abe63ba9ffaeeea081c42ef982d` },
    { title: 'Accelerated Growth', description: 'Experience accelerated growth with our proven strategies and techniques.', progress: 95,
  img:  `https://img.freepik.com/free-photo/top-view-statistics-presentation-with-arrow_23-2149023749.jpg` },
  ];

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Me?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefits with isometric icons, hover animations, and progress bars */}
          {benefitsData.map((benefit, index) => (
            <div key={index} className="border-2 border-yellow-500 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full absolute top-0 left-0 z-10 transform -rotate-6"></div>
                <div className="w-full h-full bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-3xl absolute top-0 left-0 z-20 transform rotate-6"></div>
                <div className="w-full h-full bg-white rounded-3xl absolute top-0 left-0 z-30 flex items-center justify-center">
                  <img src={`${benefit.img}`} alt={`Icon ${index + 1}`} className="w-12 h-12" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-700 mb-4">{benefit.description}</p>
              <div className="relative w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-yellow-600" style={{ width: `${benefit.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
