<template>
  <section class="w-full text-center">
    <header class="my-4">
      <h1 class=" text-black font-bold text-3xl">Calender</h1>
    </header>
    {{ getCurrentDate() }}
    <section
      class="flex justify-between md:w-6/12 sm:w-full sm: mx-10 md:m-auto"
    >
      <p class="font-bold text-lg pl-8">{{ currentMonthName }}</p>
      <p class="font-bold text-lg pr-8">{{ currentYear }}</p>
    </section>
    <section
      class="flex justify-center md:w-6/12 sm:w-full sm: mx-10 md:m-auto"
    >
      <p
        v-for="day in days"
        :key="day"
        class="text-center py-4"
        style="width: 14.28%"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap md:w-6/12 sm:w-full sm: mx-10 md:m-auto">
      <p
        v-for="num in getStartDay()"
        :key="num"
        style="width: 14.28%"
        class="py-2"
      ></p>
      <p
        v-for="num in getDaysInMonth()"
        :key="num"
        style="width: 14.28%"
        class="py-2"
        :class="getCurrentDate(num)"
      >
        {{ num }}
      </p>
    </section>
    <section
      class="flex justify-between md:w-6/12 sm:w-full sm:mx-10 md:m-auto pt-10"
    >
      <button class="px-8 bg-gray-600 rounded-sm text-white " @click="prev">
        Prev
      </button>
      <button class="px-8 bg-gray-600 rounded-sm text-white" @click="next">
        Next
      </button>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      days: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      currentDay: new Date(),
    };
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    },
  },
  methods: {
    getDaysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 1).getUTCDate();
    },
    getStartDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    getCurrentDate(num) {
      const currentDate = new Date().toLocaleDateString();
      const calendarDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toLocaleDateString();
      return currentDate === calendarDate
        ? "text-white bg-blue-300 rounded-full"
        : null;
    },
  },
};
</script>

<style></style>
