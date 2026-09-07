import { useTranslation } from "react-i18next";
import tipo from "../assets/depositphotos_25144791-stock-photo-portrait-of-happy-young-adult.jpg";

function Intro() {
  const { t } = useTranslation();

  return (
    <div className="intro">
      <img src={tipo} alt="Intro Image" />
      <div className="introTexts">
        <h1>Benjamin Kracovitz</h1>
        <p>{t("intro.list")}</p>

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
