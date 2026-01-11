import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface Review {
  name: string;
  rating: number; // e.g., 4.5
  text: string;
}

const reviews: Review[] = [
  { name: "Sarah M.", rating: 5, text: "Amazing party! Kids were thrilled and everything was stress-free." },
  { name: "David & Maria L.", rating: 4.5, text: "Great experience! The setup and entertainers were perfect." },
  { name: "Jasmine K.", rating: 5, text: "Everything was coordinated flawlessly. Highly recommend!" },
  { name: "Carlos T.", rating: 4, text: "Kids had a blast. Minor hiccups but overall excellent." },
  { name: "Emily R.", rating: 5, text: "Super professional, fun, and easy. Best party ever!" },
  { name: "Michael B.", rating: 4.5, text: "Everything went smoothly. Kids loved it and parents relaxed." },
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex justify-center mb-2 text-yellow-400 text-lg">
      {Array(fullStars).fill(0).map((_, i) => <BsStarFill key={`full-${i}`} className="w-5 h-5" />)}
      {halfStar && <BsStarHalf className="w-5 h-5" />}
      {Array(emptyStars).fill(0).map((_, i) => <BsStar key={`empty-${i}`} className="w-5 h-5" />)}
    </div>
  );
};

export default function Reviews() {
  return (
    <section className="py-24 bg-gray-50" id="reviews">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16 font-poppins">What Our Clients Say</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 flex flex-col items-center transition-all duration-200"
            >
              <StarRating rating={review.rating} />
              <p className="text-gray-700 italic mb-4 text-center text-sm md:text-base">{review.text}</p>
              <p className="font-semibold text-gray-900">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
