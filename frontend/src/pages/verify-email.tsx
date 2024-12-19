import { verifyEmail } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { BarLoader } from "react-spinners";
import { Link, useParams } from "react-router";

const VerifyEmail = () => {
  const { code } = useParams();
  const { isPending, isSuccess, isError } = useQuery({
    queryKey: ["emailVerification", code],
    queryFn: () => verifyEmail(code),
  });
  console.log(isSuccess);
  console.log(isError);
  return (
    <div className="flex flex-col items-center gap-4 mt-10 px-6 py-8 mx-auto md:h-screen lg:py-0">
      {isPending ? (
        <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
      ) : (
        <div className="mb-4 border p-10 rounded-lg">
          {isSuccess ? <p>Email Verified</p> : <p>Email verification failed</p>}
          {isError && (
            <div className="font-small">
              Something went wrong.{" "}
              <Link to={"/password/forgot"}>
                <span className="font-medium hover:underline text-blue-500">
                  Forgot Password
                </span>
              </Link>
            </div>
          )}
        </div>
      )}
      <div>
        <Link to={"/"}>Back to Home</Link>
      </div>
    </div>
  );
};

export default VerifyEmail;
