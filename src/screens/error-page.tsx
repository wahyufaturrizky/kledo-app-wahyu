import { useNavigate, useRouteError } from "react-router-dom";
import Button from "../components/Button";
import Text from "../components/Text";

export default function ErrorPage() {
  const error = useRouteError();

  const { statusText, message }: any = error;

  const navigate = useNavigate();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Text
          label={statusText || message}
          className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Button
          label="Go Back"
          onClick={() => navigate(-1)}
          type="button"
          className="flex items-center w-full justify-center rounded-full bg-kl-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-kl-blue-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kl-blue"
        />
      </div>
    </div>
  );
}
