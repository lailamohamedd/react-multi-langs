import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { TranslateContext } from '../../utilis/TranslateContext';
import ARImage from '../../images/ar.webp'
import ENImage from '../../images/en.jpeg'

const Langs = () => {
    const { t } = useTranslation("global");
    const {handleChangeLang, ArLang} = useContext(TranslateContext)
  return (
    <div>
      <h1>{ t("text.laila")}</h1>
      <div className='images'>
            <img src={ARImage} className={`img ${ArLang? "deactive" : ""}`} onClick={()=> handleChangeLang("ar")} />
            <img src={ENImage} className={`img ${ArLang ? "" : "deactive"}`} onClick={()=> handleChangeLang("en")} />
        </div>
    </div>
  )
}

export default Langs
