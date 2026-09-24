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
                <h3>{t("projects.tools")}</h3>
                <div className="technologies">
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=cs"
                      alt="Icon C#"
                    />
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
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=html"
                      alt="Icon HTML"
                    />
                    <p>HTML</p>
                  </div>
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=css"
                      alt="Icon CSS"
                    />
                    <p>CSS</p>
                  </div>
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=js"
                      alt="Icon JavaScript"
                    />
                    <p>JavaScript</p>
                  </div>
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=figma"
                      alt="Icon Figma"
                    />
                    <p>Figma</p>
                  </div>
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=ps"
                      alt="Icon Adobe Photoshop"
                    />
                    <p>Adobe Photoshop</p>
                  </div>
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=ai"
                      alt="Icon Adobe Illustrator"
                    />
                    <p>Adobe Illustrator</p>
                  </div>
                  <div>
                    <img
                      src="https://images.icon-icons.com/836/PNG/512/Trello_icon-icons.com_66775.png"
                      alt="Icon Trello"
                    />
                    <p>Trello</p>
                  </div>
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=bootstrap"
                      alt="Icon Bootstrap"
                    />
                    <p>Bootstrap</p>
                  </div>
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=github"
                      alt="Icon GitHub"
                    />
                    <p>GitHub</p>
                  </div>
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=vscode"
                      alt="Icon Visual Studio Code"
                    />
                    <p>Visual Studio Code</p>
                  </div>
                </div>
              </div>
            ) : selectedProject === "quorum" ? (
              <div>
                <h1>Quórum</h1>
                <h3>{t("projects.tools")}</h3>
                <div className="technologies">
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=react&theme=light"
                      alt="Icono React Native"
                    />
                    <p>React Native</p>
                  </div>
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=supabase"
                      alt="Icono Supabase"
                    />
                    <p>Supabase</p>
                  </div>
                  <div>
                    <img
                      src="https://images.icon-icons.com/2389/PNG/512/expo_logo_icon_145293.png"
                      alt="Icono Expo"
                    />
                    <p>Expo</p>
                  </div>
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=nodejs"
                      alt="Icono Node.js"
                    />
                    <p>Node.js</p>
                  </div>
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=js"
                      alt="Icono JavaScript"
                    />
                    <p>JavaScript</p>
                  </div>
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=github"
                      alt="Icono GitHub"
                    />
                    <p>GitHub</p>
                  </div>
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=vscode"
                      alt="Icono Visual Studio Code"
                    />
                    <p>Visual Studio Code</p>
                  </div>
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=figma"
                      alt="Icono Figma"
                    />
                    <p>Figma</p>
                  </div>
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=ai"
                      alt="Icono Adobe Illustrator"
                    />
                    <p>Adobe Illustrator</p>
                  </div>
                  <div>
                    <img
                      src="https://images.icon-icons.com/836/PNG/512/Trello_icon-icons.com_66775.png"
                      alt="Icon Trello"
                    />
                    <p>Trello</p>
                  </div>
                </div>
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
