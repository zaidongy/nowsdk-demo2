import { GlideRecord, gs } from "@servicenow/glide";
// import * as lodash from 'lodash'

export const addLog = (value: string) => {
    // gs.addErrorMessage(`Category changed from "${_.toUpper(_prev.getDisplayValue('category'))}" to "${_.toUpper(_curr.getDisplayValue('category'))}" !`);
    gs.addInfoMessage(`The value is now ${value}`);
    // gs.addErrorMessage(`The value is now ${lodash.toUpper(value)}`)
}