import { useTranslation } from "react-i18next";
import { getAge } from "../hooks/useBirthday";
import yo2 from "../assets/yo2.jpg";

function AboutMe() {
  const { t } = useTranslation();
  const age = getAge();

  return (
    <>
      <div className="sobremi">
        <div className="introduction">
          <img src={yo2} alt="Imagen Yo" />
          <div>
            <p
              dangerouslySetInnerHTML={{ __html: t("aboutme.list", { age }) }}
            />
          </div>
        </div>
        <h3>{t("aboutme.title1")}</h3>
        <p className="textAbout">{t("aboutme.description1")}</p>
        <h3>{t("aboutme.title2")}</h3>
        <p className="textAbout">{t("aboutme.description2")}</p>
        <h3>{t("aboutme.title3")}</h3>
        <p className="textAbout">{t("aboutme.description3")}</p>
      </div>
    </>
  );
}

export default AboutMe;
