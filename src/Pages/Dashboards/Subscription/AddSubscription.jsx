import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function AddSubscription() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [features, setFeatures] = useState([{ value: "" }]);

	const addFeature = () => {
		setFeatures([...features, { value: "" }]);
	};

	const removeFeature = (index) => {
		if (features.length > 1) {
			setFeatures(features.filter((_, i) => i !== index));
		}
	};

	const changeFeature = (index, value) => {
		setFeatures(
			features.map((feature, i) => {
				if (i === index) {
					return { value };
				}
				return feature;
			})
		);
	};

	const onSubmit = (data) => {
		console.log({ data });
		navigate("/subscription");
	};

	return (
		<div className="m-10 lg:m-20">
			<button
				onClick={() => navigate(-1)}
				className="flex gap-2 text-2xl font-semibold items-center click"
			>
				<ArrowLeft /> Add Subscription
			</button>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-10 grid grid-cols-2 gap-6"
			>
				<div>
					<label htmlFor="name" className="font-semibold mb-2 text-lg block">
						Package Name
					</label>
					<input
						type="text"
						name="name"
						placeholder="Package Name"
						{...register("name", {
							required: "Package name is required",
						})}
						className="w-full px-4 py-2 rounded-md border border-blue-200 outline-none"
					/>
					{errors.name && (
						<p className="text-red-600 text-sm">{errors.name.message}</p>
					)}
				</div>

				<div>
					<label htmlFor="price" className="font-semibold mb-2 text-lg block">
						Price
					</label>
					<input
						type="text"
						name="price"
						placeholder="Price"
						{...register("price", {
							required: "Price is required",
						})}
						className="w-full px-4 py-2 rounded-md border border-blue-200 outline-none"
					/>
					{errors.price && (
						<p className="text-red-600 text-sm">{errors.price.message}</p>
					)}
				</div>

				<div className="col-span-2">
					<label
						htmlFor="features"
						className="font-semibold mb-2 text-lg block"
					>
						Features
					</label>
					<div className="flex flex-col gap-2">
						{features.map((feature, index) => (
							<div key={index} className="flex items-center">
								<input
									type="text"
									name={`features.${index}.value`}
									placeholder="Feature"
									value={feature.value}
									onChange={(e) => changeFeature(index, e.target.value)}
									className="w-full px-4 py-2 rounded-md border border-blue-200 outline-none"
								/>
								{index !== features.length - 1 && (
									<button
										type="button"
										className="ml-2 text-red-600 hover:text-red-700"
										onClick={() => removeFeature(index)}
									>
										-
									</button>
								)}
								{index === features.length - 1 && (
									<button
										type="button"
										className="ml-2 text-green-600 hover:text-green-700"
										onClick={addFeature}
									>
										+
									</button>
								)}
							</div>
						))}
					</div>
					{errors.features?.message && (
						<p className="text-red-600 text-sm">{errors.features?.message}</p>
					)}
					{features.some((feature) => feature.value.trim() === "") && (
						<p className="text-red-600 text-sm">Features cannot be empty</p>
					)}
				</div>

				<button
					type="submit"
					className="col-span-2 w-1/2 mx-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-500 rounded-md"
				>
					Add Subscription
				</button>
			</form>
		</div>
	);
}
