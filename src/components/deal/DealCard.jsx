/* eslint-disable no-undef */
import { FaStar, FaHeart, FaLocationDot, FaBed, FaBath } from "react-icons/fa6";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { useState, useMemo } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function DealCard({ property }) {
	const [liked, setLiked] = useState(false);

	const handleLike = (e) => {
		e.preventDefault();
		e.stopPropagation();
		toast.success(liked ? "Removed from wishlist!" : "Added to wishlist!");
		setLiked(!liked);
	};

	const price = useMemo(() => random(500, 1000, 2), []);
	const rating = useMemo(() => random(3, 5, 1), []);
	const discountedPrice = useMemo(() => random(price / 2, price), [price]);
	const sqft = useMemo(() => random(1000, 2000), []);
	const beds = useMemo(() => random(1, 99), []);
	const baths = useMemo(() => random(1, 99), []);

	return (
		<Link
			key={property.id}
			to={`/propertyDetails/${property.id}`}
			className="max-w-sm rounded-2xl border border-gray-200 overflow-hidden shadow-sm p-2 bg-white hover:bg-gray-100 transition group cursor-pointer select-none"
		>
			<div className="relative">
				<div className="relative overflow-hidden rounded-xl">
					<img
						src={property.image}
						alt="property"
						className="w-full h-52 object-cover group-hover:scale-125 transition"
					/>
				</div>
				<div className="absolute top-2 right-2 flex gap-2">
					<div className="bg-white px-2 py-1 rounded-full flex items-center gap-1 shadow text-sm font-semibold">
						<FaStar className="text-yellow-400" />
						{rating}
					</div>
					<button
						onClick={handleLike}
						className="bg-white p-2 rounded-full shadow cursor-pointer click"
					>
						<FaHeart className={liked ? "text-red-500" : "text-gray-600"} />
					</button>
				</div>
			</div>

			<div className="px-2 py-3">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-semibold text-gray-800 transition group-hover:text-sky-700 group-hover:text-xl">
						{property.title}
					</h2>
					<div className="text-lg font-semibold text-gray-800">
						${discountedPrice}k
					</div>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center text-gray-500 text-sm mt-1 gap-1">
						<FaLocationDot />
						<span>{property.location}</span>
					</div>

					<div className="text-sm text-gray-400 mt-1 line-through">
						${price}k
					</div>
				</div>

				<div className="border-t border-gray-200 mt-4 pt-2 flex justify-between text-sm text-gray-600">
					<div className="flex items-center gap-1">
						<AiOutlineArrowsAlt className="text-gray-500" />
						{sqft} sqft
					</div>
					<div className="flex items-center gap-1">
						<FaBed className="text-gray-500" />
						{beds} beds
					</div>
					<div className="flex items-center gap-1">
						<FaBath className="text-gray-500" />
						{baths} bath
					</div>
				</div>
			</div>
		</Link>
	);
}
