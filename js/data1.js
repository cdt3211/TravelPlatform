var myChart = echarts.init(document.getElementById('data1'));

var option = {
    backgroundColor: new echarts.graphic.LinearGradient(
      0,
      0,
      0,
      1,
      [
        {
          offset: 0,
          color: "#c86589",
        },
        {
          offset: 1,
          color: "#06a7ff",
        },
      ],
      false
    ),
    title: {
      text: "游客人数(万人次)",
      left: "center",
      bottom: "5%",
      textStyle: {
        color: "#fff",
        fontSize: 16,
      },
    },
    grid: {
      top: "20%",
      left: "10%",
      right: "10%",
      bottom: "15%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["18", "19", "20", "21", "22", "23"],
      axisLabel: {
        margin: 30,
        color: "#ffffff63",
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: true,
        length: 25,
        lineStyle: {
          color: "#ffffff1f",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#ffffff1f",
        },
      },
    },
    yAxis: [
      {
        type: "value",
        position: "right",
        axisLabel: {
          margin: 20,
          color: "#ffffff63",
        },
  
        axisTick: {
          show: true,
          length: 15,
          lineStyle: {
            color: "#ffffff1f",
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#ffffff1f",
          },
        },
        axisLine: {
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
      },
    ],
    series: [
      {
        name: "注册总量",
        type: "line",
        smooth: true, //是否平滑曲线显示
        showAllSymbol: true,
        symbol: "circle",
        symbolSize: 6,
        lineStyle: {
          normal: {
            color: "#fff", // 线条颜色
          },
        },
        label: {
          show: true,
          position: "top",
          textStyle: {
            color: "#fff",
          },
        },
        itemStyle: {
          color: "red",
          borderColor: "#fff",
          borderWidth: 3,
        },
        tooltip: {
          show: false,
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "#eb64fb",
                },
                {
                  offset: 1,
                  color: "#3fbbff0d",
                },
              ],
              false
            ),
          },
        },
        data: [553900, 600600, 287900, 324600, 253000, 489000],
      },
    ],
  };

myChart.setOption(option);