# Excel导入导出功能

## Excel导入
![excel-import](../public/chapter_02/excel_import.jpg)

```vue
<template>
  <div class="upload-excel">
    <div class="btn-upload">
      <el-button :loading="loading" type="primary" @click="handleUpload">
        {{ $t('msg.uploadExcel.upload') }}
      </el-button>
    </div>

    <!-- 隐藏, 通过ref控制 input元素的点击事件 -->
    <input
      ref="excelUploadInput"
      class="excel-upload-input"
      type="file"
      accept=".xlsx, .xls"
      @change="handleChange"
    />
    <!-- https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API -->
    <div
      class="drop"
      @drop.stop.prevent="handleDrop"
      @dragover.stop.prevent="handleDragover"
      @dragenter.stop.prevent="handleDragover"
    >
      <el-icon>
        <Upload />
      </el-icon>
      <span>{{ $t('msg.uploadExcel.drop') }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Upload } from '@element-plus/icons-vue'
  import * as XLSX from 'xlsx'
  import { ElMessage } from 'element-plus'

  type Props = {
    // eslint-disable-next-line no-unused-vars
    beforeUpload?: (file: File) => boolean
    // eslint-disable-next-line no-unused-vars
    onSuccess?: (data: { header: string[]; results: any[] }) => void
  }
  const props = defineProps<Props>()
  const loading = ref(false)
  const excelUploadInput = ref<HTMLInputElement>()

  const isExcel = (file: File) => {
    return /\.(xlsx|xls|csv)$/.test(file.name)
  }
  /**
   * 获取表头（通用方式）
   */
  const getHeaderRow = (sheet: XLSX.WorkSheet) => {
    const headers = []
    const range = XLSX.utils.decode_range(sheet['!ref']!)
    let C
    const R = range.s.r
    /* start in the first row */
    // eslint-disable-next-line no-plusplus
    for (C = range.s.c; C <= range.e.c; ++C) {
      /* walk every column in the range */
      const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
      /* find the cell in the first row */
      let hdr = `UNKNOWN ${C}` // <-- replace with your desired default
      if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
      headers.push(hdr)
    }
    return headers
  }
  /**
   * 根据导入内容，生成数据
   */
  const generateData = (excelData: { header: string[]; results: any[] }) => {
    if (props.onSuccess) {
      props.onSuccess(excelData)
    }
  }
  /**
   * 读取数据（异步）
   */
  const readerData = (rawFile: File) => {
    loading.value = true
    return new Promise((resolve) => {
      // https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader
      const reader = new FileReader()
      // 该事件在读取操作完成时触发
      // https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/onload
      reader.onload = (e) => {
        // 1. 获取解析到的数据
        const data = e.target!.result
        // 2. 利用 XLSX 对数据进行解析
        const workbook = XLSX.read(data, { type: 'array' })
        // 3. 获取第一张表格(工作簿)名称
        const firstSheetName = workbook.SheetNames[0]
        // 4. 只读取 Sheet1（第一张表格）的数据
        const worksheet = workbook.Sheets[firstSheetName]
        // 5. 解析数据表头
        const header = getHeaderRow(worksheet)
        // 6. 解析数据体
        const results = XLSX.utils.sheet_to_json<any>(worksheet)
        // 7. 传入解析之后的数据
        generateData({ header, results })
        // 8. loading 处理
        loading.value = false
        // 9. 异步完成
        resolve('')
      }
      // 启动读取指定的 Blob 或 File 内容
      reader.readAsArrayBuffer(rawFile)
    })
  }
  const upload = (file: File) => {
    // 如果没有指定上传前回调的话
    if (!props.beforeUpload) {
      readerData(file)
      return
    }
    // 如果指定了上传前回调，那么只有返回 true 才会执行后续操作
    const before = props.beforeUpload(file)
    if (before) {
      readerData(file)
    }
  }

  const handleUpload = () => {
    excelUploadInput.value?.click()
  }
  const handleChange = (e: Event) => {
    const input = e.target as HTMLInputElement
    const file = input.files![0]
    if (!file) return
    upload(file)
  }

  const handleDrop = (e: DragEvent) => {
    // 上传中跳过
    if (loading.value) return
    const files = e.dataTransfer?.files || []
    if (files.length !== 1) {
      ElMessage.error('必须要有一个文件')
      return
    }
    const rawFile = files[0]
    if (!isExcel(rawFile)) {
      ElMessage.error('文件必须是 .xlsx, .xls, .csv 格式')
      return
    }
    // 触发上传事件
    upload(rawFile)
  }
  /**
   * 拖拽悬停时触发
   */
  const handleDragover = (e: DragEvent) => {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer/dropEffect
    // 在新位置生成源项的副本
    e.dataTransfer!.dropEffect = 'copy'
  }
</script>

<style lang="scss" scoped>
  .upload-excel {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    .excel-upload-input {
      display: none;
      z-index: -9999;
    }
    .btn-upload,
    .drop {
      border: 1px dashed #bbb;
      width: 350px;
      height: 160px;
      text-align: center;
      line-height: 160px;
    }
    .drop {
      line-height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #bbb;
      i {
        font-size: 60px;
        display: block;
      }
    }
  }
</style>

```

## Excel导出

思路如下:

1. 将 `json` 结构数据转化为 `excel` 数据
2. 下载对应的 `excel` 数据

对于这两步的逻辑而言，最复杂的莫过于 **将 `json` 结构数据转化为 `excel` 数据** 这一步的功能，不过万幸的是对于该操作的逻辑是 **通用处理逻辑**，搜索 **Export2Excel** 我们可以得到巨多的解决方案，所以此处我们 **没有必要** 手写对应的转换逻辑

```js
/* eslint-disable */
import { saveAs } from 'file-saver'
import XLSX from 'xlsx'

function datenum(v, date1904) {
  if (date1904) v += 1462
  var epoch = Date.parse(v)
  return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000)
}

function sheet_from_array_of_arrays(data, opts) {
  var ws = {}
  var range = {
    s: {
      c: 10000000,
      r: 10000000,
    },
    e: {
      c: 0,
      r: 0,
    },
  }
  for (var R = 0; R != data.length; ++R) {
    for (var C = 0; C != data[R].length; ++C) {
      if (range.s.r > R) range.s.r = R
      if (range.s.c > C) range.s.c = C
      if (range.e.r < R) range.e.r = R
      if (range.e.c < C) range.e.c = C
      var cell = {
        v: data[R][C],
      }
      if (cell.v == null) continue
      var cell_ref = XLSX.utils.encode_cell({
        c: C,
        r: R,
      })

      if (typeof cell.v === 'number') cell.t = 'n'
      else if (typeof cell.v === 'boolean') cell.t = 'b'
      else if (cell.v instanceof Date) {
        cell.t = 'n'
        cell.z = XLSX.SSF._table[14]
        cell.v = datenum(cell.v)
      } else cell.t = 's'

      ws[cell_ref] = cell
    }
  }
  if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range)
  return ws
}

function Workbook() {
  if (!(this instanceof Workbook)) return new Workbook()
  this.SheetNames = []
  this.Sheets = {}
}

function s2ab(s) {
  var buf = new ArrayBuffer(s.length)
  var view = new Uint8Array(buf)
  for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
  return buf
}

export const export_json_to_excel = ({
  multiHeader = [],
  header,
  data,
  filename,
  merges = [],
  autoWidth = true,
  bookType = 'xlsx',
} = {}) => {
  // 1. 设置文件名称
  filename = filename || 'excel-list'
  // 2. 把数据解析为数组，并把表头添加到数组的头部
  data = [...data]
  data.unshift(header)
  // 3. 解析多表头，把多表头的数据添加到数组头部（二维数组）
  for (let i = multiHeader.length - 1; i > -1; i--) {
    data.unshift(multiHeader[i])
  }
  // 4. 设置 Excel 表工作簿（第一张表格）名称
  var ws_name = 'SheetJS'
  // 5. 生成工作簿对象
  var wb = new Workbook()
  // 6. 将 data 数组（json格式）转化为 Excel 数据格式
  var ws = sheet_from_array_of_arrays(data)
  // 7. 合并单元格相关（['A1:A2', 'B1:D1', 'E1:E2']）
  if (merges.length > 0) {
    if (!ws['!merges']) ws['!merges'] = []
    merges.forEach((item) => {
      ws['!merges'].push(XLSX.utils.decode_range(item))
    })
  }
  // 8. 单元格宽度相关
  if (autoWidth) {
    /*设置 worksheet 每列的最大宽度*/
    const colWidth = data.map((row) =>
      row.map((val) => {
        /*先判断是否为null/undefined*/
        if (val == null) {
          return {
            wch: 10,
          }
        } else if (val.toString().charCodeAt(0) > 255) {
          /*再判断是否为中文*/
          return {
            wch: val.toString().length * 2,
          }
        } else {
          return {
            wch: val.toString().length,
          }
        }
      }),
    )
    /*以第一行为初始值*/
    let result = colWidth[0]
    for (let i = 1; i < colWidth.length; i++) {
      for (let j = 0; j < colWidth[i].length; j++) {
        if (result[j]['wch'] < colWidth[i][j]['wch']) {
          result[j]['wch'] = colWidth[i][j]['wch']
        }
      }
    }
    ws['!cols'] = result
  }

  // 9. 添加工作表（解析后的 excel 数据）到工作簿
  wb.SheetNames.push(ws_name)
  wb.Sheets[ws_name] = ws
  // 10. 写入数据
  var wbout = XLSX.write(wb, {
    bookType: bookType,
    bookSST: false,
    type: 'binary',
  })
  // 11. 下载数据
  saveAs(
    new Blob([s2ab(wbout)], {
      type: 'application/octet-stream',
    }),
    `${filename}.${bookType}`,
  )
}
```