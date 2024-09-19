<script setup>
import { computed, defineProps } from "vue";
import { useToast } from "vue-toastification";

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["deleteTransaction"]);

const deleteTransaction = (index) => {
  emit("deleteTransaction", index);
};

function expensesForamt(amount) {
  return amount.toString().replace("-", "");
}
</script>

<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="(transaction, index) in transactions"
      :key="index"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text }}
      <span>{{
        transaction.amount < 0
          ? "-$" + expensesForamt(transaction.amount)
          : "$" + transaction.amount
      }}</span
      ><button class="delete-btn" @click="() => deleteTransaction(index)">
        x
      </button>
    </li>

    <!-- 
    <li class="plus">
      Paycheck <span>$600</span><button class="delete-btn">x</button>
    </li> -->
  </ul>
</template>
