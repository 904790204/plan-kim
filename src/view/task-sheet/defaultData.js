let heads = [
  {
    name:'task',
    text:'所属项目',
    width: 140
  },
  {
    name:'subtask',
    text:'子任务',
    width: 200
  },
  {
    name:'need',
    text:'需求',
    width: 200
  },
  {
    name:'level',
    text:'优先级',
    width: 70
  },
  {
    name:'profit',
    text:'收益预估',
    width: 200
  },
  {
    name:'timeInPond',
    text:'进入需求池时间',
    width: 140
  },
  {
    name:'pm',
    text:'负责人',
    width: 80
  },
  {
    name:'status',
    text:'需求状态',
    width: 80
  },
  {
    name:'fe',
    text:'前端',
    width: 140
  },
  {
    name:'rd',
    text:'后端',
    width: 140
  },
  {
    name:'qa',
    text:'测试负责人',
    width: 140
  },
  {
    name:'longTime',
    text:'开发工期',
    width: 70
  },
  {
    name:'startTime',
    text:'开始时间',
    width: 120
  },
  {
    name:'endTime',
    text:'提测时间',
    width: 120
  },
  {
    name:'testTime',
    text:'测试时间',
    width: 120
  },
  {
    name:'publishTime',
    text:'预计上线时间',
    width: 120
  },
  {
    name:'remarks',
    text:'备注',
    width: 120
  }
]

let conf = {
  name: 'sheet1',
  freeze: 'A1',
  styles: [
    {
      align: "center",
      bgcolor: "#ffff01"
    }
  ],
  merges: [],
  rows: {
    '0': {
      cells: {}
    },
    len: 100
  },
  cols: {
    len: 26
  },
  validations: [],
  autofilter: {}
}
heads.forEach((item, index) =>{
  conf.rows['0'].cells[index] = {
    text: item.text,
    style: 0
  }
  conf.cols[index] = {
    width: item.width
  }
})
console.log(conf)
export default conf