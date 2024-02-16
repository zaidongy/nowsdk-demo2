import { GlideRecord, gs } from "@servicenow/glide";
import * as lodash from 'lodash'

export const addLog = (newValue: string, oldValue: string) => {
    gs.addInfoMessage(`Value changed from  ${oldValue} to ${newValue}`);
    gs.addErrorMessage(`Logging with Lodash: ${lodash.toUpper(newValue)}`)
}