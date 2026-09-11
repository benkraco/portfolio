import { useTranslation } from "react-i18next";
import yo from "../assets/yo.jpeg";
import { getAge } from "../hooks/useBirthday";

function Intro() {
  const { t } = useTranslation();
  const age = getAge()

  return (
    <div className="intro">
      <img src={yo} alt="Intro Image" />
      <div className="introTexts">
        <h1>Benjamin Kracovitz</h1>
        <p>{t("intro.list", { age })}</p>

        <div className="introContact">
          <h3>{t("intro.contact")}</h3>
          <div>
            <a href="mailto:info@benkraco.com">info@benkraco.com</a>
            <a
              href="https://www.linkedin.com/in/benjamin-kracovitz"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
