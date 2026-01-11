import { Balloon } from "./Balloon"; 
import { LuShieldCheck } from "react-icons/lu"; // A nice "Security/Guarantee" icon

const Contact= () => {
  return (
    <section
      id="contact"
      className="relative w-full py-20 md:py-32 bg-gradient-to-b from-white to-[#FFF9F0] overflow-hidden font-inter"
    >
      {/* Background Decorations */}
      <div className="absolute -left-16 top-1/4 opacity-10 -rotate-12 hidden xl:block pointer-events-none">
        <Balloon color="blue" />
      </div>
      <div className="absolute -right-16 bottom-1/4 opacity-10 rotate-12 hidden xl:block pointer-events-none">
        <Balloon color="pink" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Value Props */}
          <div className="text-center lg:text-left space-y-6">
            <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
              Ready for the <span className="text-[#FF6600]">Ultimate</span> Fiesta?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Don't lift a finger. Tell us what you need, and we'll handle the magic.
            </p>
            
            {/* THE GUARANTEE BOX */}
            <div className="mt-8 p-6 bg-white/50 border-2 border-dashed border-orange-200 rounded-3xl inline-block lg:max-w-md">
              <div className="flex items-start gap-4 text-left">
                <div className="bg-orange-500 p-2 rounded-xl text-white mt-1 shrink-0">
                  <LuShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">The Quick Fiesta Guarantee</h4>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    If a vendor cancels or has an issue, <strong>we handle the backup at no extra cost to you.</strong> Your party will happen, no matter what.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-orange-50 w-full max-w-lg mx-auto lg:ml-auto">
            <div className="mb-8 text-center">
              <h3 className="text-3xl font-bold text-[#FF6600]">Get a Quick Quote</h3>
              <p className="text-gray-500 mt-2">Check availability for your date</p>
            </div>

            <form action="https://formspree.io/f/mjgknode" method="POST" className="space-y-4">
              <input name="name" placeholder="Your Name" required className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF6600] bg-gray-50 transition-all" />
              <input name="phone" placeholder="Phone Number" required className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF6600] bg-gray-50 transition-all" />
              <input type="date" name="eventDate" required className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF6600] bg-gray-50 transition-all text-gray-500" />
              <input name="location" placeholder="City or Zip Code" required className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF6600] bg-gray-50 transition-all" />
              
              <select name="budget" className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF6600] bg-gray-50 transition-all text-gray-500">
                <option value="">Estimated Budget (optional)</option>
                <option value="under-500">Under $500</option>
                <option value="500-1000">$500–$1,000</option>
                <option value="1000-plus">$1,000+</option>
              </select>

              <textarea name="notes" placeholder="Anything special? (Theme, number of kids, etc.)" rows={3} className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF6600] bg-gray-50 transition-all" />

              <button type="submit" className="w-full bg-[#FF6600] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#e65c00] hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-orange-200 cursor-pointer">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;