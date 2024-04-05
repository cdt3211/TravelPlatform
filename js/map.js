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
            color: ['#b2c5f1','#8da8e7','#6a8bd7','#4d6fc0','#375aaa'],
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
            value: 9.95,
        },
        {
            name: '云南',
            value: 10.4,
        },
        {
            name: '辽宁',
            value: 5.1,
        },
        {
            name: '黑龙江',
            value: 2.2,
        },
        {
            name: '湖南',
            value: 6.6,
        },
        {
            name: '安徽',
            value: 8.5,
        },
        {
            name: '山东',
            value: 8.2,
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
            value: 7.6,
        },
        {
            name: '江西',
            value: 8.18,
        },
        {
            name: '湖北',
            value: 7.0,
        },
        {
            name: '广西',
            value: 8.49
        },
        {
            name: '甘肃',
            value: 3.88,
        },
        {
            name: '山西',
            value: 7.64,
        },
        {
            name: '内蒙古',
            value: 2.30
        },
        {
            name: '陕西',
            value: 7.16,
        },
        {
            name: '吉林',
            value: 3.14,
        },
        {
            name: '福建',
            value: 5.70,
        },
        {
            name: '贵州',
            value: 12.84,
        },
        {
            name: '广东',
            value: 7.77,
        },
        {
            name: '青海',
            value: 0.45,
        },
        {
            name: '西藏',
            value: 0.55
        },
        {
            name: '四川',
            value: 6.8,
        },
        {
            name: '宁夏',
            value: 0.70
        },
        {
            name: '海南',
            value: 0.90
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
    var data4 = data4Data[province];
    var initialData4 = data4Data['全国'];
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
    myChart4.setOption({
        series: [{
            data: data4Data['全国']
        }]
    });
});

myChart.on('click', function (params) {
    var province = params.name;  // 获取被点击的省份的名称
    var url = './province/' + province + '.html';  // 创建新页面的 URL
    if (province!= '南海诸岛'){
        window.location.href = url;  // 打开新页面
    }
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
    // 更新各省份人口数据
    var data4 = data4Data[province];
    var initialData4 = data4Data['全国'];
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
            },],
        });
    }
    // 存储数据
    localStorage.setItem('data1', JSON.stringify(data1));
    localStorage.setItem('data2', JSON.stringify(data2));
    localStorage.setItem('data4', JSON.stringify(data4));
});



