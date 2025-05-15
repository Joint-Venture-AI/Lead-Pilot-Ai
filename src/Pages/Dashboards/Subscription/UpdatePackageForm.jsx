import { useForm, useFieldArray } from "react-hook-form";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

const UpdatePackageForm = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      amount: "",
      discount: "",
      expiration: "",
      features: [{ value: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "features",
  });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-5">Update Package</h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" p-4 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1">Package Name</label>
            <div>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter Package Name"
                className="w-full px-5 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1">Package Amount</label>
            <div>
              <input
                type="number"
                {...register("amount", { required: true })}
                placeholder="Enter Amount"
                className="w-full px-5 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1">Discount Price</label>
            <div>
              <input
                type="number"
                {...register("discount")}
                placeholder="Enter Discount"
                className="w-full px-5 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-1">Package Expiration</label>
          <div>
            <input
              type="text"
              {...register("expiration")}
              placeholder="Enter Expiration"
              className="w-full px-5 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Dynamic Features */}
        <div className="space-y-4">
          <label className="block">Package Features</label>
          {fields.map((item, index) => (
            <div key={item.id} className="relative">
              <input
                {...register(`features.${index}.value`, { required: true })}
                placeholder="Enter Feature"
                className="w-full px-5 py-2 border border-gray-300 rounded-md"
              />
              {fields.length > 1 && (
                <MdOutlineRemoveCircle
                  onClick={() => remove(index)}
                  className="absolute top-3 right-3 text-red-500 cursor-pointer"
                />
              )}
            </div>
          ))}

          {/* Add Feature Button */}
          <button
            type="button"
            onClick={() => append({ value: "" })}
            className="flex items-center text-sm text-blue-600"
          >
            <IoIosAddCircleOutline className="mr-1 text-lg" /> Add Feature
          </button>
        </div>

        <button
          type="submit"
          className="bg-[#328569] text-white px-6 py-2 rounded hover:shadow-lg w-full md:w-1/4 mx-auto block"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePackageForm;
