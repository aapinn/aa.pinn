"use client";

import { cn } from "../../../lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

let notifications = [
  {
    name: "Sales Advisor",
    time: "Nov 2023 - Present",
    description: "PT. Aspirasi Hidup Indonesia",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Store Crew",
    description: "PT. Albani Corona Lestari",
    time: "jul 2018 - jan 2020",
    icon: "🐳",
    color: "#FFB800",
  },
  {
    name: "Store Junior Leader",
    description: "PT. Indomarco Prismatama",
    time: "Jan 2020 - Jan 2021",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Store Senior Leader",
    description: "PT. Indomarco Prismatama",
    time: "Jan 2021 - Okt 2023",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full  cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-500 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function MagicGrid() {
  return (
    <div
      className={cn(
        "duration-500 relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
