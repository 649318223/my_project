<template>
  <div class="user-list">
    用户列表
    <TableList :tableConfig="tableConfig" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"> </TableList>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, reactive } from "vue";
const TableList = defineAsyncComponent(() => import("@/components/TableList/index.vue"));

const tableConfig = reactive<TableTypes>({
  tableData: [],
  tableColumn: [
    { label: "用户名", prop: "userName" },
    { label: "手机号", prop: "userPhone" },
    { label: "操作", prop: "address", type: "slot", slotName: "operation" },
  ],
  page: {
    pageNum: 1,
    pageSize: 10,
    total: 0,
  },
});
const handleCurrentChange = (val: any) => {
  tableConfig.page.pageNum = val;
  getTableList();
};
const handleSizeChange = (val: any) => {
  tableConfig.page.pageNum = 1;
  tableConfig.page.pageSize = val;
  getTableList();
};
const getTableList = () => {
  // 获取列表数据
  const list = [];
  for (let i = 0; i < 50; i++) {
    const item = {userName: `admin${i+1}`, userPhone: '12345678901', address: '北京市朝阳区'};
    list.push(item);
  }
  const data = list.slice((tableConfig.page.pageNum - 1) * tableConfig.page.pageSize, tableConfig.page.pageNum * tableConfig.page.pageSize);
  tableConfig.tableData = data;
  tableConfig.page.total = list.length;
};

getTableList();
</script>

<style lang="scss" scoped>
.user-list {
  height: 100%;
  .user-list-card {
    height: 100%;
  }
}
</style>
