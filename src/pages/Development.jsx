import { useTranslation } from "react-i18next";

function Development() {
  const { t } = useTranslation();

  return (
    <>
      <div className="developmentContainer">
        <div className="developmentColumn">
          <div>
            <h1>{t("development.languages")}</h1>
            <div className="technology">
              <div>
                <img src="https://skillicons.dev/icons?i=cs" alt="Icono C#" />
                <p>C#</p>
              </div>
              <div>
                <img
                  src="https://skillicons.dev/icons?i=html"
                  alt="Icono HTML"
                />
                <p>HTML</p>
              </div>
              <div>
                <img src="https://skillicons.dev/icons?i=css" alt="Icono CSS" />
                <p>CSS</p>
              </div>
              <div>
                <img
                  src="https://skillicons.dev/icons?i=js"
                  alt="Icono JavaScript"
                />
                <p>JavaScript</p>
              </div>
            </div>
          </div>
          <div>
            <h1>{t("development.database")}</h1>
            <div className="technology">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Microsoft_SQL_Server_2025_icon.svg"
                  alt="Icono Microsoft SQL Server"
                />
                <p>Microsoft SQL Server</p>
              </div>
              <div>
                <img
                  src="https://skillicons.dev/icons?i=postgres&theme=light"
                  alt="Icono PostgreSQL"
                />
                <p>PostgreSQL</p>
              </div>
              <div>
                <img
                  src="https://skillicons.dev/icons?i=supabase"
                  alt="Icono Supabase"
                />
                <p>Supabase</p>
              </div>
            </div>
          </div>
          <div>
            <h1>{t("development.design")}</h1>
            <div className="technology">
              <div>
                <img
                  src="https://skillicons.dev/icons?i=figma"
                  alt="Icono Figma"
                />
                <p>Figma</p>
              </div>
              <div>
                <img
                  src="https://skillicons.dev/icons?i=ps"
                  alt="Icono Adobe Photoshop"
                />
                <p>Adobe Photoshop</p>
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
                  src="https://skillicons.dev/icons?i=pr"
                  alt="Icono Adobe Premiere Pro"
                />
                <p>Adobe Premiere Pro</p>
              </div>
            </div>
          </div>
        </div>

        <div className="developmentColumn">
          <div>
            <h1>{t("development.frameworks")}</h1>
            <div className="technology">
              <div>
                <img
                  src="https://skillicons.dev/icons?i=dotnet"
                  alt="Icono .NET"
                />
                <p>.NET</p>
              </div>
              <div>
                <img
                  src="https://skillicons.dev/icons?i=react"
                  alt="Icono React"
                />
                <p>React</p>
              </div>
              <div>
                <img
                  src="https://skillicons.dev/icons?i=react&theme=light"
                  alt="Icono React Native"
                />
                <p>React Native</p>
              </div>
              <div>
                <img
                  src="https://skillicons.dev/icons?i=vite"
                  alt="Icono Vite"
                />
                <p>Vite</p>
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
                  src="https://skillicons.dev/icons?i=discordjs"
                  alt="Icono Discord.js"
                />
                <p>Discord.js</p>
              </div>
              <div>
                <img
                  src="https://skillicons.dev/icons?i=bootstrap"
                  alt="Icono Bootstrap"
                />
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
          <div>
            <h1>{t("development.tools")}</h1>
            <div className="technology">
              <div>
                <img src="https://skillicons.dev/icons?i=git" alt="Icono Git" />
                <p>Git</p>
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
                  src="https://skillicons.dev/icons?i=visualstudio"
                  alt="Icono Visual Studio 2022"
                />
                <p>Visual Studio 2022</p>
              </div>
              <div>
                <img
                  src="https://skillicons.dev/icons?i=postman"
                  alt="Icono Postman"
                />
                <p>Postman</p>
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
          <div>
            <h1>{t("development.infrastructure")}</h1>
            <div className="technology">
              <div>
                <img
                  src="https://skillicons.dev/icons?i=cloudflare"
                  alt="Icono Cloudflare"
                />
                <p>Cloudflare</p>
              </div>
              <div>
                <img
                  src="https://skillicons.dev/icons?i=netlify"
                  alt="Icono Netlify"
                />
                <p>Netlify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Development;
