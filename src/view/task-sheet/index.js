import React from 'react'
import Spreadsheet from "../../assets/sheet/index"
import 'x-data-spreadsheet/dist/xspreadsheet.css'
import {defaultData,defaultConf} from './default'

class TaskSheet extends React.Component {
  constructor() {
    super()
    this.proxyData(this, methods)
    this.Sheet = null
    let storageData = localStorage.getItem('sheetData')
    this.sheetList = storageData ? JSON.parse(storageData) : defaultData
  }
  render() {
    return <div className="task-sheet">
              <div id="Spreadsheet"></div>
           </div>
  }
  componentDidMount() {
    this.spreadSheetInit()
  }
}

const methods = {
  // 表格初始化
  spreadSheetInit(){
    // Spreadsheet.locale('zh-cn', zhCN)
    this.Sheet = new Spreadsheet("#Spreadsheet",defaultConf)
      .loadData(this.sheetList)
      .change(this.sheetChange)
  },
  // 数据变化
  sheetChange(data){
    localStorage.setItem('sheetData',JSON.stringify(data))
    console.log(data)
  },
  // 获取数据
  getData(){
    console.log(this.Sheet.getData())
  }
}
export default TaskSheet