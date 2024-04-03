var myChart = echarts.init(document.getElementById('map'));

var catches = {};

var provinces = [
    "shanghai",
    "hebei",
    "shanxi",
    "neimenggu",
    "liaoning",
    "jilin",
    "heilongjiang",
    "jiangsu",
    "zhejiang",
    "anhui",
    "fujian",
    "jiangxi",
    "shandong",
    "henan",
    "hubei",
    "hunan",
    "guangdong",
    "guangxi",
    "hainan",
    "sichuan",
    "guizhou",
    "yunnan",
    "xizang",
    "shanxi1",
    "gansu",
    "qinghai",
    "ningxia",
    "xinjiang",
    "beijing",
    "tianjin",
    "chongqing",
    "xianggang",
    "aomen",
  ];

  var provincesText = [
    "上海",
    "河北",
    "山西",
    "内蒙古",
    "辽宁",
    "吉林",
    "黑龙江",
    "江苏",
    "浙江",
    "安徽",
    "福建",
    "江西",
    "山东",
    "河南",
    "湖北",
    "湖南",
    "广东",
    "广西",
    "海南",
    "四川",
    "贵州",
    "云南",
    "西藏",
    "陕西",
    "甘肃",
    "青海",
    "宁夏",
    "新疆",
    "北京",
    "天津",
    "重庆",
    "香港",
    "澳门",
  ];



function loadMap(mapType, name){
    var option = {
    backgroundColor: 'transparent',
    visualMap: {
        min: 0,
        max: 10,
        left: 'left',
        top: '85%',
        text: ['高', '低'],
        calculable: false,
        orient: 'horizontal',
        inRange: {
            color: ['#e0f3f8','#abd9e9','#74add1','#4575b4','#313695'],
            symbolSize: [30, 100]
        }
    },
    title: {
        text: ''
    },
    tooltip: {},
    series: [{
        name: name || mapType, //数据名称
        type: 'map',
        map: 'china', // 地图的名称，应与registerMap的第一个参数相同
        label: {
            normal: { //静态的时候展示样式
                show: true, //是否显示地图省份得名称
                textStyle: {
                    color: "#ffffff",
                    fontSize: 12,
                }
            },
            emphasis: { //动态展示的样式
                color: '#000000',
            },
        },
        data: [{
            name: '北京',
            value: 3.27
        },
        {
            name: '天津',
            value: 2.36
        },
        {
            name: '上海',
            value: 3.26
        },
        {
            name: '重庆',
            value: 1.53
        },
        {
            name: '河北',
            value: 8.44
        },
        {
            name: '河南',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '云南',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '辽宁',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '黑龙江',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '湖南',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '安徽',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '山东',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '新疆',
            value: 2.62
        },
        {
            name: '江苏',
            value: 9.4
        },
        {
            name: '浙江',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '江西',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '湖北',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '广西',
            value: 8.49
        },
        {
            name: '甘肃',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '山西',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '内蒙古',
            value: 2.30
        },
        {
            name: '陕西',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '吉林',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '福建',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '贵州',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '广东',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '青海',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '西藏',
            value: 0.55
        },
        {
            name: '四川',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '宁夏',
            value: 0.70
        },
        {
            name: '海南',
            value: Math.round(Math.random() * 10),
        },
        {
            name: '台湾',
            value: 0.65
        },
        {
            name: '香港',
            value: 0.34
        },
        {
            name: '澳门',
            value: 0.28
        },
    ]
    }],
    };

    myChart.setOption(option);
}

loadMap("china", "中国"); 

myChart.on('mouseover', function (params) {
    // 获取被点击的省份
    var province = params.name;
    
    // 更新各省份收入数据
    var data1 = data1Data[province];
    var initialData1 = data1Data['全国'];
    if (data1) {
        myChart1.setOption({
            series: [{
                data: data1.series1
            }, {
                data: data1.series2
            }],
        });
    } else {
        myChart1.setOption({
            series: [{
                data: initialData1.series1
            }, {
                data: initialData1.series2
            }],
        });
    }
    // 更新各省份人口数据
    var data2 = data2Data[province];
    var initialData2 = data2Data['全国'];
    if (data2) {
        myChart2.setOption({
            series: [{
                data: data2.series1
            }, {
                data: data2.series2
            }],
        });
    } else {
        myChart2.setOption({
            series: [{
                data: initialData2.series1
            }, {
                data: initialData2.series2
            }],
        });
    }
    //更新各省份景区数据
    var data3 = data3Data[province];
    var initialData3 = data3Data['全国'];
    if (data3) {
        myChart3.setOption({
            series: [{
                data: data3
            }],
        });
    } else {
        myChart3.setOption({
            series: [{
                data: initialData3
            }],
        });
    }
    // 更新各省份词云数据
    var data4 = wordCloudData[province];
    var initialData4 = wordCloudData['全国'];
    if (data4) {
        myChart4.setOption({
            series: [{
                data: data4
            }],
        });
    } else {
        myChart4.setOption({
            series: [{
                data: initialData4
            }],
        });
    }
});
myChart.on('mouseout', function () {
    myChart4.setOption({
        series: [{
            data: wordCloudData['全国']
        }],
    });
    myChart1.setOption({
        series: [{
            data: data1Data['全国'].series1
        }, {
            data: data1Data['全国'].series2
        }],
    });
    myChart2.setOption({
        series: [{
            data: data2Data['全国'].series1
        }, {
            data: data2Data['全国'].series2
        }],
    });
    myChart3.setOption({
        series: [{
            data: data3Data['全国']
        }]
    });
});



