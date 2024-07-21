<template>
  <el-table-v2 :estimated-row-height="60" :width="1000" :height="700" fixed :columns="columns" :data="tableData" />
</template>

<script setup lang="tsx">
import { TableV2FixedDir, type CheckboxValueType } from 'element-plus';
import { changdi1, changdi2, changdi3, changdi4 } from '../const';
import type { FunctionalComponent } from 'vue';

const SelectionCell = ({ value, intermediate = false, onChange }) => {
  return <ElCheckbox onChange={onChange} modelValue={value} indeterminate={intermediate} />;
};

const columns = ref<any[]>([
  {
    key: 'selection',
    width: 50,
    cellRenderer: ({ rowData }: any) => {
      const onChange = (value: CheckboxValueType) => (rowData.checked = value);
      return <SelectionCell value={rowData.checked} onChange={onChange} />;
    },
    headerCellRenderer: () => {
      const _data = unref(tableData);
      const onChange = (value: CheckboxValueType) =>
        (tableData.value = _data.map((row) => {
          row.checked = value;
          return row;
        }));
      const allSelected = _data.every((row) => row.checked);
      const containsChecked = _data.some((row) => row.checked);
      return <SelectionCell value={allSelected} intermediate={containsChecked && !allSelected} />;
    },
  },
  {
    key: 'Index',
    title: '排序',
    dataKey: 'index',
    width: 200,
  },
  {
    key: 'changdi1',
    title: '场地1',
    width: 200,
    dataKey: 'changdi1',
    cellRenderer: (tdata: any) => {
      return tdata.cellData.map((v, i) => <ElImage key={i} class="size-60px" src={v} previewSrcList={tdata.cellData} fit="cover" />);
    },
  },
  {
    key: 'changdi2',
    title: '场地3',
    width: 200,
    dataKey: 'changdi2',
    cellRenderer: (tdata: any) => {
      return tdata.cellData.map((v, i) => <ElImage key={i} class="size-60px" src={v} previewSrcList={tdata.cellData} fit="cover" />);
    },
  },
  {
    key: 'changdi3',
    title: '场地3',
    width: 200,
    dataKey: 'changdi3',
    cellRenderer: (tdata: any) => {
      return tdata.cellData.map((v, i) => <video key={i} class="size-60px" src={v} />);
    },
  },
  {
    key: 'changdi4',
    title: '场地4',
    width: 200,
    dataKey: 'changdi4',
    cellRenderer: (tdata: any) => {
      return tdata.cellData.map((v, i) => <ElImage key={i} class="size-60px" src={v} previewSrcList={tdata.cellData} fit="cover" />);
    },
  },
]);
console.log(columns.value, 'columns.value');

const getData = () =>
  Array.from({ length: 100 }).map((_, rowIndex) => {
    return columns.value.reduce(
      (rowData, column, columnIndex) => {
        if (column.dataKey === 'index') {
          rowData[column.dataKey] = columnIndex;
          return rowData;
        }
        if (column.dataKey === 'changdi1') {
          rowData[column.dataKey] = changdi1;
          return rowData;
        }
        if (column.dataKey === 'changdi2') {
          rowData[column.dataKey] = changdi2;
          return rowData;
        }
        if (column.dataKey === 'changdi3') {
          rowData[column.dataKey] = changdi3;
          return rowData;
        }
        if (column.dataKey === 'changdi4') {
          rowData[column.dataKey] = changdi4;
          return rowData;
        }
        return rowData;
      },
      {
        // id: rowIndex === 0 ? 'index' : `changdi${rowIndex}`,
        // parentId: null,
      },
    );
  });

const tableData = ref(getData());

// Array.from({ length: 50 }, (_, index) => ({
//   id: index === 0 ? 'index' : `changdi${index}`,
//   index,
//   checked: false,
//   changdi1,
//   changdi2,
//   changdi3,
//   changdi4,
// })),
console.log(tableData);
</script>

<style lang="scss" scoped></style>
