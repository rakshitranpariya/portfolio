import { MapPin, Calendar, BookOpen } from "lucide-react";

const ExperienceComponent = ({ sendData, left = false }) => {
  if (!sendData) return null;

  const {
    CompanyName,
    Role,
    EmploymentType,
    Location,
    FromMonth,
    FromYear,
    ToMonth,
    ToYear,
    Responsibilities,
    TechStack,
    ImageLink,
  } = sendData;

  if (!sendData || sendData.length === 0) {
    console.log("No data received yet.");
    return <p>Loading...</p>;
  }
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

  const monthToLabel = (m) => MONTHS[(Number(m) || 1) - 1];

  const formattedDate =
    ToYear === "~"
      ? `${monthToLabel(FromMonth)} ${FromYear} – Present`
      : `${monthToLabel(FromMonth)} ${FromYear} – ${monthToLabel(
          ToMonth
        )} ${ToYear}`;

  return (
    <div className="relative z-10 ">
      <div className=" timeline-img " />
      <div
        className={`relative flex flex-col md:flex-row items-start md:gap-6 `}
      >
        <div
          className={`order-2 ${
            left ? "md:order-1" : "md:order-2"
          } timeline-container ${left ? "timeline-container-left " : ""}`}
        >
          <div
            className={`timeline-pointer ${
              left ? "timeline-pointer-left " : "  "
            }`}
            aria-hidden="true"
          />

          <div className="bg-white p-6 rounded-md shadow-md">
            {/* Header: Role + Company */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 mt-0 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center overflow-hidden">
                {ImageLink ? (
                  <img
                    src={ImageLink}
                    alt={`${Role} at ${CompanyName}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-blue-700 text-xl">🎓</span>
                )}
              </div>

              <div className="min-w-0">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 m-0">
                  {Role}
                </h2>
                <p className=" text-blue-600 font-semibold">{CompanyName}</p>
              </div>
            </div>
            {/* Meta row */}
            <div className="mt-0 md:mt-3 flex flex-wrap gap-x-4 gap-y-2 md:gap-3 text-sm text-gray-500">
              {Location && (
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-gray-400" />
                  {Location}
                </span>
              )}

              {EmploymentType && (
                <span className="flex items-center gap-1">
                  <BookOpen size={14} className="text-gray-400" />
                  {EmploymentType}
                </span>
              )}
              <span className="inline-flex items-center gap-1 text-sm md:hidden ">
                <Calendar size={14} className="text-gray-400 " />
                {formattedDate}
              </span>
            </div>

            {/* Responsibilities */}
            {Array.isArray(Responsibilities) && Responsibilities.length > 0 && (
              <ul className="mt-4 list-disc list-outside ml-4 space-y-1 text-sm text-gray-700">
                {Responsibilities.map((item, idx) => (
                  <li key={idx} className="text-justify pr-6">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Tech stack chips */}
            {Array.isArray(TechStack) && TechStack.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {TechStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

          
          </div>
        </div>

        <div
          className={` xs:pl-28 md:pl-0 ${
            left ? "md:order-2" : "md:order-1"
          }   mt-9 ${
            left ? "md:mr-auto" : "md:ml-auto"
          } aria-hidden="true" relative `}
        >
          <span className="hidden md:flex items-center gap-1 font-bold  md:text-lg text-gray-600 ">
            {/* <Calendar size={21} className="text-gray-10000 " /> */}
            {formattedDate}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ExperienceComponent;
