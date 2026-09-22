import Nutrinfo from "../assets/Nutrinfo.png";
import Quorum from "../assets/Quorum.jpg";
import Blog from "../assets/blog.png";

import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";

function Projects() {
  const { t } = useTranslation();

  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowMore = (project) => {
    setSelectedProject(project);
    setShowMore(true);
  };

  const handleClose = () => {
    setShowMore(false);
    setSelectedProject(null);
  };

  return (
    <div className="projects">
      <div className="project nutrinfo">
        <div className="projectName">
          <h1>Nutrinfo (2025)</h1>
          <img src={Nutrinfo} alt="Nutrinfo Isologo" />
        </div>
        <div className="projectText">
          <p dangerouslySetInnerHTML={{ __html: t("projects.nutrinfoText") }} />
          <div className="technologies">
            <div>
              <img src="https://skillicons.dev/icons?i=cs" alt="Icon C#" />
              <p>C#</p>
            </div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=dotnet"
                alt="Icon .NET"
              />
              <p>.NET</p>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Microsoft_SQL_Server_2025_icon.svg"
                alt="Icon SQL Server"
              />
              <p>SQL Server</p>
            </div>
          </div>
          <button onClick={() => handleShowMore("nutrinfo")}>Ver más</button>
        </div>
      </div>
      <div className="project quorum">
        <div className="projectName">
          <h1>Quórum (2026)</h1>
          <img src={Quorum} alt="Quórum Isologo" />
        </div>
        <div className="projectText">
          <p dangerouslySetInnerHTML={{ __html: t("projects.quorumText") }} />
          <div className="technologies">
            <div>
              <img
                src="https://skillicons.dev/icons?i=react&theme=light"
                alt="Icon React Native"
              />
              <p>React Native</p>
            </div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=supabase"
                alt="Icon Supabase"
              />
              <p>Supabase</p>
            </div>
          </div>
          <button onClick={() => handleShowMore("quorum")}>Ver más</button>
        </div>
      </div>
      <div className="project blog">
        <div className="projectName">
          <h1>Blog (2026)</h1>
          <img src={Blog} alt="Captura Blog" />
        </div>
        <div className="projectText">
          <p>{t("projects.blogText")}</p>
          <div className="technologies">
            <div>
              <img
                src="https://skillicons.dev/icons?i=dotnet"
                alt="Icon .NET"
              />
              <p>.NET</p>
            </div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=react"
                alt="Icon React"
              />
              <p>React</p>
            </div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=cloudflare"
                alt="Icon Cloudflare"
              />
              <p>Cloudflare</p>
            </div>
          </div>
          <button onClick={() => handleShowMore("blog")}>Ver más</button>
        </div>
      </div>

      {showMore && (
        <div className="projectOverlay" onClick={handleClose}>
          <div className="projectModal" onClick={(e) => e.stopPropagation()}>
            {selectedProject === "nutrinfo" ? (
              <div>
                <h1>Nutrinfo</h1>
              </div>
            ) : selectedProject === "quorum" ? (
              <div>
                <h1>Quórum</h1>
              </div>
            ) : selectedProject === "blog" ? (
              <div>
                <h1>Blog</h1>
              </div>
            ) : (
              <span style={{ color: "gray" }}>Estado desconocido</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
