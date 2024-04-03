var myChart2 = echarts.init(document.getElementById('data2'));

var data2Data = {
  '全国':{
    series1:[12.8, 10.8, 8.4, -52.1, 12.8, -22.1, 93.3],
    series2:[50.01, 55.39, 60.06, 28.79, 32.46, 25.3, 48.9, 55.3]
},
'北京':{
    series1:[4.4, 4.5, 3.7, -42.3, 38.8, -28.5, 79.8],
    series2:[2.93, 3.07, 3.18, 1.84, 2.55, 1.82, 3.27]
},
'四川':{
    series1:[],
    series2:[]
},
'海南':{
    series1:[],
    series2:[]
},
'河北':{
    series1:[22.7, 18.5, 15.5, -51.4, 19.7, -22.6, 154.4],
    series2:[5.7, 6.8, 7.8, 3.8, 4.29, 3.32, 8.44]
},
'云南':{
    series1:[],
    series2:[]
},
'广东':{
    series1:[],
    series2:[]
},
'广西':{
    series1:[28.2, 30.8, 28.4, -20.4, 20.8, -26.2, 44.1],
    series2:[5.18, 6.78, 8.70, 6.61, 7.98, 5.89, 8.49]
},
'山西':{
    series1:[],
    series2:[]
},
'辽宁':{
    series1:[],
    series2:[]
},
'吉林':{
    series1:[],
    series2:[]
},
'黑龙江':{
    series1:[],
    series2:[]
},
'江苏':{
    series1:[9.6, 9.6, 7.6, -46.2, 49.7, -24.5, 81.1],
    series2:[7.43, 8.14, 8.8, 4.7, 7.1, 5.3, 9.4]
},
'浙江':{
    series1:[],
    series2:[]
},
'安徽':{
    series1:[],
    series2:[]
},
'福建':{
    series1:[],
    series2:[]
},
'江西':{
    series1:[],
    series2:[]
},
'山东':{
    series1:[],
    series2:[]
},
'河南':{
    series1:[],
    series2:[]
},
'湖北':{
    series1:[],
    series2:[]
},
'湖南':{
    series1:[],
    series2:[]
},
'贵州':{
    series1:[],
    series2:[]
},
'陕西':{
    series1:[],
    series2:[]
},
'甘肃':{
    series1:[],
    series2:[]
},
'青海':{
    series1:[],
    series2:[]
},
'台湾':{
    series1:[0.5, 3.0, 7.2, -88.4, -89.8, 537.8, 624.0],
    series2:[0.11, 0.11, 0.12, 0.01, 0.001, 0.009, 0.65]
},
'内蒙古':{
    series1:[19.1, 12.2, 50.2, -35.3, 5.0, -29.5, 149.1],
    series2:[1.15, 1.29, 1.93, 1.25, 1.31, 0.92, 2.30]
},
'西藏':{
    series1:[10.7, 31.4, 19.2, -11.5, 18.5, -27.7, 83.2],
    series2:[0.25, 0.33, 0.40, 0.35, 0.42, 0.30, 0.55]
},
'宁夏':{
    series1:[21.6, 8.36, 19.9, -14.3, 5.7, 7.2, 79.5],
    series2:[0.31, 0.33, 0.40, 0.34, 0.36, 0.39, 0.70]
},
'新疆':{
    series1:[-2.2, 43.2, 40.8, -25.3, 20.5, -35.8, 114.2],
    series2:[1.05, 1.50, 2.12, 1.58, 1.91, 1.22, 2.62]
},
'天津':{
    series1:[10.4, 9.1, 8.1, -42.3, 26.7, -37.3, 110.5],
    series2:[2.08, 2.27, 2.45, 1.41, 1.79, 1.12, 2.36]
},
'上海':{
    series1:[7.5, 6.7, 6.4, -34.7, 24.5, -36.0, 73.5],
    series2:[3.18, 3.40, 3.61, 2.36, 2.94, 1.88, 3.26]
},
'重庆':{
    series1:[20.3, 10.1, 10.0, -35.5, 37.2, -38.2, 98.9],
    series2:[5.39, 5.93, 6.53, 0.64, 0.88, 0.55, 1.53]
},
'香港':{
    series1:[3.2, 11.4, -14.2, -93.6, -97.4, 561.5, 5523.8],
    series2:[0.58, 0.65, 0.56, 0.04, 0.001, 0.001, 0.34]
},
'澳门':{
    series1:[5.4, 9.8, 10.1, -85.0, 30.7, -26.0, 394.9],
    series2:[0.33, 0.36, 0.39, 0.06, 0.08, 0.06, 0.28]
},
}

var option = {
    backgroundColor: "transparent",
      title: {
        text: "游客人数",
        left: "center",
        bottom: "5%",
        textStyle: {
          fontSize: 16,
        },
      },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: [ "国内旅游人次","同比增长"],
      top: "7%",
    },
    grid: {
      top: "20%",
      left: "5%",
      right: "5%",
      bottom: "15%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          lineStyle: {
            color: "black",
          },
        },
        axisTick: {
          show: false,
        },
        data: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "国内旅游人次",
        position: "left",
        axisLabel: {
          formatter: "{value}亿人次",
          // color: "#ffffff63",
        },
        axisLine: {
            lineStyle: {
                // color: 'white' // 设置坐标轴名称的颜色
            }
        },
      },
      {
        type: "value",
        name: "同比增长",
        splitLine: {
          show: false,
        },
        position: "right",
        axisLabel: {
          formatter: "{value}%",
          // color: "#ffffff63",
        },
        axisLine: {
            lineStyle: {
                // color: 'white' // 设置坐标轴名称的颜色
            }
        },
      },
      
    ],
    series: [
      {
        name: "同比增长",
        type: "line",
        smooth: true,
        yAxisIndex: 1,
        symbolSize: 8,
        label: {
          normal: {
            show: true,
            position: "top",
          },
        },
        lineStyle: {
          normal: {
            width: 2,
          },
        },
        data: [12.8, 10.8, 8.4, -52.1, 12.8, -22.1, 93.3],
      },
      {
        name: "国内旅游人次",
        type: "bar",
        barWidth:15,
        label: {
          normal: {
            show: true,
            position: "top",
          },
        },
        itemStyle: {
            barBorderRadius: 5,
            color: 'rgba(48, 133, 194, 1)' // 设置柱状条的颜色为蓝色
        },
        data: [50.01, 55.39, 60.06, 28.79, 32.46, 25.3, 48.9, 55.3],
      },
    ],
  };

myChart2.setOption(option);