const initialState = [{
  headline: 'Article #1',
  content: 'Lorem ipsum dolor sit amet, iuvaret albucius sapientem vim te, cum ut adhuc scaevola fabellas. Vero laboramus ex sed, diceret molestie cotidieque in per.'
}];

export function ListReducer (state = initialState, action) {
  if (action.type === 'ADD_LIST_ITEM') return [...state, action.payload]
  return state
}

