import React from 'react'
import Spreadsheet from "../../assets/sheet/index"
import 'x-data-spreadsheet/dist/xspreadsheet.css'
import {defaultData,defaultConf} from './default'

class TaskSheet extends React.Component {
  constructor() {
    super()
    this.proxyData(this, methods)
    let storageData = localStorage.getItem('sheetData')
    this.state = {
      Sheet: null,
      sheetList: storageData ? Object.assign({},defaultData,JSON.parse(storageData)) : defaultData
    }
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
    this.state.Sheet = new Spreadsheet("#Spreadsheet",defaultConf)
      .loadData(this.state.sheetList)
      .change(this.sheetChange.bind(this))
      .selected(this.sheetSelected.bind(this))
  },
  // 数据变化
  sheetChange(data){
    this.stachData(data)
  },
  // 获取数据
  getData(){
    console.log(this.state.Sheet.getData())
  },
  // 自加事件选中
  sheetSelected(d){
    console.log(d);
    
  },
  // 暂存表格
  stachData(data){
    let obj = {}
    for(let key in data){
      if(key !== 'autofilter'){
        obj[key] = data[key]
      }
    }
    localStorage.setItem('sheetData',JSON.stringify(obj))
  }
}
export default TaskSheet