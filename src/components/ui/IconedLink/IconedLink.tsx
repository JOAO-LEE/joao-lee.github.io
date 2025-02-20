import type { ReactNode } from "react";
import { Link } from "react-router";

export function IconedLink({
  title,
  icon,
  url,
}: { title: string; icon: ReactNode; url?: string }) {
  return (
    <li className="bg-yel-100 px-2 py-1 hover:bg-blu-100 hover:text-yel-100">
      <Link className="flex items-center gap-2" to={!url ? "/" : url}>
        {icon}
        <p>{title}</p>
      </Link>
    </li>
  );
}
