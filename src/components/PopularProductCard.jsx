import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="size-[280px]"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
        />
        <p className="font-montserrat text-xl leading-normal">(4.5)</p>
      </div>
      <h3 className="font-palanquin text-2xl font-semibold mt-2 leading-normal">{name}</h3>
      <p className="text-2xl font-montserrat font-semibold text-coral-red mt-2">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
