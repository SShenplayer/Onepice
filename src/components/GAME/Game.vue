<script setup lang='ts'>
import { reactive } from "vue";
//Composition API
interface Game {
  name: string;
  date: string;
  address: string;
  size: string;
}
const tableData: Game[] = reactive([
  {
    name: "Fiary tail",
    date: "2020-05-05",
    address: "www.fiarytail.com",
    size: "525kb",
  },
  {
    name: "OnePice",
    date: "2022-03-01",
    address: "www.onepice.com",
    size: "11Gb",
  },
  {
    name: "pokemon",
    date: "2010-07-02",
    address: "www.pokemon.com",
    size: "200kb",
  },
]);
const handleClick = function (index: number, row: Game) {
  console.log("row=", row);
};
</script>
<script lang='ts'>
//options API
export default {};
</script>
<template>
  <div class="game-content">
    <el-table
      ref="singleTableRef"
      :data="tableData"
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column type="index" width="50" />
      <el-table-column property="date" label="Date" width="120" />
      <el-table-column property="name" label="Name" width="120" />
      <el-table-column property="address" label="Address" />
      <el-table-column label="Oprations">
        <template #default="scope">
          <button @click="handleClick(scope.$index, scope.row)">
            download
          </button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<style scoped>
.game-content {
  display: flex;
  justify-content: center;
}
</style>