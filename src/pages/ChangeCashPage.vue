<template>
  <title-page
    title="Новая запись"
    subtitle="Новая запись в историю расходов и доходов"
  />
  <div
    class="xl:w-[50%] bg-[#FFFFFF] p-[32px] rounded-[12px] my-0 mx-auto box-content"
  >
    <h3 class="text-[20px] leading-[25px] mb-[20px] font-medium">
      Внести новую запись по учёту средств
    </h3>

    <form v-on:submit.prevent="newEntry">
      <div class="mb-[25px]">
        <span
          class="block text-[18px] leading-[22px] text-[#898989] font-bold mb-[15px]"
          >Название</span
        >
        <label :class="{ 'error-data': nameError }">
          <input
            type="text"
            v-model="name"
            :class="this.inputBottomLineStyle"
          />
        </label>
      </div>

      <div class="mb-[25px]">
        <span
          class="block text-[18px] leading-[22px] text-[#898989] font-bold mb-[15px]"
          >Тип:
        </span>
        <div :class="{ 'error-data': typeError }">
          <label class="text-[20px] leading-[25px] text-[#202020] mr-[20px]">
            <input type="radio" name="type" :value="true" v-model="type" />
            Доход</label
          >
          <label class="text-[20px] leading-[25px] text-[#202020]">
            <input type="radio" name="type" :value="false" v-model="type" />
            Расход</label
          >
        </div>
      </div>

      <div class="mb-[25px]">
        <span
          class="block text-[18px] leading-[22px] text-[#898989] font-bold mb-[15px]"
          >Категория</span
        >
        <label :class="{ 'error-data': categoryError }">
          <select
            v-model="category"
            class="text-[20px] leading-[25px] text-[#202020] px-[6px] py-[4px] pr-[8px]"
          >
            <option
              v-for="[id, name] of Object.entries(allCategory)"
              v-bind:key="id"
              :value="id"
            >
              {{ name }}
            </option>
          </select>
        </label>
      </div>

      <div class="mb-[25px]">
        <span
          class="block text-[18px] leading-[22px] text-[#898989] font-bold mb-[15px]"
          >Сумма</span
        >
        <label :class="{ 'error-data': sumError }">
          <input type="text" v-model="sum" :class="this.inputBottomLineStyle" />
        </label>
      </div>

      <div class="mb-[25px]">
        <span
          class="block text-[18px] leading-[22px] text-[#898989] font-bold mb-[15px]"
          >Описание</span
        >
        <textarea
          v-model="description"
          class="text-[20px] leading-[25px] text-[#202020] outline-none border-[2px] border-solid border-[#202020] py-[5px] px-[10px] w-[100%] h-[200px]"
        />
      </div>

      <button :class="this.formBtnStyle">Создать</button>
    </form>
  </div>
</template>

<script>
import titlePage from "@/components/TitlePage";
import { auth, db } from "@/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { uid } from "uid";

export default {
  name: "ChangeCashPage",
  components: {
    "title-page": titlePage,
  },
  data() {
    return {
      type: null,
      category: null,
      sum: 0,
      description: "",
      name: "",

      nameError: false,
      typeError: false,
      categoryError: false,
      sumError: false,

      allCategory: {},
    };
  },
  watch: {
    sum: function (newSum) {
      if (typeof newSum === "number") return;

      let str = "";

      newSum.split("").forEach((c) => {
        if (/[0-9]/gi.test(c)) str += c;
      });

      this.sum = Number(str);

      console.log("this.sum", this.sum);
    },
  },
  methods: {
    async newEntry() {
      this.resetError();

      this.validation();

      if (this.nameError || this.typeError || this.categoryError) return;

      const user = auth.currentUser;

      if (user.uid) {
        setDoc(
          doc(db, "reports", user.uid),
          {
            [uid(16)]: {
              name: this.name.replace(/\s+/, ""),
              type: this.type,
              category: this.category,
              sum: this.sum,
              description: this.description,
              date: new Date().toISOString().split("T")[0],
              dateOrder: Date.now(),
            },
          },
          { merge: true }
        );
      } else {
        this.$router.push("/login");
      }

      await this.changeCashOther();

      this.resetData();
    },

    async changeCashOther() {
      const user = auth.currentUser;
      const cashRef = doc(db, "cash", user.uid);
      const dataCash = await getDoc(cashRef);

      if (dataCash.exists()) {
        console.log("Document data:", dataCash.data());
      } else {
        console.log("No such document!");

        return;
      }

      const newValueCash = this.type
        ? this.sum + dataCash.data().valueCash
        : dataCash.data().valueCash - this.sum;

      try {
        await updateDoc(cashRef, {
          valueCash: newValueCash,
        });

        await updateDoc(cashRef, {
          historyChangeCashDate: [
            ...dataCash.data().historyChangeCashDate,
            new Date().toISOString().split("T")[0],
          ],
        });

        await updateDoc(cashRef, {
          historyChangeCash: [
            ...dataCash.data().historyChangeCash,
            newValueCash,
          ],
        });
      } catch (e) {
        console.error("Error", e);
      }
    },

    resetError() {
      this.nameError = false;
      this.typeError = false;
      this.categoryError = false;
      this.sumError = false;
      this.dateError = false;
    },

    validation() {
      console.log(this.date);
      if (this.name.replace(/\s+/, "").length === 0) this.nameError = true;
      if (this.type === null) this.typeError = true;
      if (this.category === null) this.categoryError = true;
      if (this.date === null) this.dateError = true;
    },

    resetData() {
      console.log("reset start");
      this.type = null;
      this.category = null;
      this.date = null;
      this.sum = 0;
      this.description = "";
      this.name = "";
    },
  },
  mounted() {
    const user = auth.currentUser;

    getDoc(doc(db, "category", user.uid)).then((data) => {
      if (data.exists()) {
        this.allCategory = data.data();
      } else {
        console.log("No such document!");
      }
    });
  },
};
</script>

<style scoped lang="sass">
.error-data
  position: relative

  &:after
    content: '*'
    left: -12px
    top: 2px
    position: absolute
    color: #ff0000
    font-size: 18px
</style>
