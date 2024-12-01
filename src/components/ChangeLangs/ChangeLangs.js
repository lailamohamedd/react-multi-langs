import React, { useContext } from 'react'
import { TranslateContext } from '../../utilis/TranslateContext'

const ChangeLangs = () => {
    const {handleChangeLang, ArLang} = useContext(TranslateContext)
  return (
    <>
        <div className='lang_btn'>
            <button className={`lang ${ArLang? "deactive" : ""}`} onClick={()=> handleChangeLang("ar")}>
            AR
            </button>
            <button className={`lang ${ArLang ? "" : "deactive"}`} onClick={()=> handleChangeLang("en")}>
            EN
            </button>
        </div>
    </>
  )
}

export default ChangeLangs
