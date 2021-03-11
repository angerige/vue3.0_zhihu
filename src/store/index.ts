import { createStore } from "vuex";
import { UserProps, ColumnProps, PostProps } from "../typings/index";

export interface State {
	user: UserProps;
	columns: ColumnProps[];
	posts: PostProps[];
}

const store = createStore<State>({
	state: {
		user: { isLogin: false },
		columns: [],
		posts: [],
	},
	actions: {},
	mutations: {
		login(state: State) {
			state.user = { ...state.user, isLogin: true, name: "tom" };
		},
	},
	getters: {
		biggerColumnLen(state: State) {
			return state.columns.filter(c => c.id > 2).length;
		},
		getColumnById: (state: State) => (id: number) => {
			return state.columns.find(c => c.id === id);
		},
		getPostsByCid: (state: State) => (cid: number) => {
			return state.posts.filter(post => post.columnId === cid);
		},
	},
	modules: {},
});

export default store;
