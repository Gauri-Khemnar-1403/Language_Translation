import React from "react";
import { useTranslation } from "react-i18next";
import "./about.css";

const About = () => {
    const { t } = useTranslation();
    return (
        // <div className="container">
        //     <h1>{t('about.title')}</h1>
        //     <p>{t('about.description')}</p>
        <div className="container">
            <h5 class="card-title font pb-4">{t('about.text1')}</h5>
            <div class="card-deck">
                <div class="card box">
                    <div class="card-body ">
                        <span class="badge badge-pill color pl-4 pr-4 pt-2 pb-2 mb-3">
                        {t('about.one')}
                        </span>
                        <h5 class="card-title font mb-3">{t('about.t1')}</h5>
                        <p class="card-text">
                        {t('about.dis1')}
                        </p>
                    </div>
                </div>
                <div class="card box">
                    <div class="card-body ">
                        <span class="badge badge-pill color pl-4 pr-4 pt-2 pb-2 mb-3">
                        {t('about.two')}
                        </span>
                        <h5 class="card-title font mb-3">{t('about.t2')}</h5>
                        <p class="card-text">
                        {t('about.dis2')}
                        </p>
                    </div>
                </div>
                <div class="card box">
                    <div class="card-body ">
                        <span class="badge badge-pill color pl-4 pr-4 pt-2 pb-2 mb-3">
                        {t('about.three')}
                        </span>
                        <h5 class="card-title font mb-3">{t('about.t3')}</h5>
                        <p class="card-text">
                        {t('about.dis3')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default About;
