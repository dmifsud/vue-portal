
import usersModule from './users.module';
import Vuex, { Store } from 'vuex';

// Vue.use(Vuex);

export interface RootState {}

const store: Store<RootState> = new Vuex.Store({
  modules: {
    users: usersModule,
  },
});

export default store;
