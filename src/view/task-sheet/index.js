import React from 'react'
import Spreadsheet from "../../assets/sheet/index"
import 'x-data-spreadsheet/dist/xspreadsheet.css'
import defaultData from './defaultData'

class TaskSheet extends React.Component {
  constructor() {
    super()
    this.proxyData(this, methods)
    this.Sheet = null
    this.sheetList = defaultData
  }
  render() {
    return <div className="task-sheet">
              <button onClick={this.getData.bind(this)}>获取数据</button>
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
    this.Sheet = new Spreadsheet("#Spreadsheet")
      .loadData(this.sheetList)
      .change(this.sheetChange)
  },
  // 数据变化
  sheetChange(data){
    console.log(data)
  },
  // 获取数据
  getData(){
    console.log(this.Sheet.getData())
  }
}
export default TaskSheet