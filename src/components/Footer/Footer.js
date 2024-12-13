import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-6 lg:px-20 py-12">
        
        <div className="flex justify-between items-center mb-12">
          <div>
            <img
              className="w-[150px]"
              src="https://stonepedia.in/wp-content/uploads/2024/10/logoo-1.png"
              alt="Logo"
            />
          </div>
          <div>
            <input
              type="search"
              placeholder="Your email address"
              className="hidden sm:block text-black border rounded-md px-3 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h1 className="text-3xl  font-semibold mb-4">Product</h1>
            <a href="https://stonepedia.in/" className="block text-lg mb-2 hover:text-red-500">
              StonePediaExclusive
            </a>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
              Best Seller
            </a>
            <a href="https://stonepedia.in/" className="block  text-lg  mb-2 hover:text-red-500">
              Premium Stones
            </a>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
              Shop By Category
            </a>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
            Applications
          </a>
          <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
          Customer Review
        </a>
          </div>

          <div>
            <h1 className="text-3xl  font-semibold mb-4">Support</h1>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
              Request For Exclusive
            </a>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
              FAQs
            </a>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
              Blogs
            </a>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
              Help Center
            </a>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
              Login
            </a>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
              SigUp
            </a>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
              ReportComplaint
            </a>
          </div>

          <div>
            <h1 className="text-3xl  font-semibold mb-4">Company</h1>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
              About Us
            </a>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
              Careers
            </a>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
              Privacy Policy
            </a>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
              Terms of Service
            </a>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
              CookiesPolicy
            </a>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
              CancellationPolicy
            </a>
            <a href="https://stonepedia.in/" className="block text-lg  mb-2 hover:text-red-500">
              Disclaimer
            </a>
          </div>

          <div>
            <h1 className="text-3xl  font-semibold mb-4">Reach Us</h1>
            <a href="https://www.instagram.com/" className="block text-lg  mb-2 hover:text-red-500">
              Instagram
            </a>
            <a href="https://www.twitter.com/" className="block text-lg  mb-2 hover:text-red-500">
              Twitter
            </a>
            <a href="https://www.facebook.com/" className="block text-lg  mb-2 hover:text-red-500">
              Facebook
            </a>
            <a href="https://www.linkedin.com/" className="block text-lg mb-2 hover:text-red-500">
              LinkedIn
            </a>
            <a href="https://www.youtube.com/" className="block text-lg  mb-2 hover:text-red-500">
              Youtube
            </a>
            <a href="https://www.linkedin.com/" className="block text-lg  mb-2 hover:text-red-500">
              Feedback
            </a>
            <a href="https://www.linkedin.com/" className="block text-lg  mb-2 hover:text-red-500">
              PatnerWithUs
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <hr className="my-8 border-gray-600" />
        <p className="text-center text-lg">
          Copyright © 2024 - StonePedia Private Limited. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
