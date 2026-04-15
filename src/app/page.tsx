import React from 'react';

export default function CoffeeLanding() {
  const menu = {
    coffee: [
      { name: 'Espresso', price: '3.50', desc: 'Intense and bold' },
      { name: 'Cappuccino', price: '4.50', desc: 'Frothy and creamy' },
      { name: 'Latte', price: '4.80', desc: 'Smooth and milky' },
      { name: 'Mocha', price: '5.00', desc: 'Chocolatey goodness' },
    ],
    drinks: [
      { name: 'Matcha Latte', price: '5.20', desc: 'Earthy and vibrant' },
      { name: 'Iced Tea', price: '3.80', desc: 'Refreshing and crisp' },
      { name: 'Hot Chocolate', price: '4.20', desc: 'Rich and cozy' },
    ],
    pastries: [
      { name: 'Butter Croissant', price: '3.00', desc: 'Flaky and buttery' },
      { name: 'Pain au Chocolat', price: '3.50', desc: 'Chocolatey delight' },
      { name: 'Cinnamon Roll', price: '4.00', desc: 'Sweet and spicy' },
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#4A3728] font-sans">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center bg-fixed" style={{ backgroundColor: '#C6A668' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            The Perfect Roast <br /> In Every Cup
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the art of coffee brewing. From bean to cup, we bring you the finest 
            specialty blends and artisanal pastries in a cozy atmosphere.
          </p>
          <a href="#menu" className="bg-white text-[#4A3728] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
            View Our Menu
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-16 text-[#4A3728]">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(menu).map(([category, items]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold capitalize border-b-2 border-[#C6A668] pb-2 text-[#8B5E3C]">
                {category}
              </h3>
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={item.name} className="flex justify-between items-start group">
                    <div className="flex-1">
                      <div className="flex justify-between font-medium">
                        <span className="text-lg">{item.name}</span>
                        <span className="text-[#8B5E3C]">${item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#EADDCC] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 text-[#4A3728]">Visit Us Or Get In Touch</h2>
          <p className="text-gray-700 mb-12">Have a question or want to reserve a table? We'd love to hear from you.</p>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left bg-white p-8 rounded-2xl shadow-xl">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold">Name</label>
              <input type="text" className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A668] outline-none" placeholder="Your name" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold">Email</label>
              <input type="email" className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A668] outline-none" placeholder="email@example.com" />
            </div>
            <div className="flex flex-col space-y-2 md:col-span-2">
              <label className="text-sm font-semibold">Message</label>
              <textarea className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A668] outline-none h-32" placeholder="How can we help you?"></textarea>
            </div>
            <button className="md:col-span-2 bg-[#4A3728] text-white py-3 rounded-lg font-bold hover:bg-[#3a2b22] transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        <p>&copy; 2026 Coffee Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}