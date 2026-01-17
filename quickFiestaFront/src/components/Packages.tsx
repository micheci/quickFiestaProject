import { GiPartyPopper } from "react-icons/gi";

const PackagesTable = () => {
  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // One source of truth for all your data
  const packageData = [
    {
      name: "Simple Party",
      description: "Essential party fun: Bounce house, tables, chairs & accent decor.",
      price: "$399",
      features: [
        { label: "Bounce House", value: "Standard Jumper" },
        { label: "Balloon Decor", value: "Basic Accents" },
        { label: "Tables & Chairs", value: "Up to 15 kids" },
        { label: "Entertainment", value: "Optional Add-on" },
      ],
      popular: false,
    },
    {
      name: "Backyard Bash",
      description: "Themed styling: Combo slide bounce house, 15ft pro balloon garland, and 1 entertainer.",
      price: "$699",
      features: [
        { label: "Bounce House", value: "Slide/Combo Unit" },
        { label: "Balloon Decor", value: "10-15ft Pro Garland" },
        { label: "Tables & Chairs", value: "Up to 25 kids" },
        { label: "Entertainment", value: "1 Included" },
      ],
      popular: true,
    },
    {
      name: "Full Experience",
      description: "The VIP Fiesta: Premium combo, full shimmer wall or arch backdrop, and 2 entertainers.",
      price: "$1,199",
      features: [
        { label: "Bounce House", value: "Premium Themed Combo" },
        { label: "Balloon Decor", value: "Full Shimmer Wall & Arch" },
        { label: "Tables & Chairs", value: "Up to 40 kids" },
        { label: "Entertainment", value: "2 Included" },
      ],
      popular: false,
    }
  ];

  // Helper to get features by label for the table rows
  const featureLabels = ["Description", "Bounce House", "Balloon Decor", "Tables & Chairs", "Entertainment", "Starts at"];

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

        {/* --- MOBILE VIEW (Vertical Cards) --- */}
        <div className="grid grid-cols-1 gap-8 md:hidden text-left">
          {packageData.map((pkg, idx) => (
            <div key={idx} className={`bg-white rounded-3xl p-6 shadow-xl border-2 ${pkg.popular ? 'border-[#FF6600]' : 'border-orange-100'}`}>
              {pkg.popular && (
                <span className="bg-[#FF6600] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{pkg.description}</p>
              
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex justify-between items-center border-b border-gray-50 pb-2">
                    <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">{feature.label}</span>
                    <span className="text-sm font-medium text-gray-800">{feature.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 font-medium">Starting at</span>
                <div className="text-3xl font-black text-[#FF6600]">{pkg.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* --- DESKTOP VIEW (Restored Table) --- */}
        <div className="hidden md:block overflow-hidden rounded-3xl shadow-2xl border border-orange-100 bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-700">
                <th className="p-6 text-left border-b border-gray-200 font-bold">What’s Included</th>
                {packageData.map((pkg, i) => (
                  <th key={i} className={`p-6 text-center border-b border-gray-200 ${pkg.popular ? 'bg-gray-900 text-white' : 'text-gray-900'}`}>
                    {pkg.popular ? (
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-2">
                          <GiPartyPopper className="text-yellow-400 w-5 h-5 animate-bounce" />
                          <span className="font-bold text-xl uppercase tracking-wider">{pkg.name}</span>
                          <GiPartyPopper className="text-yellow-400 w-5 h-5 animate-bounce" />
                        </div>
                        <span className="text-xs text-yellow-300 font-bold bg-white/10 px-2 py-1 rounded-full uppercase">Best Value</span>
                      </div>
                    ) : (
                      <span className="font-bold text-xl uppercase tracking-tight">{pkg.name}</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {featureLabels.map((label, rowIndex) => (
                <tr key={rowIndex} className="group hover:bg-orange-50/40 transition-colors">
                  {/* First Column: Feature Label */}
                  <td className="p-5 border-b border-gray-100 font-semibold text-left bg-gray-50/50">
                    {label}
                  </td>
                  
                  {/* Data Columns */}
                  {packageData.map((pkg, colIndex) => {
                    let content = "";
                    if (label === "Description") content = pkg.description;
                    else if (label === "Starts at") content = pkg.price;
                    else {
                      content = pkg.features.find(f => f.label === label)?.value || "—";
                    }

                    const isPriceRow = label === "Starts at";
                    
                    return (
                      <td key={colIndex} className={`p-5 border-b border-gray-100 text-center 
                        ${pkg.popular ? "bg-orange-50/30 border-x border-orange-100" : ""}
                        ${isPriceRow ? "text-3xl font-black text-[#FF6600]" : "text-sm"}
                      `}>
                        {content}
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