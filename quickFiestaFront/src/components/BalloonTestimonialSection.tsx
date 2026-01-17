import { Balloon } from "./Balloon";

interface Testimonial {
  text: string;
  author: string;
  color: string;
}

const testimonials: Testimonial[] = [
  { text: "Best party ever! Setup was perfect 🎉", author: "Sarah M.", color: "pink" },
  { text: "Zero stress, kids loved every moment!", author: "David & Maria L.", color: "blue" },
  { text: "Worth every penny. We just showed up.", author: "Jasmine K.", color: "green" },
];

// --- DYNAMIC CONFETTI GENERATION ---
const random = (min: number, max: number) => `${Math.random() * (max - min) + min}%`;

const confettiPieces: any[] = [];

for (let i = 0; i < 70; i++) {
  const colors = [
    "bg-yellow-400",
    "bg-pink-400",
    "bg-blue-400",
    "bg-orange-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-red-400",
    "bg-pink-300",
    "bg-blue-300",
  ];
  const sizes = ["w-2 h-2", "w-2 h-3", "w-3 h-2", "w-3 h-3", "w-4 h-2"];
  const rounds = ["rounded-sm", "rounded-md", "rounded-full"];

  confettiPieces.push({
    color: colors[Math.floor(Math.random() * colors.length)],
    top: random(0, 90),
    left: random(0, 100),
    size: sizes[Math.floor(Math.random() * sizes.length)],
    round: rounds[Math.floor(Math.random() * rounds.length)],
    delay: `${Math.random() * 2}s`,
  });
}

function BalloonTestimonial({ text, author, color, index }: any) {
  // Middle balloon (index 1) sits lower, creates a nice "V" shape
  const staggerClass = index === 1 ? "mt-16" : "mt-0";

  return (
    <div className={`relative flex flex-col items-center h-[420px] w-[240px] animate-float overflow-visible ${staggerClass}`}>
      <Balloon color={color} />
      <div className="absolute top-[55px] w-[170px] text-center text-gray-900 font-bold text-base px-2 leading-tight">
        “{text}”
        <div className="mt-3 text-sm font-medium opacity-70 italic">– {author}</div>
      </div>
    </div>
  );
}

export default function BalloonTestimonialSection() {
  return (
    /* hidden md:block ensures this whole section doesn't exist on mobile */
    <section 
      className="hidden md:block relative py-20 md:py-32 bg-gradient-to-b from-[#FFF9F0] to-white overflow-hidden" 
      id="balloonSection"
    >
      
      {/* --- CONFETTI LAYER --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {confettiPieces.map((p: any, i: number) => (
          <div 
            key={i}
            className={`absolute ${p.color} ${p.size} ${p.round} opacity-30 animate-pulse`}
            style={{ 
              top: p.top, 
              left: p.left, 
              transform: `rotate(${i * 45}deg)`,
              animationDelay: p.delay 
            }}
          />
        ))}
      </div>

      {/* --- GHOST BALLOONS (Side Fillers) --- */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-10 -rotate-12 hidden lg:block pointer-events-none">
        <Balloon color="red" />
      </div>
      <div className="absolute -right-20 top-1/3 opacity-10 rotate-12 hidden lg:block pointer-events-none">
        <Balloon color="pink" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 tracking-tight">
          Parents Love It
        </h2>
        <p className="text-gray-600 text-xl md:text-2xl mb-16 max-w-2xl mx-auto">
          Real parties. Real kids. No stress.
        </p>

        {/* Distributed Balloon Row */}
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-16 md:gap-4">
          {testimonials.map((t: Testimonial, i: number) => (
            <BalloonTestimonial
              key={i}
              index={i}
              text={t.text}
              author={t.author}
              color={t.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}