var myChart1 = echarts.init(document.getElementById('data1'));

var data1Data = {
  '全国':{
    series1:[4.57, 5.13, 5.73, 2.23, 2.92, 2.04, 4.91],//总收入
    series2:[15.9, 12.3, 10.4, -61.1, 31.0, -30.0, 140.3],//同比增长
  },
  '新疆':{
    series1:[],
    series2:[],
  }
}

option = {
  backgroundColor: "transparent",
  title: {
    text: "旅游收入",
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
    data: ["旅游收入","同比增长"],
    top: "7%",
  },
  grid: {
    top: "20%",
    left: "5%",
    right: "5%",
    bottom: "15%",
    containLabel: true,
  },
  xAxis: {
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
  yAxis: [
    {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          // color: "#B4B4B4",
        },
      },
      axisLabel: {
        formatter: "{value} 万亿元",
      },
    },
    {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          // color: "#B4B4B4",
        },
      },
      axisLabel: {
        formatter: "{value} %",
      },
    },
  ],

  series: [
    {
      name: "旅游收入",
      type: "bar",
      barGap: "-100%",
      barWidth: 15,
      label: {
        normal: {
          show: true,
          position: "top",
        },
      },
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(156,107,211,0.5)" },
          ]),
        },
      },
      data: [4.57, 5.13, 5.73, 2.23, 2.92, 2.04, 4.91],
    },
    {
      name: "同比增长",
      type: "line",
      smooth: true,
      showAllSymbol: true,
      symbol: "emptyCircle",
      symbolSize: 8,
      yAxisIndex: 1,
      label: {
        normal: {
          show: true,
          position: "top",
        },
      },
      itemStyle: {
        normal: {
          color: "#F02FC2",
        },
      },
      data: [15.9, 12.3, 10.4, -61.1, 31.0, -30.0, 140.3],
    },
  ],
};

myChart1.setOption(option);