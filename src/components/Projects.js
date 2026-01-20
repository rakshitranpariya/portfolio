import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectComponent from "./ProjectComponent/ProjectComponent";
import { Helmet } from "react-helmet-async";

export default function Project() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(
        "https://62e2fnrj4g.execute-api.us-east-2.amazonaws.com/prod/project-function"
      );

      const normalize = (d) => (Array.isArray(d) ? d : d ? [d] : []);
      const data = normalize(res.data).sort(
        (a, b) => Number(a.id) - Number(b.id)
      );
      setProjects(data);
    } catch (e) {
      console.error("Error fetching projects:", e.message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <Helmet>
        <section id="Projects" className=" py-12">
          <div className="  justify-center w-full lg:h-screen px-4">
            {/* Title like screenshot */}
            <div className="text-center mb-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                Featured Projects
              </h2>
              <div className="mt-3 h-1 w-20 bg-blue-600 mx-auto rounded" />
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, idx) => (
                <ProjectComponent key={p.id ?? idx} data={p} />
              ))}
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
}
