import React, { useCallback, useEffect }  from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { changeLange } from "@store/action/common";
import { ZH_CN, EN_US, LANG } from 'cache'
import Cookies from 'cookies-js'
import ImagePng from "@assets/img/1.jpg";
import t from "@locales";
import "./style.less";

interface PropsModal {
  onChangeLang: (v: string)=> void
}

const Demo: React.FC<PropsModal> = (props)=>{

  const _handleChangeLang = useCallback(()=>{
    const { onChangeLang } = props;
    Cookies.set(LANG, EN_US)
    onChangeLang(EN_US)
  }, [])

  useEffect(()=>{
    console.log(props);
  }, [props])

  return (
    <>
      <h1>Demo</h1>
      <h1>{t("lang")}</h1>
      <button
        onClick={_handleChangeLang}
      >
        中文
      </button>
      <br style={{marginBottom: 30}}/>
      <img src={ImagePng}/>
      <div className="bgImg" />
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    lang: state.common.lang
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onChangeLang: (lang: string) => {
      dispatch(changeLange(lang))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);