import { Link } from "react-router-dom";
import DealCard from "../../../components/deal/DealCard";
import deals from "../../../assets/data/deals.json";

const tabs = ["Hot", "New"];

const Home = () => {
	return (
		<div className="space-y-5">
			{/* <HotDeals /> */}
			{/* <NewDeals /> */}
			{tabs.map((tab, idx) => (
				<div key={idx}>
					<div className="flex justify-between items-center mb-4">
						<h1 className="text-3xl font-semibold">{tab} Deals</h1>
						<Link className="text-blue-500 hover:underline cursor-pointer">
							See All
						</Link>
					</div>
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7">
						{deals
							.slice(idx ? 4 : 0, idx ? deals.length : 4)
							.map((property, idx) => (
								<DealCard key={property?.id ?? idx} property={property} />
							))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Home;
