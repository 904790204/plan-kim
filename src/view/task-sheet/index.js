import React from 'react'
import Spreadsheet from "../../assets/sheet/index"
import '../../assets/sheet/index.css'
import '../../assets/styles/sheet.scss'
import {defaultData,defaultConf} from './default'
import { message, Button } from 'antd'
import { connect } from 'react-redux'

class TaskSheet extends React.Component {
  constructor() {
    super()
    this.state = {
      Sheet: null,
      sheetList: '',
      selector: ''
    }
  }
  render() {
    return <div className="task-sheet">
              <div id="Spreadsheet"></div>
              <div className="task-sheet-topbtn">
                {/* <Button type="primary" size="small" onClick={this.getOnlineData.bind(this)}>刷新</Button> */}
                <Button type="primary" size="small" onClick={this.saveOnlineData}>保存</Button>
              </div>
              <div className="task-sheet-bottombtn">
                <Button size="small" icon="plus" onClick={()=>this.addSheetRow(10)}>10</Button>
                <Button size="small" icon="plus" onClick={()=>this.addSheetRow(20)}>20</Button>
                <Button size="small" icon="plus" onClick={()=>this.addSheetRow(50)}>50</Button>
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
      let list = null
      if(res.data){
        list = Object.assign({},defaultData,JSON.parse(res.data))
      }else{
        list = defaultData
      }
      this.setState({
        sheetList: list
      })
      this.setSheetData(this.state.sheetList)
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
  // 添加行
  addSheetRow = (num) => {
    let old = this.state.sheetList.rows.len
    num = Number(old) + num
    let list = this.state.sheetList
    list.rows.len = num
    this.setState({
      sheetList: list
    })
    this.setSheetData(this.state.sheetList)
  }
  // 设置数据
  setSheetData = (data) => {
    this.state.Sheet.loadData(JSON.parse(JSON.stringify(data)))
  }
}
const mapStateToProps = state => {
  return {
    userName: state.user.userName,
    userId: state.user.userId,
    portraitUrl: state.user.portraitUrl
  }
}
export default connect(
  mapStateToProps
)(TaskSheet)