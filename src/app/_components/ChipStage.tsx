"use client";
import dynamic from "next/dynamic";

const ChipScene = dynamic(() => import("@/app/_components/ChipScene").then((module) => module.ChipScene), {
  ssr: false,
  loading: () => <div className="chip-art" role="img" aria-label="Illustration of an integrated circuit package"><div className="chip"><span className="chip-dot"/><div className="chip-die">DEKUT · IC</div></div></div>,
});

export default function ChipStage() { return <ChipScene/>; }
