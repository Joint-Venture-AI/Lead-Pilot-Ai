import { Link } from "react-router-dom";
import DealCard from "../../../components/deal/DealCard";
import hotDeal from "../../../assets/data/deals.json";

const HotDeals = () => {
	return (
		<div>
			<div className="flex justify-between items-center mb-4">
				<h1 className="text-3xl font-semibold">Hot Deals</h1>
				<Link className="text-blue-500 hover:underline cursor-pointer">
					See All
				</Link>
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-7">
				{hotDeal.slice(0, 4).map((property, idx) => (
					<DealCard key={property?.id ?? idx} property={property} />
				))}
			</div>
		</div>
	);
};

export default HotDeals;
