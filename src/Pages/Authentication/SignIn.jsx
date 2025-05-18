import { useForm } from 'react-hook-form';
import bannerImage from '../../assets/images/signIn.png';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('SignIn Data:', data);
    // Sign-in logic here
  };

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
          Welcome Back
        </h2>
        <p className="text-center text-sm text-gray-700 mb-6">
          Sign in to continue
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
            className="w-full px-4 py-2 rounded-full bg-white outline-none"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            {...register('password', {
              required: 'Password is required',
            })}
            className="w-full px-4 py-2 rounded-full bg-white outline-none"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm text-white">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register('remember')}
                className="accent-blue-500"
              />
              Remember me
            </label>
            <a href="/forgot-password" className="text-white hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-blue-500 px-4 py-2 rounded-full bg-white outline-none mt-5"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
