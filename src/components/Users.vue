<template>
  <v-card title="Users" :loading="getUsersLoading">
        <v-table height="300px">
            <thead>
            <tr>
                <th class="text-left">
                Name
                </th>
                <th class="text-left">
                Surname
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in getUsers"
                :key="item.name"
            >
                <td>{{ item.name }}</td>
                <td>{{ item.surname }}</td>
            </tr>
            </tbody>
        </v-table>
      </v-card>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters, createStore } from 'vuex';
import { User } from '../store/users.module';

  @Options({
    computed: {
        ...mapGetters(['getUsersLoading', 'getUsers'])
    },
  })
  export default class UsersComponent extends Vue {

    $store!: ReturnType<typeof createStore>;

    public loading = true;

    public users!: User[];

    public desserts: { name: string; calories: number}[] = []

    public created(): void {
        this.fetchUsers();
    }

    public async fetchUsers() {
        await this.$store.dispatch('fetchUsers');
    }
    
  }

</script>

<style>
  .users {

  }
</style>
