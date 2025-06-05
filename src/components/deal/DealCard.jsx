import { FaStar, FaHeart, FaLocationDot, FaBed, FaBath } from "react-icons/fa6";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { useState } from "react";
import toast from "react-hot-toast";

export default function DealCard({ property }) {
	const [liked, setLiked] = useState(false);

	const handleLike = () => {
		toast.success(liked ? "Removed from wishlist!" : "Added to wishlist!");
		setLiked(!liked);
	};

	return (
		<div
			key={property.id}
			className="max-w-sm rounded-2xl border border-gray-200 overflow-hidden shadow-sm p-2"
		>
			<div className="relative">
				<img
					src={property.image}
					alt="property"
					className="w-full h-52 object-cover rounded-xl"
				/>
				<div className="absolute top-2 right-2 flex gap-2">
					<div className="bg-white px-2 py-1 rounded-full flex items-center gap-1 shadow text-sm font-semibold">
						<FaStar className="text-yellow-400" />
						{property.rating}
					</div>
					<button
						onClick={handleLike}
						className="bg-white p-2 rounded-full shadow"
					>
						<FaHeart className={liked ? "text-red-500" : "text-gray-600"} />
					</button>
				</div>
			</div>

			<div className="px-2 py-3">
				<div className="flex items-center justify-between">
					{property.title}
					<div className="text-lg font-semibold text-gray-800">
						${property.price}
					</div>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center text-gray-500 text-sm mt-1 gap-1">
						<FaLocationDot />
						<span>{property.location}</span>
					</div>

					<div className="text-sm text-gray-400 mt-1 line-through">
						${property.originalPrice}
					</div>
				</div>

				<div className="border-t border-gray-200 mt-4 pt-2 flex justify-between text-sm text-gray-600">
					<div className="flex items-center gap-1">
						<AiOutlineArrowsAlt className="text-gray-500" />
						{property.sqft} sqft
					</div>
					<div className="flex items-center gap-1">
						<FaBed className="text-gray-500" />
						{property.beds} beds
					</div>
					<div className="flex items-center gap-1">
						<FaBath className="text-gray-500" />
						{property.baths} bath
					</div>
				</div>
			</div>
		</div>
	);
}
