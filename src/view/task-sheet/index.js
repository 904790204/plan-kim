import React from 'react'
import Spreadsheet from "../../assets/sheet/index"
import '../../assets/sheet/index.css'
import '../../assets/styles/sheet.scss'
import {defaultData,defaultConf} from './default'
import { message, Button } from 'antd'
import store from '../../store'

class TaskSheet extends React.Component {
  constructor() {
    super()
    this.state = {
      Sheet: null,
      sheetList: '',
      selector: '',
      num:1
    }
    store.subscribe(()=>{
      this.setState({
        num:1
      })
    })
  }
  componentDidUpdate(val){
    
  }
  render() {
    console.log(123);
    return <div className="task-sheet">
              <div id="Spreadsheet"></div>
              <div className="task-sheet-btn">
                {/* <Button type="primary" size="small" onClick={this.getOnlineData.bind(this)}>刷新</Button> */}
                <Button type="primary" size="small" onClick={this.saveOnlineData.bind(this)}>保存</Button>
              </div>
           </div>
  }
  componentDidMount() {
    this.spreadSheetInit()
    this.getOnlineData()
  }
  // 表格初始化
  spreadSheetInit = () => {
    this.setState({
      Sheet: new Spreadsheet("#Spreadsheet",defaultConf)
    },()=>{
      this.state.Sheet.change(this.sheetChange.bind(this)).click(this.sheetClick.bind(this))
      this.setDefaultConf()
    })
    
  }
  // 数据变化
  sheetChange = (data) => {
    console.log(data)
    this.setState({
      sheetList: data
    })
    this.stachData(data)
  }
  // 获取数据
  getData = () => {
    console.log(this.state.Sheet.getData())
  }
  // 自加事件选中
  sheetClick  = (d) => {
    this.setState({
      selector: d
    })
    console.log(d);
    console.log(this.getSelectedRange());
  }
  // 暂存表格
  stachData = (data) => {
    let obj = {}
    for(let key in data){
      if(key !== 'autofilter'){
        obj[key] = data[key]
      }
    }
    localStorage.setItem('sheetData',JSON.stringify(obj))
  }
  // 获取选中范围
  getSelectedRange = () => {
    return this.state.Sheet.data.selector.range
  }
  // 保存数据
  saveOnlineData = () => {
    let params = {
      data: this.state.sheetList
    }
    this.$http.sheetSave(params)
    .then(res=>{
      message.success(res.data);
    })
    .catch(err=>{
      message.error(err.data);
    })
  }
  // 获取线上数据
  getOnlineData = () => {
    this.$http.getSheetData()
    .then(res=>{
      // let storageData = localStorage.getItem('sheetData')
      console.log(defaultData);
      
      let list = null
      if(res.data){
        list = Object.assign({},defaultData,JSON.parse(res.data))
      }else{
        list = defaultData
      }
      this.setState({
        sheetList: list
      })
      this.state.Sheet.loadData(this.state.sheetList)
    })
    .catch(err=>{
      message.error(err.data);
    })
  }
  // 设置默认配置
  setDefaultConf = () => {
    defaultData.search = this.personSearch.bind(this)
  }
  // 搜索
  personSearch = (search,t) =>{
    let selector = this.state.selector
    let title = selector.data.rows._[0].cells
    let type = title[selector.indexes[1]].type
    if(type === 'person'){
      search.setItems([
        {name:'金大光',position:'FE'},
        {name:'李大刀',position:'RD'},
        {name:'王大力',position:'PM'}
      ])
    }
  }
}
export default TaskSheet