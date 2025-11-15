import TextInput from "../atoms/TextInput";
import PasswordInput from "../atoms/PasswordInput";
import NavButton from "../atoms/NavButton";

export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  loading,
  onSubmit,
  onRegister,
}) {
  return (
    <form onSubmit={onSubmit} className="mt-8">
      <TextInput
        label="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <PasswordInput
        label="Kata Sandi"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className="text-end mb-5">
        <a className="text-darkgray hover:underline text-md" href="#">
          Lupa password?
        </a>
      </div>

      <NavButton
        type="submit"
        variant="primary"
        className="mb-6"
        disabled={loading}
      >
        {loading ? "Loading..." : "Masuk"}
      </NavButton>

      <NavButton type="button" variant="secondary" onClick={onRegister}>
        Register
      </NavButton>
    </form>
  );
}
