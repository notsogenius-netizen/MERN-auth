import ResetPasswordForm from "@/components/reset-password-form";
import { Link, useSearchParams } from "react-router";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const exp = Number(searchParams.get("exp"));
  const now = Date.now();
  const linkIsValid = code && exp && exp > now;

  return (
    <div className="flex flex-col items-center gap-4 mt-10 px-6 py-8 mx-auto md:h-screen lg:py-0">
      {linkIsValid ? (
        <ResetPasswordForm code={code} />
      ) : (
        <div className="font-small">
          Invalid Link.{" "}
          <Link to={"/password/forgot"}>
            <span className="font-medium hover:underline text-blue-500">
              Forgot Password
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
