var myChart1 = echarts.init(document.getElementById('map'));
var oBack = document.getElementById("back");
var catches = {};
var wordCloudData = [];

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

oBack.onclick = function () {
    loadMap("china", "中国");

    oBack.style.setProperty('display', 'none');
  };

loadMap("china", "中国");
  // 加载地图
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
        text: name || mapType,
        left: "center",
    },
    series: [
        {
        name: name || mapType, //数据名称
        type: 'map',
        mapType,
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
    // 清理画布
    myChart1.clear();
    myChart1.setOption(option);
    myChart1.off("click");
    if (mapType === "china") {
        // 全国时，添加click 进入省级
        myChart1.on("click", function (param) {
            //遍历取到provincesText 中的下标  去拿到对应的省js
            for (var i = 0; i < provincesText.length; i++) {
                if (param.name === provincesText[i]) {
                    //显示对应省份的方法
                    showProvince(provinces[i], provincesText[i]);

                    break;
                }
            }

            oBack.style.setProperty('display', 'block');
        });
    } else {
        // 省份，添加双击 回退到全国
        myChart1.on("dblclick", function () {
            loadMap("china", "中国");
        });
    }

    var data = wordCloudData[mapType];
    var initialData = wordCloudData['全国'];

    if (data) {
        // 如果找到了词云数据，使用新的词云数据更新 data4 图表
        myChart4.setOption({
            series: [{
                data: data
            }],
        });
    } else {
        // 如果没有找到词云数据，恢复最初
        myChart4.setOption({
            series: [{
                data: initialData
            }],
        });
    }
}

// 展示对应的省
function showProvince(mapType, name) {
    //这写省份的js都是通过在线构建工具生成的，保存在本地，需要时加载使用即可，最好不要一开始全部直接引入。
    if (catches[name]) {
      loadMap(name);
    } else {
      catches[mapType] = true;

      loadBdScript(
        "$" + mapType + "JS",
        "./js/province/" + mapType + ".js",
        function () {
          loadMap(name);
        }
      );
    }
  }
// 加载对应的JS
function loadBdScript(scriptId, url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
      //IE
      script.onreadystatechange = function () {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      // Others
      script.onload = function () {
        callback();
      };
    }
    script.src = url;
    script.id = scriptId;
    document.getElementsByTagName("head")[0].appendChild(script);
  }



