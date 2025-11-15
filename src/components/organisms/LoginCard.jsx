import LoginForm from "../molecules/LoginForm";
import GoogleLoginButton from "../molecules/GoogleLoginButton";

export default function LoginCard(props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 text-center w-4/5 md:w-1/2">
      <h1 className="text-3xl font-bold">Masukkan Akun</h1>
      <h2 className="text-[#333333AD] text-lg">
        Yuk, lanjutin belajarmu di videobelajar.
      </h2>

      <LoginForm {...props} />

      {/* OR */}
      <div className="flex items-center my-6">
        <hr className="flex-grow border-gray-300" />
        <span className="px-3 text-gray-500 text-sm">atau</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <GoogleLoginButton />
    </div>
  );
}
