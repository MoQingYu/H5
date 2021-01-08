import Cookies from 'cookies-js'
import { LANG, ZH_CN } from 'cache'
import en from './en'
import zh from './zh'

export default (text: string): string => {
  const lang = Cookies.get(LANG) || ZH_CN;
  const result:any = lang === ZH_CN ? zh : en
  return result[text] || 'text'
}
