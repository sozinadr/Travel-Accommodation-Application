import React, { useState } from "react";

const faqs = [
  {
    question: "How do I add a new accommodation listing?",
    answer:
      'Navigate to the "Add Listing" tab and fill out the required information including property details, images, and pricing. Once all information is entered, click "Submit".',
  },
  {
    question: "How can I respond to booking inquiries?",
    answer:
      'Go to the "Inquiries" tab. Here you can view all booking inquiries and respond directly to the potential guests.',
  },
  {
    question: "How do I update an existing listing?",
    answer:
      'In the "Manage Listings" tab, find the listing you wish to update. Click "Edit" and make the necessary changes. Remember to save your updates.',
  },
  {
    question: "How do I handle cancellations?",
    answer:
      'Under the "Bookings" tab, select the booking you wish to cancel. Click on "Cancel Booking" and confirm the cancellation. The guest will be notified accordingly.',
  },
  // Add more FAQs as needed
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-2xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="mb-6 text-3xl font-semibold text-center">
            Frequently Asked Questions
          </h1>
          <div className="mt-5 space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg px-5 py-3 hover:shadow-lg cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <p className="font-semibold text-lg">{faq.question}</p>
                {activeIndex === index && (
                  <p className="text-gray-600 mt-2 transition-all ease-in-out duration-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
