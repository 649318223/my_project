<template>
  <div class="table-list">
    <div class="table-list__header"></div>
    <div ref="tableContainer" class="table-list__body">
      <el-table :data="tableData" :border="border" :height="tableHeight">
        <template v-for="item in tableColumn" :key="item.prop">
          <el-table-column :prop="item.prop" :label="item.label" :width="item.width">
            <template #default="scope">
              <div v-if="item.type === 'slot'">
                <slot :name="item.slotName" :scope="{ row: scope.row, column: scope.column, $index: scope.$index }"></slot>
              </div>
              <div v-else>
                {{ scope.row[item.prop] }}
              </div>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
    <div class="table-list__footer">
      <el-pagination
        background
        v-model:current-page="pageConfig.pageNum"
        v-model:page-size="pageConfig.pageSize"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageConfig.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, computed, ref, onMounted, onUnmounted } from "vue";
const prop = defineProps({
  tableConfig: {
    type: Object,
    default: () => {},
  },
});
const tableContainer = ref<any>(null);
const tableHeight = ref<Number>(0);
//列表配置信息
const { tableConfig } = prop;
const tableData = computed(() => tableConfig.tableData || []);
const tableColumn = computed(() => tableConfig.tableColumn || []);
const border = computed(() => (tableConfig.border || tableConfig.border === undefined ? true : false));
const pageConfig = computed(() => tableConfig.page || { pageNum: 1, pageSize: 10, total: 0 });

const emit = defineEmits(["handleSizeChange", "handleCurrentChange"]);
//methods
const handleSizeChange = (val: any) => {
  emit("handleSizeChange", val);
};
const handleCurrentChange = (val: any) => {
  emit("handleCurrentChange", val);
};
//计算表格自适应高度
const calculateHeight = () => {
  if (tableContainer.value) {
    // 计算表格的高度
    const containerRect = tableContainer.value.getBoundingClientRect();
    const containerHeight = containerRect.height;
    tableHeight.value = containerHeight - 20; // 减去一些边距或标题栏的高度
  }
};
// 监听窗口大小变化
const handleResize = () => {
  calculateHeight();
};
onMounted(() => {
  calculateHeight(); // 初始化时计算一次高度
  window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style lang="scss" scoped>
.table-list {
  height: 100%;
  .table-list__body {
    height: calc(100% - 50px);
    overflow: auto;
  }
}
</style>
