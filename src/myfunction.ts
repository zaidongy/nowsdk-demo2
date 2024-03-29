import { GlideRecord } from '@servicenow/glide';
import { addLog } from './utils/utils.js'

export const showStatusUpdate = (_curr: GlideRecord, _prev: GlideRecord) => {
    addLog(_curr.getDisplayValue('category'), _prev.getDisplayValue('category'));
}
