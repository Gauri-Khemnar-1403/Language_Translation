import React from "react";
import { useTranslation } from "react-i18next";
import "./pricing.css"
const Pricing = () => {
    const { t } = useTranslation();
    return (
        //     <h1>{t('pricing.title')}</h1>
        //     <p>{t('pricing.description')}</p>
        // </div>
        <div className="container">
            <div class="card-deck">
                <div class="card box">
                    <div class="card-body ">
                    <h5 class="">{t('pricing.free')}</h5>
                        <h5 class="card-title font1">{t('pricing.free')}</h5>
                        <p class="card-text">{t('pricing.smallText1')}</p>
                        <p class="card-text pt-2"><i class="fa-solid fa-check pr-2"></i> {t('pricing.t11')}</p>
                        <p class="card-text"><i class="fa-solid fa-check pr-2"></i> {t('pricing.t12')}</p>
                        <p class="card-text"><i class="fa-solid fa-check pr-2"></i> {t('pricing.t13')}</p>
                        <p class="card-text"><i class="fa-solid fa-check pr-2"></i> {t('pricing.t14')}</p>
                    </div>
                </div>
                <div class="card box">
                <div class="card-body ">
                    <h5 class="">{t('pricing.text1')}</h5>
                        <h5 class="card-title font1">{t('pricing.text2')}</h5>
                        <p class="card-text">{t('pricing.smallText2')}</p>
                        <p class="card-text pt-2"><i class="fa-solid fa-check pr-2"></i> {t('pricing.t21')}</p>
                        <p class="card-text"><i class="fa-solid fa-check pr-2"></i> {t('pricing.t22')}</p>
                        <p class="card-text"><i class="fa-solid fa-check pr-2"></i> {t('pricing.t23')}</p>
                        <p class="card-text"><i class="fa-solid fa-check pr-2"></i> {t('pricing.t24')}</p>
                    </div>
                </div>
                <div class="card box">
                <div class="card-body ">
                    <h5 class="">{t('pricing.text3')}</h5>
                        <h5 class="card-title font1">{t('pricing.text4')}</h5>
                        <p class="card-text">{t('pricing.smallText2')}</p>
                        <p class="card-text pt-2"><i class="fa-solid fa-check pr-2"></i> {t('pricing.t31')}</p>
                        <p class="card-text"><i class="fa-solid fa-check pr-2"></i> {t('pricing.t32')}</p>
                        <p class="card-text"><i class="fa-solid fa-check pr-2"></i> {t('pricing.t33')}</p>
                        <p class="card-text"><i class="fa-solid fa-check pr-2"></i> {t('pricing.t34')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
