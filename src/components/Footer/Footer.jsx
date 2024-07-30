
import './Footer.css';
export default function Footer(){

return (
<div w>
<div>
       <footer className="bg-beige text-gray-800 p-8 mx-[15px] ">
         <div className="container mx-auto flex justify-between">
           <div className='w-96'>
             <h2 className="font-bold mb-4">Contact Us</h2>
             <p className="mb-2">We are here to help and answer your questions, and we are always happy to hear from you.</p>
             <p className="mb-2">Email: <a href="mailto:support@palestine.io" className="text-blue-500"> <br/>support@palestine.io</a></p>
              <div className="flex space-x-4">
              <a href="#" className="text-gray-800">
              <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-800">
              <i className="fab fa-facebook"></i>
              </a>
              </div>
            </div>
        <div>
           <h2 className="font-bold mb-4">Properties</h2>
           <ul>
             <li>Land</li>
             <li>House</li>
             <li>Apartment</li>
             <li>Penthouse Apartment</li>
             <li>Villa</li>
             <li>Office</li>
             <li>Shop</li>
             <li>Storage</li>
             <li>Building</li>
           </ul>
        </div>

      <div>
        <h4 className="font-bold mb-4">Website</h4>
        <ul>
          <li>About</li>
          <li>Roadmap</li>
          <li>Privacy Policy</li>
          <li>Terms and Use</li>
          <li>Help</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Subscribe</h4>
        <p className="mb-2">Enter your email to get notified about our new Real Estate.</p>
        <form className="flex">
          <input 
            type="email" 
            placeholder="Email" 
            className="p-2 border border-gray-300 rounded-l-md focus:outline-none" 
          />
          <button 
            type="submit" 
            className="p-2 bg-blue-500 text-white rounded-r-md"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </footer>
  <div className="w-full text-center bg-white ">
        <p>© 2024 <a href="#" className="text-blue-500 w-full">Palestine</a>. All rights reserved.</p>
      </div>
</div>
</div>

);
}
