import React from "react";
import { CalendarDays, Github, ExternalLink } from "lucide-react";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const monthLabel = (m) => MONTHS[(Number(m) || 1) - 1];

export default function ProjectComponent({ data }) {
  if (!data) return null;

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

  const formattedDate = `${monthLabel(FromMonth)} ${FromYear} – ${monthLabel(ToMonth)} ${ToYear}`;

  const hasValidLink = Link && Link !== "NA";

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col h-full flex flex-col h-full">
      {/* Title */}
      <h3 className="text-xl font-extrabold text-gray-900">
        {ProjectName}
      </h3>

      {/* Date row */}
      <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
        <CalendarDays size={16} className="text-gray-400" />
        <span>{formattedDate}</span>
      </div>

      {/* Description */}
      {Description && (
        <p className="mt-5 text-sm text-gray-600 leading-relaxed">
          {Description}
        </p>
      )}

      {/* Key Achievements */}
      {Array.isArray(Responsibilities) && Responsibilities.length > 0 && (
        <div className="mt-5">
          <div className="text-sm font-bold text-gray-900">
            Key Achievements:
          </div>
          <ul className="mt-2 list-disc ml-5 space-y-2 text-sm text-gray-600">
            {Responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech chips */}
      {Array.isArray(TechStack) && TechStack.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
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

      {/* Bottom button */}
      <div className="mt-6 pt-4 border-t border-gray-100 mt-auto">
        <a
          href={hasValidLink ? Link : "#"}
          target={hasValidLink ? "_blank" : undefined}
          rel={hasValidLink ? "noreferrer" : undefined}
          className={`w-full inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold
            ${hasValidLink
              ? "border-gray-200 text-gray-700 hover:bg-gray-50"
              : "border-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          onClick={(e) => {
            if (!hasValidLink) e.preventDefault();
          }}
        >
          <Github size={16} />
          View on GitHub
          <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
}
