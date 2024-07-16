import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-[20px] shadow-3xl p-4">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full size-[120px] object-cover"
      />
      <p className="max-w-sm mt-6 text-center info-text">{feedback}</p>
      <div className="flex items-center justify-center mt-3 gap-2.5">
        <img
        className="object-contain m-0"
          src={star}
          width={24}
          height={24}
          alt="star"
        />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className="mt-1 text-3xl font-bold text-center font-palanquin">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
