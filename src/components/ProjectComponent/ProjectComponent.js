import clsx from "clsx";
import { useState } from "react";
import flip_image from "../../Images/flip_icon.png";
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
console.log(Image);
export default function ProjectComponent({ data }) {
  const [isFlipped, setIsFlipped] = useState(false);

  if (!data) return null;

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped); // Toggle both ways
  };

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
    Image,
  } = data;

  const formattedDate = `${monthLabel(FromMonth)} ${FromYear} – ${monthLabel(
    ToMonth,
  )} ${ToYear}`;

  const hasValidLink = Link && Link !== "NA";

  return (
    <div
      onMouseLeave={handleReset}
      className={clsx(
        " group rounded-xl  relative perspective-1000 flex flex-col h-full perspective-1000",
        {
          "[&_.card-inner]:[transform:rotateY(180deg)]": isFlipped,
        },
      )}
    >
      <div className=" h-full w-full transition-transform duration-500 [transform-style:preserve-3d] card-inner z-2">
        <div
          className="card-front bg-white/2  dark:bg-black/30 backdrop-blur-lg border border-white/30 dark:!border-black/30 shadow-xl shadow-black/10 flex flex-col backface-hidden  rounded-[40px]  h-full w-full [backface-visibility:hidden]"
          onClick={handleToggle} // Tap anywhere to flip/toggle
        >
          <div className="flex flex-col">
            <img
              src={Image}
              alt={ProjectName}
              className="w-full rounded-tl-3xl rounded-tr-3xl h-[200px] w-full object-cover object-center"
            />
            <div className=" px-4 pb-3">
              <div className="flex flex-row justify-between items-center my-3 ">
                <div className="">
                  {/* Title */}
                  <div className="flex flex-row justify-between items-start  gap-2 mb-2 pr-8">
                    <h3 className="text-xl font-extrabold text-gray-900 dark:!text-white/90">
                      {ProjectName}
                    </h3>
                  </div>

                  {/* Date row */}
                  <div className="mt-0 flex items-center gap-2 text-sm text-gray-500 dark:text-white/50">
                    <CalendarDays size={16} className=" " />
                    <span>{formattedDate}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between gap-4">
                  {/* Absolute Positioned Flip Icon */}
                  <img
                    src={flip_image}
                    onClick={handleToggle}
                    onMouseEnter={handleFlip}
                    alt="Flip Icon"
                    className="relative  w-6 h-6 cursor-pointer z-20 opacity-50 hover:opacity-100 transition-opacity duration-200 brightness-150 contrast-110 dark:brightness-0 dark:invert"
                  />
                  {/* Github Link  */}
                  {hasValidLink && (
                    <a
                      href={Link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="relative z-20 text-gray-400 hover:text-black transition-colors p-1"
                      title="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              {Description && (
                <p className="mt-3 text-sm text-gray-600 dark:text-white/50 leading-relaxed">
                  {Description}
                </p>
              )}

              {/* Tech chips */}
              {Array.isArray(TechStack) && TechStack.length > 0 && (
                <div className="mt-1  flex flex-wrap gap-2">
                  {TechStack.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1  text-xs font-medium rounded-full bg-blue-50 text-blue-600 dark:text-white/90 dark:!bg-gray-800  border border-blue-100 dark:!border-gray-700 "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className="card-back absolute bg-white/2 dark:bg-black/30 backdrop-blur-lg border border-white/30  dark:!border-black/30  shadow-xl shadow-black/10 inset-0 backface-hidden  rotate-y-180   rounded-[40px]  h-full w-full overflow-y-auto [transform:rotateY(180deg)] [backface-visibility:hidden]"
          onClick={handleToggle}
        >
          <div className="flex flex-col">
            <img
              src={Image}
              alt={ProjectName}
              className="w-full rounded-tl-3xl rounded-tr-3xl h-[200px] w-full object-cover object-center"
            />
            <div className="px-4 pb-3">
              {/* Key Achievements */}
              {Array.isArray(Responsibilities) &&
                Responsibilities.length > 0 && (
                  <div className="mt-2">
                    <div className="flex flex-row justify-between my-4">
                      <div className="text-lg font-bold text-black dark:!text-white/90">
                        Contributions:
                      </div>

                      {/* Absolute Positioned Flip Icon */}
                      <img
                        src={flip_image}
                        alt="Flip Icon"
                        onClick={handleToggle}
                        onMouseEnter={handleFlip}
                        className="relative w-6 h-6 cursor-pointer z-20 opacity-50 hover:opacity-100 transition-opacity duration-200 brightness-150 contrast-110 dark:brightness-0 dark:invert"
                      />
                    </div>

                    <ul className=" list-disc ml-5 space-y-2 text-sm text-gray-600 dark:text-white/50">
                      {Responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
