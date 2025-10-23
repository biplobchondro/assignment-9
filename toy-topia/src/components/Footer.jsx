// Footer.jsx
const Footer = () => (
  <footer className="bg-gray-900 text-white py-10 mt-20">
    <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">ToyVerse</h2>
        <p>Explore the world of imagination with our premium toy collections!</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Quick Links</h3>
        <ul>
          <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Follow Us</h3>
        <div className="flex gap-4">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <p className="text-center mt-6 text-sm">© 2025 ToyVerse. All rights reserved.</p>
  </footer>
);

export default Footer;
