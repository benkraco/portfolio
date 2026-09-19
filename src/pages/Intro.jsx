import { useTranslation } from "react-i18next";
import yo from "../assets/yo.jpeg";
import { useState } from "react";

function Intro() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("info@benkraco.com");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="intro">
      <img src={yo} alt="Intro Image" />
      <div className="introTexts">
        <h1>Benjamin Kracovitz</h1>
        <h2>{t("intro.subtitle")}</h2>

        <div className="introContact">
          <h3>{t("intro.contact")}</h3>
          <div className="contactButtons">
            <div className="emailContainer">
              <button className="emailButton" onClick={copyEmail}>
                info@benkraco.com
              </button>

              {copied && <div className="copyPopover">¡Email copiado!</div>}
            </div>

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
