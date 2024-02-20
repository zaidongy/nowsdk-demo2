import { gs } from "@servicenow/glide";
import * as lodash from 'lodash'

export const addLog = (newValue, oldValue) => {
    gs.addInfoMessage(`Logging from sdk-demo2: value changed from  ${oldValue} to ${lodash.toUpper(newValue)}`);
    // gs.addErrorMessage(`Logging with Lodash: ${lodash.toUpper(newValue)}`)
}