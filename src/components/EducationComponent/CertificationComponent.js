import React from "react";
import { ExternalLink } from "lucide-react";
const monthNames = [
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

const formatMonthYear = (m, y) => {
  if (m === "~" || y === "~" || m == null || y == null) return "Present";
  const mm = Number(m);
  if (!mm || mm < 1 || mm > 12) return `${y}`;
  return `${monthNames[mm - 1]} ${y}`;
};
function CertificationComponent({ data }) {
  const {
    Title = "NA",
    InstitutionName = "NA",
    FromMonth = "NA",
    FromYear = "NA",
    ToMonth = "NA",
    ToYear = "NA",
    Link = "NA",
  } = data || {};
  const fromDisplay =
    FromMonth === "NA" || FromYear === "NA"
      ? "NA"
      : formatMonthYear(FromMonth, FromYear);

  const toDisplay =
    ToMonth === "NA" || ToYear === "NA"
      ? "NA"
      : formatMonthYear(ToMonth, ToYear);
  const hasLink = Link && Link !== "NA";

  return (
    <div className="col-span-full z-1">
      <div className="rounded-[40px] bg-white/2 backdrop-blur-lg border border-white/30 dark:!border-black/30 shadow-xl shadow-black/10 dark:bg-black/30 p-6 ">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4 min-w-0">
            <div className="flex items-start gap-4">
              {/* Left icon box */}
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-blue-50">
                {/* badge icon */}
                <svg
                  className="h-6 w-6 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2l3 3h4v4l3 3-3 3v4h-4l-3 3-3-3H5v-4l-3-3 3-3V5h4l3-3z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9.5 12l1.8 1.8L14.8 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3 className="m-0 text-lg font-semibold text-gray-900 dark:text-white/90 text-left ">
                  {Title}
                </h3>
                <div className="mt-0 text-base font-semibold text-blue-700 dark:text-blue-500 text-left">
                  {InstitutionName}
                </div>
                <div className="mt-0 text-sm text-gray-600 text-left">
                  Valid: {fromDisplay} - {toDisplay}
                </div>
              </div>
            </div>
          </div>

          {/* Right action */}
          <div className="flex flex-none items-center w-full md:w-auto">
            {hasLink ? (
              <a
                href={Link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full md:w-auto justify-center items-center gap-2 rounded-lg rounded-3xl border border-gray-300 dark:!border-gray-600 bg-white dark:!bg-gray-800  px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 no-underline hover:bg-gray-50"
              >
                View Certificate
                <ExternalLink size={16} className="text-gray-700 dark:text-gray-400 " />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CertificationComponent;
