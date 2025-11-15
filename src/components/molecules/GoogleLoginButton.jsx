export default function GoogleLoginButton() {
  return (
    <button className="flex justify-center items-center w-full font-bold bg-white text-darkgray py-2 px-4 rounded-md hover:bg-slate-400 border border-darkgray">
      <img
        src={`${import.meta.env.BASE_URL}google.png`}
        className="h-10 w-10 mr-2"
      />
      <span>Masuk dengan Google</span>
    </button>
  );
}
