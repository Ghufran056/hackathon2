import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] p-6 w-full">
        {/* Card 1 */}
        <div className="bg-blue-100 rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-bold mb-2 w-[284px]" >The Best Platform for Car Rental</h2>
          <p className="text-sm text-gray-700 mb-4">
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md mb-4">Rental Car</button>
          <div className="flex justify-center">
            <div className="w-[200px] h-[100px]">
              <img
                src="/cars/image1.png"
                alt="Car"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-200 rounded-lg p-6 shadow-md border border-yellow-400">
          <h2 className="text-lg font-bold mb-2">Easy way to rent a car at a low price</h2>
          <p className="text-sm text-gray-700 mb-4">
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
          <button className="bg-pink-500 text-white py-2 px-4 rounded-md mb-4">Rental Car</button>
          <div className="flex justify-center">
            <div className="w-[200px] h-[100px]">
              <img
                src="/cars/image2.png"
                alt="Car"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 w-full">
        {/* Search Section */}
        <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg shadow-md mb-6">
          <div className="flex space-x-4">
            <div>
              <label className="block text-sm font-bold mb-1">Pick-Up</label>
              <input
                type="text"
                placeholder="Location"
                className="border rounded-md p-2 w-[150px]"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Date</label>
              <input
                type="date"
                className="border rounded-md p-2 w-[150px]"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Time</label>
              <input
                type="time"
                className="border rounded-md p-2 w-[150px]"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div>
              <label className="block text-sm font-bold mb-1">Drop-Off</label>
              <input
                type="text"
                placeholder="Location"
                className="border rounded-md p-2 w-[150px]"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Date</label>
              <input
                type="date"
                className="border rounded-md p-2 w-[150px]"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Time</label>
              <input
                type="time"
                className="border rounded-md p-2 w-[150px]"
              />
            </div>
          </div>
        </div>

        {/* Popular Cars Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Popular Cars</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
                <div
                  className="border rounded-lg p-4 shadow-md text-center"
                >
                  <div className="w-full h-[100px] mb-4 bg-gray-100 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <span><img src="/cars/image1.png" alt="car Image"  /></span>
                  </div>
                  <h3 className="font-bold mb-2">Car Model</h3>
                  <p className="text-sm text-gray-500 mb-2">Sport</p>
                  <div className="flex justify-center space-x-2 text-sm mb-4">
                    <span>70L</span>
                    <span>Manual</span>
                    <span>4 People</span>
                  </div>
                  <p className="font-bold mb-2">$80.00/day</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                    Rent Now
                  </button>
                </div>

                <div
                  className="border rounded-lg p-4 shadow-md text-center"
                >
                  <div className="w-full h-[100px] mb-4 bg-gray-100 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <span><img src="/cars/image2.png" alt="car Image" /></span>
                  </div>
                  <h3 className="font-bold mb-2">Car Model</h3>
                  <p className="text-sm text-gray-500 mb-2">Sport</p>
                  <div className="flex justify-center space-x-2 text-sm mb-4">
                    <span>70L</span>
                    <span>Manual</span>
                    <span>4 People</span>
                  </div>
                  <p className="font-bold mb-2">$80.00/day</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                    Rent Now
                  </button>
                </div>

                <div
                  className="border rounded-lg p-4 shadow-md text-center"
                >
                  <div className="w-full h-[100px] mb-4 bg-gray-100 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <span><img src="/cars/image.png" alt="car Image" /></span>
                  </div>
                  <h3 className="font-bold mb-2">Car Model</h3>
                  <p className="text-sm text-gray-500 mb-2">Sport</p>
                  <div className="flex justify-center space-x-2 text-sm mb-4">
                    <span>70L</span>
                    <span>Manual</span>
                    <span>4 People</span>
                  </div>
                  <p className="font-bold mb-2">$80.00/day</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                    Rent Now
                  </button>
                </div>

                <div
                  className="border rounded-lg p-4 shadow-md text-center"
                >
                  <div className="w-full h-[100px] mb-4 bg-gray-100 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <span><img src="/cars/image2.png" alt="car Image" /></span>
                  </div>
                  <h3 className="font-bold mb-2">Car Model</h3>
                  <p className="text-sm text-gray-500 mb-2">Sport</p>
                  <div className="flex justify-center space-x-2 text-sm mb-4">
                    <span>70L</span>
                    <span>Manual</span>
                    <span>4 People</span>
                  </div>
                  <p className="font-bold mb-2">$80.00/day</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                    Rent Now
                  </button>
                </div>
            
          </div>
        </div>

        {/* Recommendation Cars Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Recommended Cars</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
                <div
                  className="border rounded-lg p-4 shadow-md text-center"
                >
                  <div className="w-full h-[100px] mb-4 bg-gray-100 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <span><img src="/cars/image3.png" alt="car image" /></span>
                  </div>
                  <h3 className="font-bold mb-2">Car Model </h3>
                  <p className="text-sm text-gray-500 mb-2">SUV</p>
                  <div className="flex justify-center space-x-2 text-sm mb-4">
                    <span>70L</span>
                    <span>Manual</span>
                    <span>4 People</span>
                  </div>
                  <p className="font-bold mb-2">$80.00/day</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                    Rent Now
                  </button>
                </div>

                <div
                  className="border rounded-lg p-4 shadow-md text-center"
                >
                  <div className="w-full h-[100px] mb-4 bg-gray-100 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <span><img src="/cars/image4.png" alt="car image" /></span>
                  </div>
                  <h3 className="font-bold mb-2">Car Model </h3>
                  <p className="text-sm text-gray-500 mb-2">SUV</p>
                  <div className="flex justify-center space-x-2 text-sm mb-4">
                    <span>70L</span>
                    <span>Manual</span>
                    <span>4 People</span>
                  </div>
                  <p className="font-bold mb-2">$80.00/day</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                    Rent Now
                  </button>
                </div>

                <div
                  className="border rounded-lg p-4 shadow-md text-center"
                >
                  <div className="w-full h-[100px] mb-4 bg-gray-100 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <span><img src="/cars/image5.png" alt="car image" /></span>
                  </div>
                  <h3 className="font-bold mb-2">Car Model </h3>
                  <p className="text-sm text-gray-500 mb-2">SUV</p>
                  <div className="flex justify-center space-x-2 text-sm mb-4">
                    <span>70L</span>
                    <span>Manual</span>
                    <span>4 People</span>
                  </div>
                  <p className="font-bold mb-2">$80.00/day</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                    Rent Now
                  </button>
                </div>

                <div
                  className="border rounded-lg p-4 shadow-md text-center"
                >
                  <div className="w-full h-[100px] mb-4 bg-gray-100 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <span><img src="/cars/image4.png" alt="car image" /></span>
                  </div>
                  <h3 className="font-bold mb-2">Car Model </h3>
                  <p className="text-sm text-gray-500 mb-2">SUV</p>
                  <div className="flex justify-center space-x-2 text-sm mb-4">
                    <span>70L</span>
                    <span>Manual</span>
                    <span>4 People</span>
                  </div>
                  <p className="font-bold mb-2">$80.00/day</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                    Rent Now
                  </button>
                </div>
                <div
                  className="border rounded-lg p-4 shadow-md text-center"
                >
                  <div className="w-full h-[100px] mb-4 bg-gray-100 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <span><img src="/cars/image6.png" alt="car image" /></span>
                  </div>
                  <h3 className="font-bold mb-2">Car Model </h3>
                  <p className="text-sm text-gray-500 mb-2">SUV</p>
                  <div className="flex justify-center space-x-2 text-sm mb-4">
                    <span>70L</span>
                    <span>Manual</span>
                    <span>4 People</span>
                  </div>
                  <p className="font-bold mb-2">$80.00/day</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                    Rent Now
                  </button>
                </div>
                <div
                  className="border rounded-lg p-4 shadow-md text-center"
                >
                  <div className="w-full h-[100px] mb-4 bg-gray-100 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <span><img src="/cars/image7.png" alt="car image" /></span>
                  </div>
                  <h3 className="font-bold mb-2">Car Model </h3>
                  <p className="text-sm text-gray-500 mb-2">SUV</p>
                  <div className="flex justify-center space-x-2 text-sm mb-4">
                    <span>70L</span>
                    <span>Manual</span>
                    <span>4 People</span>
                  </div>
                  <p className="font-bold mb-2">$80.00/day</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                    Rent Now
                  </button>
                </div>
                <div
                  className="border rounded-lg p-4 shadow-md text-center"
                >
                  <div className="w-full h-[100px] mb-4 bg-gray-100 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <span><img src="/cars/image6.png" alt="car image" /></span>
                  </div>
                  <h3 className="font-bold mb-2">Car Model </h3>
                  <p className="text-sm text-gray-500 mb-2">SUV</p>
                  <div className="flex justify-center space-x-2 text-sm mb-4">
                    <span>70L</span>
                    <span>Manual</span>
                    <span>4 People</span>
                  </div>
                  <p className="font-bold mb-2">$80.00/day</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                    Rent Now
                  </button>
                </div>
                <div
                  className="border rounded-lg p-4 shadow-md text-center"
                >
                  <div className="w-full h-[100px] mb-4 bg-gray-100 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <span><img src="/cars/image7.png" alt="car image" /></span>
                  </div>
                  <h3 className="font-bold mb-2">Car Model </h3>
                  <p className="text-sm text-gray-500 mb-2">SUV</p>
                  <div className="flex justify-center space-x-2 text-sm mb-4">
                    <span>70L</span>
                    <span>Manual</span>
                    <span>4 People</span>
                  </div>
                  <p className="font-bold mb-2">$80.00/day</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                    Rent Now
                  </button>
                </div>
            
          </div>
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md">
            Show more cars
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}


