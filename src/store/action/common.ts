import { CHANGE_LANG } from "../modalStatic";

export const changeLange = (lang: string) => {
  return {
    type: CHANGE_LANG,
    value: lang
  }
}
