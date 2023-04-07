// users.module.ts

import axios from 'axios';
import { Module } from 'vuex';

export enum UserStatus {
    Active = 'ACTIVE',
    Disabled = 'DISABLED',
}


export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    status: UserStatus;
    balance: number | string;
    registrationTimestamp: string;
}


interface RootState {

}

interface UsersState {
  loading: boolean;
  users: User[];
}

// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

const usersModule: Module<UsersState, RootState> = {
  state: {
    loading: false,
    users: [],
  },
  mutations: {
    SET_USERS_LOADING(state, loading: boolean) {
        state.loading = loading;
    },
    SET_USERS(state, users: User[]) {
      state.users = users;
      state.loading = false;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      commit('SET_USERS_LOADING', true);
      const response = await axios.get('http://localhost:3000/users'); // TODO: create backend layer
      commit('SET_USERS', response.data);
    },
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getUsersLoading(state) {
        return state.loading;
    }
  },
};

export default usersModule;
