<template>
  <div>
    <h1 class="text-20px font-bold mb-20px text-center">xlsx</h1>
    <div>
      <el-button type="primary" @click="exportTable">导出</el-button>
      <input name="id" type="file" @change="importTable" />
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as XLSX from 'xlsx';
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]);

const exportTable = () => {
  const ws = XLSX.utils.json_to_sheet(tableData.value);

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, 'sheetjs.xlsx');
};

const importTable = (event: any) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e: any) => {
    const data = new Uint8Array(e.target?.result);
    const workbook = XLSX.read(data, { type: 'array' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const jsonData: any = XLSX.utils.sheet_to_json(worksheet);
    console.log('🚀 ~ importTable ~ jsonData:', jsonData);
    tableData.value.push(jsonData);
  };

  reader.readAsArrayBuffer(file);
};
</script>
