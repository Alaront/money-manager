<template>
  <div class="bg-[#FFFFFF] p-[32px] rounded-[12px] box-content">
    <h2 class="text-[20px] leading-[26px] font-medium text-[#202020] mb-[20px]">
      Последние записи (по дате)
    </h2>
    <div>
      <table class="w-[100%] table-info">
        <tr>
          <th>№</th>
          <th>Название</th>
          <th>Дата</th>
          <th>Тип</th>
          <th>Категория</th>
          <th>Сумма</th>
          <th>Описание</th>
        </tr>
        <tr v-for="(item, iter) in getAllReportsReverse" v-bind:key="item.id">
          <td>{{ iter + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.date }}</td>
          <td :class="item.type ? 'income' : 'expenditure'" class="font-bold">
            {{ item.type ? "Доход" : "Расход" }}
          </td>
          <td>{{ getCategoryName(item.category) }}</td>
          <td>{{ item.sum }}</td>
          <td>{{ item.description }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "last-reports",
  methods: {
    getCategoryName(id) {
      let name = "";

      this.getAllCategory.forEach((item) => {
        if (item.id === id) {
          name = item.name;
          return;
        }
      });

      return name;
    },
  },
  computed: {
    ...mapGetters("reports", ["getAllReportsReverse"]),
    ...mapGetters("category", ["getAllCategory"]),
  },
};
</script>

<style scoped lang="sass">

.income
  color: #024f02

.expenditure
  color: #a70230

th:nth-child(1), td:nth-child(1)
  max-width: 30px
  padding: 10px 15px

th:nth-child(4), td:nth-child(4)
  max-width: 80px

table.table-info th:first-child
  padding-left: 15px
</style>
