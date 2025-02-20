import { GoBackButton } from "@/components/ui/GoBackButton/GoBackButton";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";
import { DownloadSimple } from "@phosphor-icons/react";
import "./ResumePage.css";

const resumeMessage =
  "The resume view is under development. Please download it using the button below!";

export function ResumePage() {
  return (
    <section className="p-6 h-svh flex flex-col gap-6">
      <GoBackButton />
      <PageTitle textContent="Resume" />
      <div className="h-full flex flex-col gap-1.5 items-center justify-center">
        <p className="resume-info font-styled-bold text-xs text-center lg:text-lg">
          {resumeMessage.split("").map(phrase =>
            phrase === "." ? (
              <>
                .<br key={"."} />
              </>
            ) : (
              phrase
            )
          )}
        </p>
        <div className="habbo-download-container">
          <img
            src="/habbo/habbo-standing-with-a-coffe.png"
            alt="habbo character holding a cup of coffee"
            className="size-72 lg:size-96 object-contain"
          />
          <a
            download="joao-lima-resume"
            href="docs/fs-enus-curriculo-joao-lima.pdf"
            className="flex items-center gap-2 border border-yel-100 p-2 text-yel-100 hover:bg-yel-100 hover:text-blu-100 transition w-min mx-auto"
          >
            <DownloadSimple />
            <span>Download</span>
          </a>
        </div>
      </div>
    </section>
  );
}
