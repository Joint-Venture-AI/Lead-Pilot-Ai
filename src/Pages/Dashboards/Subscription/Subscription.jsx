import { BadgeCheck } from "lucide-react";
import subscriptions from "../../../assets/data/subscription.json";
import { Link } from "react-router-dom";

export default function Subscription() {
	return (
		<>
			<Link
				to="add"
				className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mx-10 my-10 inline-block"
			>
				Add Subscription
			</Link>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 mb-20">
				{subscriptions.map((data, index) => (
					<div
						key={index}
						className="border-2 rounded-xl border-gray-200 flex flex-col"
					>
						<h4 className="text-2xl text-center font-semibold mt-4">
							{data.name}
						</h4>
						<p className="text-center border-b-2 border-gray-200 pb-4">
							{data.price}
						</p>
						<ul className="p-4 grow">
							{data.features.map((feature, index) => (
								<xul key={index} className="flex items-center gap-2 mt-4">
									<BadgeCheck className="text-blue-500" />
									<li>{feature}</li>
								</xul>
							))}
						</ul>
						<div className="p-4">
							<Link
								to={`edit/${data.id}`}
								className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full click inline-block text-center"
							>
								Edit
							</Link>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
