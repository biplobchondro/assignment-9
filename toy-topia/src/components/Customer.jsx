import React from 'react';

const Customer = () => {
    return (
        <div>
      {/* RightAside Section */}
      <section className="bg-gray-100 ">
        <div className=" px-3 text-center">

          <div className="grid md:grid-cols-1 sticky top-0 h-fit gap-8">
            {/* Review 1 */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <div className="flex justify-center mb-4">
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src="https://i.pravatar.cc/150?img=32"
                  alt="Customer 1"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                Rahim Uddin
              </h3>
              <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
              <p className="text-gray-600 text-sm">
                The toy was amazing for my child! The quality is really good, and the delivery was right on time. Highly recommended
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <div className="flex justify-center mb-4">
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src="https://i.pravatar.cc/150?img=45"
                  alt="Customer 2"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                Afsana Karim
              </h3>
              <p className="text-yellow-500 text-xl mb-2">★★★★☆</p>
              <p className="text-gray-600 text-sm">
                The toy was very beautiful. My child loved it a lot. The quality is quite good for the price.
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <div className="flex justify-center mb-4">
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src="https://i.pravatar.cc/150?img=12"
                  alt="Customer 3"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                Tuhin Ahmed
              </h3>
              <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
              <p className="text-gray-600 text-sm">
                The delivery was fast, and the packaging was very nice. A perfect gift for children.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default Customer;