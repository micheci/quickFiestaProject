import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search);

type PackageType = "simple" | "backyard" | "full";

const BASE_PRICES: Record<PackageType, number> = {
  simple: 199,
  backyard: 349,
  full: 499,
};

const PREMIUM_ENTERTAINMENT_PRICE = 150;

const MAX_ENTERTAINMENT: Record<PackageType, number> = {
  simple: 1,
  backyard: 2,
  full: 2,
};

const CustomizeParty: React.FC = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const selectedPackage = (query.get("package") as PackageType) || "simple";

  const [decor, setDecor] = useState<string | null>(null);
  const [decorSelection, setDecorSelection] = useState<string | null>(null);
  const [entertainment, setEntertainment] = useState<string[]>([]);

  useEffect(() => {
    if (selectedPackage === "backyard") {
      setDecor("Themed Balloon Decor");
      setDecorSelection("Princess");
    }
    if (selectedPackage === "full") {
      setDecor("Expanded Balloons + Banner");
      setDecorSelection("Dinosaur");
    }
  }, [selectedPackage]);

  const decorOptions = [
    {
      name: "Color Choice Tablecloths",
      unlockedFor: ["simple", "backyard", "full"],
      colors: ["red", "blue", "green", "yellow"],
    },
    {
      name: "Themed Balloon Decor",
      unlockedFor: ["backyard", "full"],
      themes: ["Dinosaur", "Princess", "Sports"],
    },
    {
      name: "Expanded Balloons + Banner",
      unlockedFor: ["full"],
      themes: ["Dinosaur", "Princess", "Sports"],
    },
  ];

  const entertainmentOptions = [
    { name: "Bounce House", type: "basic", unlockedFor: ["simple", "backyard", "full"] },
    { name: "Character / Costume", type: "basic", unlockedFor: ["simple", "backyard", "full"] },
    { name: "Petting Zoo", type: "premium", unlockedFor: ["backyard", "full"] },
    { name: "Magician", type: "premium", unlockedFor: ["backyard", "full"] },
  ];

  const handleEntertainmentToggle = (name: string) => {
    const option = entertainmentOptions.find((o) => o.name === name);
    if (!option) return;

    const maxAllowed = MAX_ENTERTAINMENT[selectedPackage];
    const alreadySelected = entertainment.includes(name);

    // Remove if already selected
    if (alreadySelected) {
      setEntertainment((prev) => prev.filter((e) => e !== name));
      return;
    }

    // Enforce max selection
    if (entertainment.length >= maxAllowed) return;

    // Simple package: block premium
    if (selectedPackage === "simple" && option.type === "premium") return;

    setEntertainment((prev) => [...prev, name]);
  };

  // 💰 PRICE CALCULATION
  const premiumSelections = entertainment.filter(
    (e) => entertainmentOptions.find((o) => o.name === e)?.type === "premium"
  );

  let extraPremiumPrice = 0;
  if (selectedPackage === "full" && premiumSelections.length > 0) {
    // 1 premium included for Full
    extraPremiumPrice = (premiumSelections.length - 1) * PREMIUM_ENTERTAINMENT_PRICE;
  } else {
    extraPremiumPrice = premiumSelections.length * PREMIUM_ENTERTAINMENT_PRICE;
  }

  const totalPrice = BASE_PRICES[selectedPackage] + extraPremiumPrice;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-[1fr_360px] gap-10">
      {/* MAIN CONTENT */}
      <div>
        <h1 className="text-4xl font-bold mb-2">
          Customize your <span className="text-blue-600 capitalize">{selectedPackage}</span> package
        </h1>
        <p className="text-gray-500 mb-12">
          Select decor and entertainment options for your event.
        </p>

        {/* DECOR */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6">🎨 Decor Options</h2>

          <div className="space-y-6">
            {decorOptions.map((option) => {
              const unlocked = option.unlockedFor.includes(selectedPackage);
              const selected = decor === option.name;

              return (
                <div
                  key={option.name}
                  className={`p-6 rounded-2xl border ${
                    selected ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white"
                  } ${!unlocked && "opacity-50"}`}
                >
                  <button
                    disabled={!unlocked}
                    onClick={() => {
                      setDecor(option.name);
                      setDecorSelection(null);
                    }}
                    className="w-full text-left font-medium"
                  >
                    {option.name}
                    {!unlocked && (
                      <span className="ml-2 text-sm text-gray-500">🔒 Upgrade required</span>
                    )}
                  </button>

                  {selected && unlocked && option.colors && (
                    <div className="mt-5 flex gap-4">
                      {option.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setDecorSelection(color)}
                          className={`w-10 h-10 rounded-full border-2 ${
                            decorSelection === color
                              ? "border-gray-900 ring-2 ring-gray-300"
                              : "border-gray-200"
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  )}

                  {selected && unlocked && option.themes && (
                    <div className="mt-5 flex gap-4">
                      {option.themes.map((theme) => (
                        <button
                          key={theme}
                          onClick={() => setDecorSelection(theme)}
                          className={`w-14 h-14 rounded-full border flex items-center justify-center text-xl ${
                            decorSelection === theme
                              ? "border-gray-900 bg-white"
                              : "border-gray-200 bg-gray-50"
                          }`}
                        >
                          {theme === "Dinosaur" ? "🦖" : theme === "Princess" ? "👑" : "⚽"}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ENTERTAINMENT */}
        <section>
          <h2 className="text-xl font-semibold mb-6">🎉 Entertainment</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {entertainmentOptions.map((option) => {
              const unlocked = option.unlockedFor.includes(selectedPackage);
              const selected = entertainment.includes(option.name);
              const isPremium = option.type === "premium";

              // Show premium badge even if included in Full
              const priceLabel =
                isPremium && !(selectedPackage === "full" && premiumSelections.includes(option.name))
                  ? `+${PREMIUM_ENTERTAINMENT_PRICE}`
                  : "";

              return (
                <button
                  key={option.name}
                  disabled={!unlocked || (selectedPackage === "simple" && isPremium)}
                  onClick={() => handleEntertainmentToggle(option.name)}
                  className={`p-5 rounded-2xl border text-left ${
                    selected ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white"
                  } ${!unlocked && "opacity-50 cursor-not-allowed"}`}
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{option.name}</span>
                    {priceLabel && <span className="text-sm text-gray-500">{priceLabel}</span>}
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>

      {/* SUMMARY SIDEBAR */}
      <aside className="sticky top-24 h-fit rounded-2xl border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Your Summary</h3>

        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex justify-between">
            <span>Package</span>
            <span className="capitalize font-medium">${BASE_PRICES[selectedPackage]}</span>
          </li>

          {decor && (
            <li>
              <span className="font-medium">Decor:</span> {decorSelection || decor}
            </li>
          )}

          {entertainment.map((e) => (
            <li key={e} className="flex justify-between">
              <span>{e}</span>
              {entertainmentOptions.find((o) => o.name === e)?.type === "premium" &&
                !(
                  selectedPackage === "full" &&
                  premiumSelections.indexOf(e) === 0
                ) && <span>+${PREMIUM_ENTERTAINMENT_PRICE}</span>}
            </li>
          ))}
        </ul>

        <div className="border-t mt-6 pt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>

        <button
          onClick={() => navigate("/client-info")}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-500"
        >
          Continue →
        </button>
      </aside>
    </div>
  );
};

export default CustomizeParty;
