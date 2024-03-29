import Mock from 'mockjs'
let jsonData = {
	"name": "sheet1",
	"freeze": "A1",
	"styles": [{
		"align": "center",
		"bgcolor": "#ffff01"
	}],
	"merges": [],
	"rows": {
		"0": {
			"cells": {
				"0": {
					"text": "所属项目",
					"style": 0
				},
				"1": {
					"text": "子任务",
					"style": 0
				},
				"2": {
					"text": "需求",
					"style": 0
				},
				"3": {
					"text": "优先级",
					"style": 0
				},
				"4": {
					"text": "收益预估",
					"style": 0
				},
				"5": {
					"text": "进入需求池时间",
					"style": 0
				},
				"6": {
					"text": "负责人",
					"style": 0,
					"type": "person"
				},
				"7": {
					"text": "需求状态",
					"style": 0
				},
				"8": {
					"text": "前端",
					"style": 0,
					"type": "person"
				},
				"9": {
					"text": "后端",
					"style": 0,
					"type": "person"
				},
				"10": {
					"text": "测试负责人",
					"style": 0,
					"type": "person"
				},
				"11": {
					"text": "开发工期",
					"style": 0
				},
				"12": {
					"text": "开始时间",
					"style": 0
				},
				"13": {
					"text": "提测时间",
					"style": 0
				},
				"14": {
					"text": "测试时间",
					"style": 0
				},
				"15": {
					"text": "预计上线时间",
					"style": 0
				},
				"16": {
					"text": "备注",
					"style": 0
				}
			}
		},
		"1": {
			"cells": {
				"0": {
					"text": "灵动鹿鸣"
				},
				"1": {
					"text": "视频组件"
				},
				"2": {
					"text": "添加视频组件"
				},
				"3": {
					"text": "p0"
				},
				"5": {
					"text": "2019-10-10"
				},
				"6": {
					"text": "kim"
				}
			}
    },
    "len": 50
	},
	"cols": {
		"0": {
			"width": 140
		},
		"1": {
			"width": 200
		},
		"2": {
			"width": 200
		},
		"3": {
			"width": 70
		},
		"4": {
			"width": 200
		},
		"5": {
			"width": 140
		},
		"6": {
			"width": 80
		},
		"7": {
			"width": 80
		},
		"8": {
			"width": 140
		},
		"9": {
			"width": 140
		},
		"10": {
			"width": 140
		},
		"11": {
			"width": 70
		},
		"12": {
			"width": 120
		},
		"13": {
			"width": 120
		},
		"14": {
			"width": 120
		},
		"15": {
			"width": 120
		},
		"16": {
			"width": 120
		},
		"len": 26
	},
	"validations": []
}
Mock.mock('/sheet/getSheetData',{
  data: JSON.stringify(jsonData),
  status: 100
})
Mock.mock('/sheet/saveSheetData',{
  data: "保存成功！",
  status: 100
})