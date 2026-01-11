import { GiPartyPopper } from "react-icons/gi";

const PackagesTable = () => {
  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const rows = [
    ["Description", "Essential party fun: Bounce house, tables, chairs & accent decor.", "Themed styling: Combo slide bounce house, 15ft pro balloon garland, and 1 entertainer.", "The VIP Fiesta: Premium combo, full shimmer wall or arch backdrop, and 2 entertainers."],
    ["Bounce House", "Standard Jumper", "Slide/Combo Unit", "Premium Themed Combo"],
    ["Balloon Decor", "Basic Accents", "10-15ft Pro Garland", "Full Shimmer Wall & Arch"],
    ["Tables & Chairs", "Up to 15 kids", "Up to 25 kids", "Up to 40 kids"],
    ["Entertainment", "Optional Add-on", "1 Included (Face Paint/Character)", "2 Included"],
    ["Starts at", "$399", "$699", "$1,199"],
  ];

  return (
    <section id="packages" className="py-24 bg-[#FFF9F0] font-inter overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 font-poppins">
          Party Packages
        </h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto leading-relaxed">
          The ultimate stress-free celebration. We coordinate the best local vendors, 
          manage the setup, and handle the cleanup.
        </p>

        <div className="overflow-x-auto rounded-3xl shadow-2xl border border-orange-100">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gray-50 text-gray-700">
                <th className="p-6 text-left border-b border-gray-200">What’s Included</th>
                <th className="p-6 text-center border-b border-gray-200">Simple Party</th>

                {/* Most Popular Column */}
                <th className="p-6 text-center border-b border-gray-200 bg-gray-900 text-white relative">
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                      <GiPartyPopper className="text-yellow-400 w-5 h-5 animate-bounce" />
                      <span className="font-bold text-xl uppercase tracking-wider">Backyard Bash</span>
                      <GiPartyPopper className="text-yellow-400 w-5 h-5 animate-bounce" />
                    </div>
                    <span className="text-xs text-yellow-300 font-bold bg-white/10 px-2 py-1 rounded-full uppercase">Best Value</span>
                  </div>
                </th>

                <th className="p-6 text-center border-b border-gray-200 font-bold text-xl uppercase tracking-tight">Full Experience</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {rows.map((row, i) => (
                <tr key={i} className="group hover:bg-orange-50/40 transition-colors">
                  {row.map((cell, j) => {
                    const isPopularCol = j === 2;
                    const isPriceRow = i === rows.length - 1;
                    
                    return (
                      <td
                        key={j}
                        className={`
                          p-5 border-b border-gray-100 
                          ${j === 0 ? "font-semibold text-left bg-gray-50/50" : "text-center"} 
                          ${isPopularCol ? "bg-orange-50 font-medium border-x border-orange-100" : ""}
                          ${isPriceRow && j !== 0 ? "text-3xl font-black text-[#FF6600]" : ""}
                        `}
                      >
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 space-y-4">
          <button
            onClick={scrollToForm}
            className="bg-[#FF6600] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#e65c00] hover:scale-105 transform transition-all duration-300 shadow-xl shadow-orange-200 cursor-pointer inline-flex items-center gap-3"
          >
            Get My Free Quote
          </button>
          <p className="text-gray-500 text-sm italic max-w-lg mx-auto">
            Custom themes available for all packages. Delivery and service fees calculated based on event location.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackagesTable;