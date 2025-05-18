import { useForm } from 'react-hook-form';
import bannerImage from '../../assets/images/signIn.png';

const ResetPass = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Submitted:', data);
    // Password reset logic here
  };

  const password = watch('password');

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom right, #FFFFFF99, #3B9C79CC, #FFFFFF99)',
        }}
      />

      {/* Form Card */}
      <div className="relative z-10 bg-[#95CFBA] border border-gray-200 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full max-w-md transform -translate-x-[10%]">
        <h2 className="text-center text-xl font-semibold mb-2 text-gray-800">
          ← Reset Password
        </h2>
        <p className="text-center text-sm text-gray-700 mb-6">
          Your password must be 8–10 characters long.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 8, message: 'Minimum 8 characters' },
              maxLength: { value: 10, message: 'Maximum 10 characters' },
            })}
            className="w-full px-4 py-2 rounded-full bg-white outline-none"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Re-enter Password"
            {...register('confirmPassword', {
              required: 'Please re-enter password',
              validate: (value) =>
                value === password || 'Passwords do not match',
            })}
            className="w-full px-4 py-2 rounded-full bg-white outline-none"
          />
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm">{errors.confirmPassword.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-blue-500 px-4 py-2 rounded-full bg-white outline-none mt-5"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPass;
