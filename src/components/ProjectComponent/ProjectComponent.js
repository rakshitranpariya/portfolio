import React from "react";
import clsx from "clsx";
import { useState } from "react";
import flip_image from "../../Images/flip.png";
import { CalendarDays, Github } from "lucide-react";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const monthLabel = (m) => MONTHS[(Number(m) || 1) - 1];

export default function ProjectComponent({ data }) {
  const [isFlipped, setIsFlipped] = useState(false);

  if (!data) return null;

  // Handlers
  const handleFlip = () => setIsFlipped(true); // Flip when hovering icon
  const handleReset = () => setIsFlipped(false); // Reset when leaving card
  const {
    ProjectName,
    FromMonth,
    FromYear,
    ToMonth,
    ToYear,
    Description,
    Responsibilities,
    TechStack,
    Link,
  } = data;

  const formattedDate = `${monthLabel(FromMonth)} ${FromYear} – ${monthLabel(
    ToMonth
  )} ${ToYear}`;

  const hasValidLink = Link && Link !== "NA";

  return (
    <div
      onMouseLeave={handleReset}
      className={clsx(
        " group rounded-xl  relative perspective-1000 flex flex-col h-full flex flex-col perspective-1000",
        {
          "[&_.card-inner]:[transform:rotateY(180deg)]": isFlipped,
        }
      )}
    >
      <div className=" h-full w-full transition-transform duration-500 [transform-style:preserve-3d] card-inner">
        <div className="card-front flex flex-col bg-white backface-hidden pt-4 px-4 pb-3 rounded-xl shadow-md border border-gray-100 h-full w-full [backface-visibility:hidden]">
          {/* Absolute Positioned Flip Icon */}
          <img
            src={flip_image}
            onMouseEnter={handleFlip}
            alt="Flip Icon"
            className="absolute top-4 right-4 w-6 h-6 cursor-pointer z-20 opacity-50 hover:opacity-100 transition-opacity"
          />
          {/* Github Link (Below Flip Icon) */}
          {hasValidLink && (
            <a
              href={Link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="absolute top-14 right-4 z-20 text-gray-400 hover:text-black transition-colors p-1"
              title="View on GitHub"
            >
              <Github size={20} />
            </a>
          )}
          {/* Title */}
          <div className="flex flex-row justify-between items-start  gap-2 mb-2 pr-8">
            <h3 className="text-xl font-extrabold text-gray-900">
              {ProjectName}
            </h3>
          </div>

          {/* Date row */}

          <div className="mt-0 flex items-center gap-2 text-sm text-gray-500">
            <CalendarDays size={16} className="text-gray-400" />
            <span>{formattedDate}</span>
          </div>

          {/* Description */}
          {Description && (
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              {Description}
            </p>
          )}

          {/* Tech chips */}
          {Array.isArray(TechStack) && TechStack.length > 0 && (
            <div className="mt-1  flex flex-wrap gap-2">
              {TechStack.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="card-back absolute inset-0 backface-hidden pt-4 px-4 pb-3 rotate-y-180 bg-white p-4 rounded-xl shadow-md border border-gray-100 h-full w-full overflow-y-auto [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {/* Absolute Positioned Flip Icon */}
          <img
            src={flip_image}
            alt="Flip Icon"
            onMouseEnter={handleFlip}
            className="absolute top-4 right-4 w-6 h-6 cursor-pointer z-20 opacity-50 hover:opacity-100 transition-opacity"
          />
          {/* Key Achievements */}
          {Array.isArray(Responsibilities) && Responsibilities.length > 0 && (
            <div className="mt-2">
              <div className="text-sm font-bold text-gray-900">
                Contributions:
              </div>
              <ul className="mt-2 list-disc ml-5 space-y-2 text-sm text-gray-600">
                {Responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
