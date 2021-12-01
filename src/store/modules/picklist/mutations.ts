import { MutationTree } from 'vuex'
import PicklistState from './PicklistState'
import * as types from './mutation-types'

const mutations: MutationTree <PicklistState> = {
  [types.PICKLIST_CURRENT] (state, payload) {
    state.current = payload.current;
  },
  [types.PICKLIST_ITEMS] (state, payload) {
    state.list = payload.list;
  },
  [types.PICKLIST_SELECTED_PRODUCTS] (state, payload) {
    state.selectedProducts = payload.selectedProducts
  },
}
export default mutations;
