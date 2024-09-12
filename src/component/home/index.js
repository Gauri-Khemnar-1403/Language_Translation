import React from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="box pt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <span class="badge badge-pill color pl-4 pr-4 pt-3 pb-3 mb-3">
              {t('home.flexiblesolutions')}
              </span>
              <h2 className="font-weight-bold pt-2">
              {t('home.bigText')}
              </h2>
              <p className="pt-3">
              {t('home.smallText')}
              </p>
              <button class="badge badge-pill color signup-btn mt-4">
              {t('home.flexiblesolutions')}
                <i className="fa-solid fa-arrow-right-long pl-2"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg"
              alt="Business Solutions"
              className="img-fluid img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
