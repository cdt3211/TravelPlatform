var myChart = echarts.init(document.getElementById('myChart'));

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
        max: 1000,
        left: 'left',
        top: '85%',
        text: ['高', '低'],
        calculable: false,
        orient: 'horizontal',
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8'],
            symbolSize: [30, 100]
        }
    },
    title: {
        text: ''
    },
    // geo: {
    //     map: 'china',
    // },
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
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '天津',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '上海',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '重庆',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '河北',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '河南',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '云南',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '辽宁',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '黑龙江',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '湖南',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '安徽',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '山东',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '新疆',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '江苏',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '浙江',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '江西',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '湖北',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '广西',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '甘肃',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '山西',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '内蒙古',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '陕西',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '吉林',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '福建',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '贵州',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '广东',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '青海',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '西藏',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '四川',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '宁夏',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '海南',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '台湾',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '香港',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '澳门',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
        {
            name: '南海诸岛',
            value: Math.round(Math.random() * 1000),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
        },
    ]
    }],
    };

    myChart.setOption(option);
}

loadMap("china", "中国"); 

myChart.on('click', function (params) {
    // 获取被点击的省份
    var province = params.name;
    // 从 wordCloudData 对象中获取词云数据
    var data = wordCloudData[province];
    var initialData = wordCloudData['全国'];

    if (data) {
        // 如果找到了词云数据，使用新的词云数据更新 data4 图表
        myChart.setOption({
            series: [{
                data: data
            }],
        });
    } else {
        // 如果没有找到词云数据，恢复最初
        myChart.setOption({
            series: [{
                data: initialData
            }],
        });
    }
});




