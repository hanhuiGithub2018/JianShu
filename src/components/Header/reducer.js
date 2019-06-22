let defaultState = {
    focused: false
};

export default (state = defaultState, action)=>{
    if(action.type === 'change_focus'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.focused = !newState.focused;

        // console.log(state,action);
        return  newState
    }

    return state;
}
