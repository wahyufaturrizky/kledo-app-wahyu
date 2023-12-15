import { Controller, useForm } from "react-hook-form";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { useSignIn } from "./services/auth/useAuth";

function App() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "me@kledo.id",
      password: "123456",
      remember_me: 1,
    },
  });

  const { mutate: signIn, isPending } = useSignIn({
    options: {
      onSuccess: (res: any) => {
        const { access_token } = res.data.data.data;

        localStorage.setItem("access_token", access_token);
      },
    },
  });

  const handleLogin = (data: any) => signIn({ ...data, remember_me: 1 });

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                required
                classNameInput="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-kl-blue sm:text-sm sm:leading-6"
                classNameLabel="block text-sm font-medium leading-6 text-gray-900"
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                classNameInput="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-kl-blue sm:text-sm sm:leading-6"
                classNameLabel="block text-sm font-medium leading-6 text-gray-900"
              />
            )}
          />

          <div>
            <Button
              disabled={isPending}
              onClick={handleSubmit(handleLogin)}
              label={isPending ? "Loading..." : "Sign in"}
              type="submit"
              className="flex w-full justify-center rounded-md bg-kl-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-kl-blue-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kl-blue"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
