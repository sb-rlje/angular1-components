function addListItem (listItem) {
    return {
        type: 'ADD_LIST_ITEM',
        payload: listItem
    }
}

export default { addListItem }
