// 旅游景点饼状图
var myChart3 = echarts.init(document.getElementById('data3'));

var data3Data = {
    '全国':[
        {
          value: 325,
          legendname: "5A级",
          name: "5A级  325",
        },
        {
          value: 4401,
          legendname: "4A级",
          name: "4A级  4401",
        },
        {
          value: 10383,
          legendname: "3A及以下",
          name: "3A及以下  10383",
        },
      ],
    '河北':[
        {
          value: 12,
          legendname: "5A级",
          name: "5A级  12",
        },
        {
          value: 162,
          legendname: "4A级",
          name: "4A级  162",
        },
        {
          value: 339,
          legendname: "3A及以下",
          name: "3A及以下  339",
        },
      ],
    '辽宁':[
        {
          value: 6,
          legendname: "5A级",
          name: "5A级  6",
        },
        {
          value: 150,
          legendname: "4A级",
          name: "4A级  150",
        },
        {
          value: 421,
          legendname: "3A及以下",
          name: "3A及以下  421",
        },
      ],
    '山西':[
        {
          value: 10,
          legendname: "5A级",
          name: "5A级  10",
        },
        {
          value: 150,
          legendname: "4A级",
          name: "4A级  150",
        },
        {
          value: 421,
          legendname: "3A及以下",
          name: "3A及以下  421",
        },
      ],
    '吉林':[
        {
          value: 7,
          legendname: "5A级",
          name: "5A级  7",
        },
        {
          value: 63,
          legendname: "4A级",
          name: "4A级  63",
        },
        {
          value: 161,
          legendname: "3A及以下",
          name: "3A及以下  161",
        },
      ],
    '黑龙江':[
        {
          value: 6,
          legendname: "5A级",
          name: "5A级  6",
        },
        {
          value: 107,
          legendname: "4A级",
          name: "4A级  107",
        },
        {
          value: 296,
          legendname: "3A及以下",
          name: "3A及以下  296",
        },
      ],
    '江苏':[
        {
          value: 26,
          legendname: "5A级",
          name: "5A级  26",
        },
        {
          value: 234,
          legendname: "4A级",
          name: "4A级  234",
        },
        {
          value: 374,
          legendname: "3A及以下",
          name: "3A及以下  374",
        },
      ],
    '浙江':[
        {
          value: 19,
          legendname: "5A级",
          name: "5A级  19",
        },
        {
          value: 239,
          legendname: "4A级",
          name: "4A级  239",
        },
        {
          value: 648,
          legendname: "3A及以下",
          name: "3A及以下  648",
        },
      ],
    '安徽':[
        {
          value: 17,
          legendname: "5A级",
          name: "5A级  17",
        },
        {
          value: 210,
          legendname: "4A级",
          name: "4A级  210",
        },
        {
          value: 461,
          legendname: "3A及以下",
          name: "3A及以下  461",
        },
      ],
    '福建':[
        {
          value: 11,
          legendname: "5A级",
          name: "5A级  11",
        },
        {
          value: 124,
          legendname: "4A级",
          name: "4A级  124",
        },
        {
          value: 360,
          legendname: "3A及以下",
          name: "3A及以下  360",
        },
      ],
    '江西':[
        {
          value: 12,
          legendname: "5A级",
          name: "5A级  12",
        },
        {
          value: 146,
          legendname: "4A级",
          name: "4A级  146",
        },
        {
          value: 263,
          legendname: "3A及以下",
          name: "3A及以下  263",
        },
      ],
    '山东':[
        {
          value: 15,
          legendname: "5A级",
          name: "5A级  15",
        },
        {
          value: 230,
          legendname: "4A级",
          name: "4A级  230",
        },
        {
          value: 983,
          legendname: "3A及以下",
          name: "3A及以下  983",
        },
      ],
    '河南':[
        {
          value: 15,
          legendname: "5A级",
          name: "5A级  15",
        },
        {
          value: 189,
          legendname: "4A级",
          name: "4A级  189",
        },
        {
          value: 376,
          legendname: "3A及以下",
          name: "3A及以下  376",
        },
      ],
    '湖北':[
        {
          value: 7,
          legendname: "5A级",
          name: "5A级  7",
        },
        {
          value: 24,
          legendname: "4A级",
          name: "4A级  24",
        },
        {
          value: 591,
          legendname: "3A及以下",
          name: "3A及以下  591",
        },
      ],
    '湖南':[
        {
          value: 12,
          legendname: "5A级",
          name: "5A级  12",
        },
        {
          value: 184,
          legendname: "4A级",
          name: "4A级  184",
        },
        {
          value: 148,
          legendname: "3A及以下",
          name: "3A及以下  148",
        },
      ],
    '广东':[
        {
          value: 15,
          legendname: "5A级",
          name: "5A级  15",
        },
        {
          value: 216,
          legendname: "4A级",
          name: "4A级  216",
        },
        {
          value: 433,
          legendname: "3A及以下",
          name: "3A及以下  433",
        },
      ],
    '海南':[
        {
          value: 7,
          legendname: "5A级",
          name: "5A级  7",
        },
        {
          value: 33,
          legendname: "4A级",
          name: "4A级  33",
        },
        {
          value: 46,
          legendname: "3A及以下",
          name: "3A及以下  46",
        },
      ],
    '四川':[
        {
          value: 17,
          legendname: "5A级",
          name: "5A级  17",
        },
        {
          value: 355,
          legendname: "4A级",
          name: "4A级  355",
        },
        {
          value: 587,
          legendname: "3A及以下",
          name: "3A及以下  587",
        },
      ],
    '贵州':[
        {
          value: 9,
          legendname: "5A级",
          name: "5A级  9",
        },
        {
          value: 152,
          legendname: "4A级",
          name: "4A级  152",
        },
        {
          value: 382,
          legendname: "3A及以下",
          name: "3A及以下  382",
        },
      ],
    '云南':[
        {
          value: 9,
          legendname: "5A级",
          name: "5A级  9",
        },
        {
          value: 158,
          legendname: "4A级",
          name: "4A级  158",
        },
        {
          value: 394,
          legendname: "3A及以下",
          name: "3A及以下  394",
        },
      ],
    '陕西':[
        {
          value: 16,
          legendname: "5A级",
          name: "5A级  16",
        },
        {
          value: 133,
          legendname: "4A级",
          name: "4A级  133",
        },
        {
          value: 366,
          legendname: "3A及以下",
          name: "3A及以下  366",
        },
      ],
    '甘肃':[
        {
          value: 7,
          legendname: "5A级",
          name: "5A级  7",
        },
        {
          value: 134,
          legendname: "4A级",
          name: "4A级  134",
        },
        {
          value: 303,
          legendname: "3A及以下",
          name: "3A及以下  303",
        },
      ],
    '青海':[
        {
          value: 4,
          legendname: "5A级",
          name: "5A级  4",
        },
        {
          value: 48,
          legendname: "4A级",
          name: "4A级  48",
        },
        {
          value: 583,
          legendname: "3A及以下",
          name: "3A及以下  583",
        },
      ],
    '内蒙古':[
        {
          value: 7,
          legendname: "5A级",
          name: "5A级  7",
        },
        {
          value: 156,
          legendname: "4A级",
          name: "4A级  156",
        },
        {
          value: 294,
          legendname: "3A及以下",
          name: "3A及以下  294",
        },
      ],
    '广西':[
        {
          value: 8,
          legendname: "5A级",
          name: "5A级  8",
        },
        {
          value: 307,
          legendname: "4A级",
          name: "4A级  307",
        },
        {
          value: 346,
          legendname: "3A及以下",
          name: "3A及以下  346",
        },
      ],
    '西藏':[
        {
          value: 5,
          legendname: "5A级",
          name: "5A级  5",
        },
        {
          value: 23,
          legendname: "4A级",
          name: "4A级  23",
        },
        {
          value: 120,
          legendname: "3A及以下",
          name: "3A及以下  120",
        },
      ],
    '宁夏':[
        {
          value: 4,
          legendname: "5A级",
          name: "5A级  4",
        },
        {
          value: 29,
          legendname: "4A级",
          name: "4A级  29",
        },
        {
          value: 84,
          legendname: "3A及以下",
          name: "3A及以下  84",
        },
      ],
    '新疆':[
        {
          value: 15,
          legendname: "5A级",
          name: "5A级  15",
        },
        {
          value: 143,
          legendname: "4A级",
          name: "4A级  143",
        },
        {
          value: 441,
          legendname: "3A及以下",
          name: "3A及以下  441",
        },
      ],
    '北京':[
        {
          value: 9,
          legendname: "5A级",
          name: "5A级  9",
        },
        {
          value: 56,
          legendname: "4A级",
          name: "4A级  56",
        },
        {
          value: 85,
          legendname: "3A及以下",
          name: "3A及以下  85",
        },
      ],
    '天津':[
        {
          value: 2,
          legendname: "5A级",
          name: "5A级  2",
        },
        {
          value: 33,
          legendname: "4A级",
          name: "4A级  33",
        },
        {
          value: 68,
          legendname: "3A及以下",
          name: "3A及以下  68",
        },
      ],
    '上海':[
        {
          value: 4,
          legendname: "5A级",
          name: "5A级  4",
        },
        {
          value: 72,
          legendname: "4A级",
          name: "4A级  72",
        },
        {
          value: 62,
          legendname: "3A及以下",
          name: "3A及以下  62",
        },
      ],
    '重庆':[
        {
          value: 12,
          legendname: "5A级",
          name: "5A级  12",
        },
        {
          value: 150,
          legendname: "4A级",
          name: "4A级  150",
        },
        {
          value: 129,
          legendname: "3A及以下",
          name: "3A及以下  129",
        },
      ],
  }

var option = {
    backgroundColor: "transparent",
    title: [
      {
        text: "A级景区",
        left: "center",
        bottom: "5%",
        textStyle: {
        fontSize: 20,
        },
      },
      {
        subtextStyle: {
          fontSize: 20,
          color: "black",
        },
        textAlign: "center",
        x: "34.5%",
        y: "44%",
      },
    ],
    grid: {
        top: "20%",
        left: "10%",
        right: "5%",
        bottom: "15%",
        containLabel: true,
      },
    tooltip: {
      trigger: "item",
      formatter: function (parms) {
        var str =
          parms.marker +
          "" +
          parms.data.legendname +
          "</br>" +
          "数量：" +
          parms.data.value +
          "</br>" +
          "占比：" +
          parms.percent +
          "%";
        return str;
      },
    },
    legend: {
      type: "scroll",
      orient: "vertical",
      left: "70%",
      align: "left",
      top: "middle",
      textStyle: {
        color: "black",
      },
      height: 250,
    },
    series: [
      {
        type: "pie",
        center: ["35%", "50%"],
        radius: ["65%"],
        clockwise: false, //饼图的扇区是否是顺时针排布
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: true,
            position: "outter",
            formatter: function (parms) {
              return parms.data.legendname;
            },
          },
        },
        itemStyle: {
          color: function(params) {
              // 建立一个颜色数组
              var colorList = ['#c67987','#d0cbc2','#d8aaa7'];
              // 返回颜色
              return colorList[params.dataIndex]
          }
      },
        labelLine: {
          normal: {
            length: 5,
            length2: 3,
            smooth: true,
          },
        },
        data: [
            {
              value: 325,
              legendname: "5A级",
              name: "5A级  325",
            },
            {
              value: 4401,
              legendname: "4A级",
              name: "4A级  4401",
            },
            {
              value: 10383,
              legendname: "3A及以下",
              name: "3A及以下  10383",
            },
          ],
      },
    ],
  };

myChart3.setOption(option);