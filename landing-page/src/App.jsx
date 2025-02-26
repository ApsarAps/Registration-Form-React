
// import './App.css'
// import { useState } from "react";

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//         <div className="font-sans">
//       <nav className="bg-blue-500 text-white p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">MyWebsite</h1>
//           <button
//             className="md:hidden text-2xl"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? "✖" : "☰"}
//           </button>

//           <ul
//             className={`md:flex space-x-6 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-500 md:bg-transparent md:flex-row flex-col text-center transition-all duration-300 ${
//               menuOpen ? "block" : "hidden"
//             }`}
//           >
//             <li>
//               <a
//                 href="#home"
//                 className="block p-3 hover:text-gray-200"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#features"
//                 className="block p-3 hover:text-gray-200"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Features
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#about"
//                 className="block p-3 hover:text-gray-200"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="block p-3 hover:text-gray-200"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <section
//         id="home"
//         className="flex flex-col items-center justify-center text-center p-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white"
//       >
//         <h1 className="text-4xl font-bold">Welcome to My Website</h1>
//         <p className="mt-2 text-lg">A modern responsive website using Tailwind CSS</p>
//         <button className="mt-5 bg-white text-blue-500 px-5 py-2 rounded-lg hover:bg-gray-300">
//           Get Started
//         </button>
//       </section>
//       <section id="features" className="p-10">
//         <h2 className="text-3xl font-bold text-center">Features</h2>
//         <div className="grid md:grid-cols-3 gap-6 mt-6">
//           <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
//             <h3 className="text-xl font-semibold">Fast Performance</h3>
//             <p>Optimized for speed and efficiency.</p>
//           </div>
//           <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
//             <h3 className="text-xl font-semibold">Responsive Design</h3>
//             <p>Looks great on all devices.</p>
//           </div>
//           <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
//             <h3 className="text-xl font-semibold">SEO Friendly</h3>
//             <p>Built with SEO best practices.</p>
//           </div>
//         </div>
//       </section>
//        <section id="about" className="p-10 bg-gray-200 text-center">
//         <h2 className="text-3xl font-bold">About Us</h2>
//         <p className="mt-2">We build modern, responsive websites using Tailwind CSS.</p>
//       </section>

//       <section id="contact" className="p-10 text-center">
//         <h2 className="text-3xl font-bold">Contact Us</h2>
//         <form className="mt-4 max-w-md mx-auto">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full p-2 border border-gray-300 rounded mb-3"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full p-2 border border-gray-300 rounded mb-3"
//           />
//           <textarea
//             placeholder="Your Message"
//             className="w-full p-2 border border-gray-300 rounded mb-3"
//           ></textarea>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
//             Send Message
//           </button>
//         </form>
//       </section>

//       <footer className="bg-gray-800 text-white text-center p-4">
//         <p>&copy; 2025 MyWebsite. All rights reserved.</p>
//       </footer>
//     </div>
//     </>
//   )
// }

// export default App
