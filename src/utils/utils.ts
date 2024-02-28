import { GlideRecord, gs } from "@servicenow/glide";
import * as _ from 'lodash'

export const addLog = (newValue: string, oldValue: string) => {
    gs.addErrorMessage(`Logging with Lodash. Value changed from  ${_.toUpper(oldValue)} to ${_.toLower(newValue)}`);
}