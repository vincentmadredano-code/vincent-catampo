
const products = [
  {
    name: "Caramel Latte",
    price: "$4.50",
    emoji: "☕",
    description: "Espresso, steamed milk and sweet caramel."
  },
  {
    name: "Iced Americano",
    price: "$3.50",
    emoji: "🧊",
    description: "Rich espresso with refreshing cold water."
  },
  {
    name: "Mocha Delight",
    price: "$5.00",
    emoji: "🍫",
    description: "A delicious blend of coffee and chocolate."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#38251c]">

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 md:px-16 py-6">
        <h1 className="text-2xl font-black tracking-wide">
          BREW<span className="text-[#a66b42]">&</span>BEAN.
        </h1>

        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-[#a66b42]">Home</a>
          <a href="#about" className="hover:text-[#a66b42]">About</a>
          <a href="#menu" className="hover:text-[#a66b42]">Our Menu</a>
          <a href="#contact" className="hover:text-[#a66b42]">Contact</a>
        </div>

        <a href="#menu"
          className="bg-[#38251c] text-white px-5 py-3 rounded-full hover:bg-[#a66b42] transition">
          Order Now
        </a>
      </nav>

      {/* Hero */}
      <section id="home"
        className="grid md:grid-cols-2 gap-10 items-center px-8 md:px-16 py-20">

        <div>
          <p className="text-[#a66b42] font-bold tracking-[4px] mb-5">
            FRESHLY BREWED EVERY DAY
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Start Your Day With
            <span className="text-[#a66b42]"> Great Coffee.</span>
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-8">
            Discover the perfect cup of coffee, made with passion,
            premium beans, and a little bit of love.
          </p>

          <a href="#menu"
            className="inline-block bg-[#a66b42] text-white px-8 py-4 rounded-full font-bold hover:bg-[#38251c] transition">
            Explore Our Menu →
          </a>
        </div>

        <div className="bg-[#ead9c7] rounded-[40px] h-[400px] md:h-[500px] flex items-center justify-center">
          <div className="text-center">
            <div className="text-9xl mb-6">☕</div>
            <p className="text-xl font-bold tracking-widest">
              YOUR DAILY HAPPINESS
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about"
        className="bg-[#38251c] text-white py-20 px-8 text-center">

        <p className="text-[#d6a77c] tracking-widest font-bold mb-4">
          OUR STORY
        </p>

        <h2 className="text-4xl font-bold mb-6">
          More Than Just Coffee.
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 leading-8">
          At Brew & Bean, we believe every cup tells a story.
          We carefully select quality coffee beans and turn
          every sip into a memorable experience.
        </p>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 px-8 md:px-16">
        <div className="text-center mb-14">
          <p className="text-[#a66b42] font-bold tracking-widest mb-3">
            OUR FAVORITES
          </p>
          <h2 className="text-4xl font-black">
            Our Coffee Menu
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition">

              <div className="bg-[#f2e8dd] rounded-2xl h-48 flex items-center justify-center text-8xl mb-6">
                {product.emoji}
              </div>

              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold">
                  {product.name}
                </h3>
                <span className="text-[#a66b42] font-black">
                  {product.price}
                </span>
              </div>

              <p className="text-gray-500 mb-6">
                {product.description}
              </p>

              <a href="#contact"
                className="block text-center bg-[#38251c] text-white py-3 rounded-full hover:bg-[#a66b42] transition">
                Order This
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact"
        className="bg-[#ead9c7] py-20 px-8 text-center">

        <h2 className="text-4xl font-black mb-5">
          Coffee Makes Everything Better.
        </h2>

        <p className="text-gray-600 mb-8">
          Visit us and enjoy your favorite cup today!
        </p>

        <a href="mailto:hello@brewandbean.com"
          className="inline-block bg-[#38251c] text-white px-8 py-4 rounded-full hover:bg-[#a66b42] transition">
          Get In Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#38251c] text-white text-center py-7">
        <p className="font-bold text-xl mb-2">BREW & BEAN.</p>
        <p className="text-gray-400 text-sm">
          © 2026 Brew & Bean Coffee Shop. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
