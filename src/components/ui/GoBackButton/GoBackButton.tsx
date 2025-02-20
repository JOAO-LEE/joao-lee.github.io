import { House } from "@phosphor-icons/react";
import { useNavigate } from "react-router";

export function GoBackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="flex items-end gap-2 p-1 text-yel-100"
      onClick={() => navigate("/")}
    >
      <House className="text-2xl" />
      <p className="font-titles underline underline-offset-8 decoration-grayish">
        Go back
      </p>
    </button>
  );
}
