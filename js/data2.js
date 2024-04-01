var myChart = echarts.init(document.getElementById('data2'));

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
    tooltip: {
      trigger: "axis",
      formatter: function (params, ticket, callback) {
        var res = params[0].name;
  
        for (var i = 0, l = params.length; i < l; i++) {
          if (params[i].seriesType === "line") {
            res +=
              "<br/>" +
              params[i].seriesName +
              " : " +
              (params[i].value ? params[i].value : "-") +
              "%";
          } else {
            res +=
              "<br/>" +
              params[i].seriesName +
              " : " +
              (params[i].value ? params[i].value : "-") +
              "亿人次";
          }
        }
        return res;
      },
    },
    grid: {
      containLabel: true,
    },
    legend: {
      data: ["同比增长", "国内旅游人次"],
        textStyle: {
            color: "white",
        },
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: "white",
        },
        data: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
      },
    ],
    // dataZoom: [
    //   {
    //     type: "slider",
    //     xAxisIndex: 0,
    //     filterMode: "empty",
    //     start: 0,
    //     end: 100,
    //   },
    //   {
    //     type: "slider",
    //     yAxisIndex: 0,
    //     filterMode: "empty",
    //     start: 0,
    //     end: 100,
    //   },
    //   {
    //     type: "inside",
    //     xAxisIndex: 0,
    //     filterMode: "empty",
    //     start: 0,
    //     end: 100,
    //   },
    //   {
    //     type: "inside",
    //     yAxisIndex: 0,
    //     filterMode: "empty",
    //     start: 0,
    //     end: 100,
    //   },
    // ],
    yAxis: [
      {
        type: "value",
        name: "同比增长",
        min: -120, // 设置为-120%
        max: 120, // 设置为0%
        interval: 40, // 设置为6等份
        position: "left",
        axisLabel: {
          formatter: "{value}%",
          color: "#ffffff63",
        },
        axisLine: {
            lineStyle: {
                color: 'white' // 设置坐标轴名称的颜色为白色
            }
        },
      },
      {
        type: "value",
        name: "国内旅游人次",
        min: 10, // 设置为10亿人次
        interval: 5, // 设置为12等份
        position: "right",
        axisLabel: {
          formatter: "{value}亿人次",
          color: "#ffffff63",
        },
        axisLine: {
            lineStyle: {
                color: 'white' // 设置坐标轴名称的颜色为白色
            }
        },
      },
    ],
    series: [
      {
        name: "同比增长",
        type: "line",
        label: {
          normal: {
            show: true,
            position: "top",
          },
        },
        lineStyle: {
          normal: {
            width: 2,
            shadowColor: "rgba(0,0,0,0.4)",
            shadowBlur: 10,
            shadowOffsetY: 10,
          },
        },
        data: [12.8, 10.8, 8.4, -52.1, 12.8, -22.1, 93.3],
      },
      {
        name: "国内旅游人次",
        type: "bar",
        yAxisIndex: 1,
        label: {
          normal: {
            show: true,
            position: "top",
          },
        },
        itemStyle: {
            color: 'rgba(6, 92, 153, 1)' // 设置柱状条的颜色为蓝色
        },
        data: [50.01, 55.39, 60.06, 28.79, 32.46, 25.3, 48.9, 55.3],
      },
    ],
  };

myChart.setOption(option);