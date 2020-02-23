
const ADD_TO_RIGHT = 'ADD_TO_RIGHT';
const ADD_TO_LEFT = 'ADD_TO_LEFT';
const DELETE_IN_RIGHT = 'DELETE_IN_RIGHT';
const DELETE_IN_LEFT = 'DELETE_IN_LEFT';
const SELECT_R = 'SELECT_R';
const SELECT_L = 'SELECT_L';
const ADD_TO_SELECTEDR = 'ADD_TO_SELECTEDR'
const ADD_TO_SELECTEDL = 'ADD_TO_SELECTEDL'

const Reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_RIGHT:
      return {
        ...state, right: [...state.right, action.item]
      }
    case ADD_TO_LEFT:
      return {
        ...state, left: [...state.left, action.item]
      }
    case DELETE_IN_RIGHT:
      return {
        ...state,
        right: [...state.right].filter((item) => {
          return (!item.select)
        })
        
      }
    case DELETE_IN_LEFT:
      return {
        ...state,
        left: [...state.left].filter((item) => {
          return (!item.select)
        })
      }
    case SELECT_R:
      return {
        ...state,
        right: [...state.right].map((item, index) => {
          if (index === action.index) {
            return { ...item, select: true }
          }
          return { ...item, select: false }
        })
      }
    case SELECT_L:
      return {
        ...state,
        left: [...state.left].map((item, index) => {
          if (index === action.index) {
            return { ...item, select: true }
          }
          return { ...item, select: false }
        })
      }
    case ADD_TO_SELECTEDR:
      return {
        ...state, 
        selectedR: action.item
      }
    case ADD_TO_SELECTEDL:
      return {
        ...state,
          selectedL: action.item
      }
    default:
      return state;
  }
}
export { Reducer }