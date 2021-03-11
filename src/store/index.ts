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
	modules: {},
});

export default store;
