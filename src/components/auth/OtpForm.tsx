import Link from "next/link";
import Label from "@/components/form/Label";
import Input from "../form/input/InputField";

export default function OtpForm() {
  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="w-full max-w-md pt-10 mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <svg
            className="stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M12.7083 5L7.5 10.2083L12.7083 15.4167"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div className="mb-5 sm:mb-8">
          <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
            Validacion
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Un codigo de verificación se envio a tu dispositivo. Por favor
            ingresa el codigo.
          </p>
        </div>
        <div>
          <form>
            <div className="space-y-5">
              <div>
                <div className="flex gap-2 sm:gap-4" id="otp-container">
                  <div className="w-full">
                    <Label htmlFor="test">
                      Ingresa el codigo que te enviamos
                    </Label>
                    <Input
                      type="text"
                      id="test"
                      className="h-14 text-3xl px-4 py-3"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">
                  Verificar el servidor
                </button>
              </div>
            </div>
          </form>
          {/* <div className="mt-5">
            <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
              Didn’t get the code?{" "}
              <Link
                href="/"
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
              >
                Resend
              </Link>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
