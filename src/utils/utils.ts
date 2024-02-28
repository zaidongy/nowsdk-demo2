import { GlideRecord, gs } from "@servicenow/glide"
import * as _ from 'lodash'
import * as moment from 'moment'
// import { format } from 'date-fns'

export const addLog = (newValue: string, oldValue: string) => {
    let datestr = moment(moment(), 'LLLL');
    // let datestr = format(new Date(), 'LLLL');
    let msg = `Logging with Lodash. Value changed from  ${_.toUpper(oldValue)} to ${_.toUpper(newValue)} on ${datestr}`;
    gs.addErrorMessage(msg);
}