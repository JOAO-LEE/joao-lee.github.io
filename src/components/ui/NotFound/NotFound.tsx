import { ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="content-center justify-items-center min-h-screen">
      <div className="">
        <p className="font-styled-bold underline underline-offset-8 text-yel-100">
          not found
        </p>
      </div>
      <button
        type="button"
        className="flex items-center gap-2  p-1 text-yel-100"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="text-2xl" />
        <p className="font-titles underline underline-offset-8 decoration-grayish">
          Go back
        </p>
      </button>
    </section>
  );
}
