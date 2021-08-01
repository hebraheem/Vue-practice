<template>
  <section class=" w-full">
    <div class="p-5 m-auto w-full text-center">
      <h1 class=" text-black font-bold text-3xl">Calculator</h1>
    </div>
    <div class="w-48 m-auto border p-2">
      <div class="h-16">
        <p
          class="text-3xl text-black font-medium w-44 overflow-x-scroll"
          style="direction:rtl"
        >
          {{ currentNumber }}
        </p>
        <small
          class="text-black pb-4 font-medium w-44 overflow-x-scroll"
          style="direction:rtl"
        >
          {{ prevNumber }} {{ selectedOperator }} {{ currentNumber }}
        </small>
      </div>

      <div class="grid grid-cols-4 gap-1 ">
        <button @click="pressed(1)" class="calc-btn">1</button>
        <button @click="pressed(2)" class="calc-btn">2</button>
        <button @click="pressed(3)" class="calc-btn">3</button>
        <button @click="pressed('+')" class="calc-btn">+</button>
        <button @click="pressed(4)" class="calc-btn">4</button>
        <button @click="pressed(5)" class="calc-btn">5</button>
        <button @click="pressed(6)" class="calc-btn">6</button>
        <button @click="pressed('-')" class="calc-btn">-</button>
        <button @click="pressed(7)" class="calc-btn">7</button>
        <button @click="pressed(8)" class="calc-btn">8</button>
        <button @click="pressed(9)" class="calc-btn">9</button>
        <button @click="pressed('*')" class="calc-btn">*</button>
        <button @click="pressed('c')" class="calc-btn">C</button>
        <button @click="pressed(0)" class="calc-btn">0</button>
        <button @click="pressed('=')" class="calc-btn">=</button>
        <button @click="pressed('/')" class="calc-btn">/</button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import useWindowEvent from "../utils/hooks/useWindowEvent";

export default {
  setup() {
    const currentNumber = ref("");
    const prevNumber = ref("");
    const operators = ref(["+", "-", "*", "/"]);
    const selectedOperator = ref("");
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    function pressed(press) {
      if (press === "=" || press === "Enter") return calculate();
      else if (press === "c") clear();
      else if (operators.value.includes(press)) performOperation(press);
      else if (number.includes(press)) appendNumber(press);
    }

    function appendNumber(press) {
      currentNumber.value = currentNumber.value + press;
    }

    function calculate() {
      if (selectedOperator.value === "*") multiply();
      else if (selectedOperator.value === "/") divide();
      else if (selectedOperator.value === "+") add();
      else if (selectedOperator.value === "-") subtract();

      prevNumber.value = "";
      selectedOperator.value = "";
    }

    function multiply() {
      currentNumber.value = prevNumber.value * currentNumber.value;
    }

    function add() {
      currentNumber.value =
        Number(prevNumber.value) + Number(currentNumber.value);
    }

    function subtract() {
      currentNumber.value = prevNumber.value - currentNumber.value;
    }

    function divide() {
      currentNumber.value = prevNumber.value / currentNumber.value;
    }

    function performOperation(press) {
      calculate();

      prevNumber.value = currentNumber.value;
      currentNumber.value = "";
      selectedOperator.value = press;
    }

    function clear() {
      currentNumber.value = "";
      selectedOperator.value = "";
      prevNumber.value = "";
    }

    function handleKeyDown(e) {
      let keyPress;
      const keybordPress = pressed(Number(e.key));
      if (keybordPress) keyPress = keybordPress;
      else keyPress = null;

      return keyPress;
    }

    useWindowEvent("keypress", handleKeyDown);

    return {
      currentNumber,
      pressed,
      appendNumber,
      operators,
      prevNumber,
      selectedOperator,
    };
  },
};
</script>

<style>
.calc-btn {
  @apply w-10 h-10 border rounded shadow text-black bg-white text-center hover:bg-blue-300 hover:text-white;
}
</style>
