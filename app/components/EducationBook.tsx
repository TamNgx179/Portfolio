"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const educationFacts: ReactNode[] = [
  <>
    Currently studying Information Technology at VNUHCM - University of Information
    Technology.
  </>,
  <>
    Maintaining a <span className="font-black text-[#d96a2d]">GPA of 8.18 / 10</span>{" "}
    while building a strong software engineering foundation.
  </>,
  <>
    Recognized with <span className="font-black text-[#d96a2d]">Good Student</span>{" "}
    awards across terms for academic performance and conduct.
  </>
];

const educationAwards = [
  {
    title: "2025-2026 - Term 1",
    image: "/images/education-award-2025-2026-s1.jpg"
  },
  {
    title: "2024-2025 - Term 2",
    image: "/images/education-award-2024-2025-s2.jpg"
  },
  {
    title: "2024-2025 - Term 1",
    image: "/images/education-award-2024-2025-s1.jpg"
  },
  {
    title: "2023-2024 - Term 2",
    image: "/images/education-award-2023-2024-s2.jpg"
  },
  {
    title: "2023-2024 - Term 1",
    image: "/images/education-award-2023-2024-s1.jpg"
  }
];

const bookDoodles = [
  {
    src: "/images/edu-doodle-helmet.png",
    alt: "",
    width: 321,
    height: 250,
    className:
      "left-[4%] -top-16 w-[118px] -rotate-[8deg] max-[860px]:-top-11 max-[860px]:w-[84px] max-[520px]:hidden"
  },
  {
    src: "/images/edu-doodle-ufo.png",
    alt: "",
    width: 287,
    height: 252,
    className:
      "right-[1%] -top-20 w-[132px] rotate-[10deg] max-[860px]:-top-12 max-[860px]:w-[92px] max-[520px]:right-2 max-[520px]:w-[72px]"
  },
  {
    src: "/images/edu-doodle-satellite.png",
    alt: "",
    width: 351,
    height: 275,
    className:
      "-right-4 bottom-[8%] w-[120px] rotate-[17deg] max-[860px]:right-0 max-[860px]:w-[82px] max-[520px]:hidden"
  },
  {
    src: "/images/edu-doodle-galaxy.png",
    alt: "",
    width: 369,
    height: 140,
    className:
      "left-[39%] -top-11 w-[154px] rotate-[3deg] opacity-90 max-[860px]:-top-8 max-[860px]:w-[110px] max-[520px]:hidden"
  },
  {
    src: "/images/edu-line-teal-loop.png",
    alt: "",
    width: 346,
    height: 96,
    className:
      "left-[19%] -top-8 w-[170px] -rotate-[7deg] opacity-90 max-[860px]:w-[118px] max-[520px]:hidden"
  },
  {
    src: "/images/edu-line-red-loop.png",
    alt: "",
    width: 360,
    height: 90,
    className:
      "right-[18%] top-[5%] w-[150px] rotate-[9deg] opacity-80 max-[860px]:w-[106px] max-[520px]:hidden"
  },
  {
    src: "/images/edu-line-yellow-spiral.png",
    alt: "",
    width: 245,
    height: 132,
    className:
      "left-0 bottom-[2%] w-[104px] -rotate-[16deg] opacity-85 max-[860px]:w-[76px] max-[520px]:hidden"
  },
  {
    src: "/images/edu-line-blue-wave.png",
    alt: "",
    width: 323,
    height: 89,
    className:
      "right-[5%] -bottom-4 w-[136px] rotate-[3deg] opacity-85 max-[860px]:bottom-0 max-[860px]:w-[92px] max-[520px]:hidden"
  }
];

type EducationAward = (typeof educationAwards)[number];

type EducationBookProps = {
  onPreviewChange?: (isOpen: boolean) => void;
};

const displayFont = "[font-family:var(--font-display),var(--font-body),sans-serif]";
const doodleClass =
  "pointer-events-none absolute z-10 h-auto object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.28)] saturate-[.95] hue-rotate-[8deg]";

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export function EducationBook({ onPreviewChange }: EducationBookProps) {
  const [selectedAward, setSelectedAward] = useState<EducationAward | null>(null);

  useEffect(() => {
    onPreviewChange?.(Boolean(selectedAward));
  }, [onPreviewChange, selectedAward]);

  const renderAward = (award: EducationAward) => (
    <button
      className="relative flex h-full w-full min-w-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0 font-[inherit] text-[#15365b] transition duration-200 hover:-translate-y-0.5"
      type="button"
      onClick={() => setSelectedAward(award)}
    >
      <span className="relative block aspect-[350/250] w-full rounded-lg border-2 border-dashed border-[#0c5c5b70] bg-white/60 p-[clamp(4px,.55vw,6px)] transition duration-200 hover:bg-white/85 max-[520px]:border max-[520px]:p-[3px]">
        <Image
          src="/images/education-paperclip.png"
          alt=""
          width={763}
          height={602}
          className="pointer-events-none absolute left-1/2 top-0 z-[2] h-auto w-[clamp(18px,2vw,30px)] -translate-x-1/2 -translate-y-[72%] drop-shadow-[0_4px_5px_rgba(0,0,0,0.22)] max-[520px]:w-3.5"
        />
        <Image
          src={award.image}
          alt={`${award.title} excellent student award`}
          width={260}
          height={184}
          className="h-full w-full rounded-[5px] object-contain object-center max-[520px]:rounded-[3px]"
        />
      </span>
    </button>
  );

  return (
    <>
      <div className="relative w-full">
        <div className="relative mx-auto w-[min(1240px,100%)] drop-shadow-[0_34px_38px_rgba(0,0,0,0.34)] max-[860px]:w-[min(1040px,100%)] max-[520px]:w-[min(760px,100%)] max-[520px]:overflow-x-auto max-[520px]:pb-1">
          {bookDoodles.map((doodle) => (
            <Image
              key={doodle.src}
              src={doodle.src}
              alt={doodle.alt}
              width={doodle.width}
              height={doodle.height}
              className={cx(doodleClass, doodle.className)}
            />
          ))}

          <Image
            src="/images/education-book-clean.png"
            alt="Open book illustration"
            width={1614}
            height={975}
            className="block h-auto w-full object-contain max-[520px]:min-w-[720px]"
            priority={false}
          />

          <div className="pointer-events-none absolute inset-x-[7%] bottom-[14%] top-[5%] grid grid-cols-2 gap-[5.7%] max-[520px]:min-w-[620px]">
            <article className="pointer-events-auto flex min-w-0 flex-col justify-center self-stretch px-[clamp(12px,2.1vw,28px)] py-[clamp(10px,1.4vw,22px)] text-center max-[860px]:px-4 max-[860px]:py-2 max-[520px]:px-2.5 max-[520px]:py-1">
              <Image
                src="/images/uit-logo.png"
                alt="VNUHCM University of Information Technology logo"
                width={1185}
                height={935}
                className="mx-auto mb-3 h-auto w-[clamp(96px,8.5vw,145px)] object-contain drop-shadow-[0_6px_12px_rgba(0,81,214,0.28)] max-[520px]:mb-1.5 max-[520px]:w-12"
              />
              <p className="mx-0 mb-3 mt-0 text-center text-[clamp(.8rem,.95vw,.9rem)] font-black uppercase text-[#0c5c5b] max-[520px]:text-[.58rem]">
                VNUHCM - University of Information Technology
              </p>
              <h3
                className={cx(
                  displayFont,
                  "m-0 text-center text-[clamp(1.45rem,2.25vw,2.35rem)] leading-[1.08] text-[#112852] max-[520px]:text-[1.08rem]"
                )}
              >
                Information Technology
              </h3>
              <p className="mx-0 mb-[22px] mt-3 text-center font-extrabold text-[#486073] max-[520px]:text-[.58rem]">
                (Sep 2023 - Jun 2027 expected)
              </p>

              <ul className="m-0 grid list-none gap-2.5 p-0 text-left max-[520px]:gap-1">
                {educationFacts.map((fact, index) => (
                  <li
                    className="relative pl-[22px] text-[clamp(.82rem,1.2vw,.98rem)] font-bold leading-[1.48] text-[#344d5d] before:absolute before:left-0 before:top-[.75em] before:size-2 before:rounded-full before:bg-[#0c9fa2] before:content-[''] max-[860px]:text-[.78rem] max-[860px]:leading-[1.34] max-[520px]:pl-3.5 max-[520px]:text-[.58rem] max-[520px]:leading-[1.22] max-[520px]:before:size-[5px]"
                    key={index}
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </article>

            <div
              className="pointer-events-auto flex min-h-0 min-w-0 flex-col justify-center gap-y-[clamp(6px,.75vw,10px)] px-[clamp(4px,.9vw,10px)] py-[clamp(4px,.7vw,9px)] max-[860px]:gap-y-2 max-[860px]:px-1.5 max-[860px]:py-1.5 max-[520px]:gap-y-1 max-[520px]:px-1 max-[520px]:py-1"
              aria-label="Excellent student awards"
            >
              <div className="flex w-full items-center justify-center gap-x-[2.4%] mb-5">
                {educationAwards.slice(0, 2).map((award) => (
                  <div className="w-[50%] min-w-0" key={award.title}>
                    {renderAward(award)}
                  </div>
                ))}
              </div>

              <div className="flex w-full items-center justify-center gap-x-[.8%]">
                {educationAwards.slice(2).map((award) => (
                  <div className="w-[47%] min-w-0" key={award.title}>
                    {renderAward(award)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedAward ? (
        <div
          className="fixed inset-0 z-[9999] grid place-items-center bg-[#03050ed6] p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedAward.title} certificate preview`}
          onClick={() => setSelectedAward(null)}
        >
          <div
            className="relative grid w-[min(980px,100%)] gap-3 rounded-lg border border-white/15 bg-[#080c1cf5] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.52)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute -right-3.5 -top-3.5 grid size-[42px] cursor-pointer place-items-center rounded-full border-0 bg-white text-[#11162b]"
              type="button"
              onClick={() => setSelectedAward(null)}
              aria-label="Close certificate preview"
            >
              <X aria-hidden="true" size={22} />
            </button>
            <Image
              src={selectedAward.image}
              alt={`${selectedAward.title} excellent student award`}
              width={1200}
              height={820}
              className="max-h-[78vh] w-full rounded-md object-contain"
            />
            <p className="m-0 text-center font-black text-white">{selectedAward.title}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
