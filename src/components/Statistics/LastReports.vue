<template>
  <div class="bg-[#FFFFFF] p-[32px] rounded-[12px] box-content">
    <h2 class="text-[20px] leading-[26px] font-medium text-[#202020] mb-[20px]">
      Последние записи (по дате)
    </h2>
    <div>
      <table class="w-[100%] table-info">
        <thead class="hidden xl:table-header-group">
          <tr>
            <th>№</th>
            <th>Название</th>
            <th>Дата</th>
            <th>Тип</th>
            <th>Категория</th>
            <th>Сумма</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="([id, item], iter) of Object.entries(allReports)"
            v-bind:key="id"
            class="block xl:table-row"
          >
            <td class="block xl:table-cell relative">{{ iter + 1 }}</td>
            <td class="block xl:table-cell relative">{{ item.name }}</td>
            <td class="block xl:table-cell relative">{{ item.date }}</td>
            <td
              class="block xl:table-cell font-bold relative"
              :class="item.type ? 'income' : 'expenditure'"
            >
              {{ item.type ? "Доход" : "Расход" }}
            </td>
            <td class="block xl:table-cell font-bold relative">
              {{ getCategoryName(item.category) }}
            </td>
            <td class="block xl:table-cell font-bold relative">
              {{ item.sum }}
            </td>
            <td class="block xl:table-cell font-bold relative">
              {{ item.description }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { auth, db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export default {
  name: "last-reports",
  data() {
    return {
      allCategory: {},
      allReports: {},
    };
  },
  methods: {
    getCategoryName(id) {
      return this.allCategory[id];
    },

    getAllReports() {
      const user = auth.currentUser;

      getDoc(doc(db, "reports", user.uid)).then((data) => {
        if (data.exists()) {
          const reports = Object.values(data.data());

          reports.sort(function (a, b) {
            if (a.dateOrder < b.dateOrder) {
              return 1;
            }
            if (a.dateOrder > b.dateOrder) {
              return -1;
            }

            return 0;
          });

          this.allReports = reports;
        } else {
          console.log("No such document!");
        }
      });
    },

    getAllCategory() {
      const user = auth.currentUser;

      getDoc(doc(db, "category", user.uid)).then((data) => {
        if (data.exists()) {
          this.allCategory = data.data();
        } else {
          console.log("No such document!");
        }
      });
    },
  },

  mounted() {
    this.getAllCategory();
    this.getAllReports();
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
  max-width: none

  @media screen and (min-width: '1280px')
    max-width: 80px

table.table-info th:first-child
  padding-left: 15px

table.table-info td
  padding-left: 80px
  text-align: right
  @media screen and (min-width: '1280px')
    padding-left: 15px
    text-align: left

  &:after
    position: absolute
    top: 9px
    left: 5px

    @media screen and (min-width: '1280px')
      content: ''

  &:nth-child(2)
    &:after
      content: 'Название'

      @media screen and (min-width: '1280px')
        content: ''

  &:nth-child(3)
    &:after
      content: 'Дата'

      @media screen and (min-width: '1280px')
        content: ''

  &:nth-child(4)
    &:after
      content: 'Тип'

      @media screen and (min-width: '1280px')
        content: ''

  &:nth-child(5)
    &:after
      content: 'Категория'

      @media screen and (min-width: '1280px')
        content: ''

  &:nth-child(6)
    &:after
      content: 'Сумма'

      @media screen and (min-width: '1280px')
        content: ''

  &:nth-child(7)
    &:after
      content: 'Описание'

      @media screen and (min-width: '1280px')
        content: ''
</style>
