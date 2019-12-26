export const initialState = { count: 0 };

export function reducer(state = {count: 0} , action){
	switch(action.type) {
		case 'increment': return { count: state.count + action.amount};
		case 'decrement': return { count: state.count - action.amount};
		default: return state;
	}
}

