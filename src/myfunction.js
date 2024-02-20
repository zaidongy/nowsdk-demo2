import { addLog } from './utils/utils.js'

export const showStatusUpdate = (_curr, _prev) => {
    addLog(_curr.getValue('category'), _prev.getValue('category'));
}
