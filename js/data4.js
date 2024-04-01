var myChart = echarts.init(document.getElementById('data4'));

const list = [
    {
      value: '50',
      name: '特种兵式旅游',
      textStyle: {
        shadowBlur: 4,
        shadowColor: '#ECEFFF',
        shadowOffsetY: 14,
        color: '#73DDFF',
      },
    }, 
    { value: '30', name: '反向旅游' },
    { value: '29', name: '避暑' },
    { value: '28', name: '“进淄赶考”' },
    { value: '27', name: '打卡旅游' },
    { value: '26', name: '美食游' },
    { value: '25', name: '围炉煮茶' },
    { value: '24', name: '仪式游' },
    { value: '23', name: 'Citywalk' },
    { value: '22', name: '研学旅游' },
    { value: '21', name: '康养旅游' },
    { value: '20', name: '自驾出游' },
    { value: '16', name: '45度躺平' },
    { value: '15', name: '旅居结合' },
    { value: '14', name: '避冷' },
    { value: '13', name: '村超BA' },
    { value: '12', name: '沉浸式' },
    // { value: '', name: '' },
  ]
var wordCloudData = {
  '全国':[
    { value: '50', name: '特种兵式旅游' },
    { value: '30', name: '反向旅游' },
    { value: '29', name: '避暑' },
    { value: '28', name: '“进淄赶考”' },
    { value: '27', name: '打卡旅游' },
    { value: '26', name: '美食游' },
    { value: '25', name: '围炉煮茶' },
    { value: '24', name: '仪式游' },
    { value: '23', name: 'Citywalk' },
    { value: '22', name: '研学旅游' },
    { value: '21', name: '康养旅游' },
    { value: '20', name: '自驾出游' },
    { value: '16', name: '45度躺平' },
    { value: '15', name: '旅居结合' },
    { value: '14', name: '避冷' },
    { value: '13', name: '村超BA' },
    { value: '12', name: '沉浸式' },
  ],
  '北京': [
    {value: '49.5', name: '故宫博物院'},
    {value: '42', name: '圆明园'},
    {value: '50', name: '环球影城'},
    {value: '43', name: '王府井'},
    {value: '44.5', name: '恭王府'},
    {value: '36', name: '天安门广场'},
    {value: '46.5', name: '八达岭长城'},
    {value: '44.5', name: '天坛公园'},
    {value: '36', name: '香山公园'},
    {value: '37', name: '北海公园'},
    {value: '30', name: '北京烤鸭'},
    {value: '45', name: '颐和园'},
    {value: '39', name: '明十三陵'},
    // ...
  ],
  '四川': [
    {value: '44.5', name: '三星堆'},
    {value: '45', name: '峨眉山'},
    {value: '43.5', name: '乐山大佛'},
    {value: '34', name: '太古里'},
    {value: '48.5', name: '大熊猫'},
    {value: '30', name: '理塘'},
    {value: '46.5', name: '都江堰'},
    {value: '44.5', name: '杜甫草堂'},
    {value: '28', name: '天府广场'},
    {value: '45.5', name: '武侯祠'},
    {value: '46.5', name: '九寨沟'},
    // ...
  ],
  '海南': [
    {value: '30', name: '西沙群岛'},
    {value: '36', name: '三亚湾'},
    {value: '32', name: '文昌卫星发射中心'},
    {value: '42', name: '鹿回头'},
    {value: '35', name: '博鳌'},
    {value: '41', name: '亚龙湾'},
    {value: '43.5', name: '天涯海角'},
    {value: '22', name: '国际免税城'},
    {value: '48', name: '蜈支洲岛'},
    {value: '30', name: '文昌鸡'},
    {value: '45', name: '南山'},
    // ...
  ],
  '河北': [
    {value: '35', name: '阿那亚礼堂'},
    {value: '35.5', name: '北戴河'},
    {value: '40.5', name: '避暑山庄'},
    {value: '31', name: '万龙滑雪场'},
    {value: '37.5', name: '山海关'},
    {value: '37', name: '鸽子窝公园'},
    {value: '30', name: '驴肉火烧'},
    {value: '35', name: '正定古城'},
    {value: '35.5', name: '秦皇岛野生动物园'},
    // ...
  ],
  '云南': [
    {value: '44.5', name: '大理'},
    {value: '37.5', name: '香格里拉'},
    {value: '42.5', name: '丽江'},
    {value: '44', name: '石林'},
    {value: '37.5', name: '昆明动物园'},
    {value: '41.5', name: '西双版纳'},
    {value: '23.5', name: '飞来寺'},
    {value: '46', name: '玉龙雪山'},
    {value: '30', name: '澜沧江'},
    {value: '38.5', name: '松赞林寺'},
    {value: '44.5', name: '曼听公园'},
    {value: '43.5', name: '滇池'},
    {value: '42', name: '洱海'},
    // ...
  ],
  '广东': [
    {value: '43', name: '广州塔'},
    {value: '34.5', name: '丹霞山'},
    {value: '35.5', name: '白云山'},
    {value: '31.5', name: '深圳湾'},
    {value: '30', name: '红树林'},
    {value: '39.5', name: '欢乐谷'},
    {value: '42.5', name: '世界之窗'},
    {value: '46', name: '长隆度假区'},
    {value: '38.5', name: '华侨城'},
    {value: '34.5', name: '南越王博物院'},
    {value: '32', name: '景山公园'},
    {value: '31', name: '古龙峡'},
    // ...
  ],
  '广西': [
    {value: '42.5', name: '漓江'},
    {value: '45.5', name: '涠洲岛'},
    {value: '43', name: '遇龙河'},
    {value: '41.5', name: '青秀山'},
    {value: '41.5', name: '龙脊梯田'},
    {value: '37.5', name: '程阳八寨'},
    {value: '38', name: '阳朔西街'},
    {value: '43.5', name: '德天瀑布'},
    {value: '38', name: '北海银滩'},
    {value: '30', name: '螺狮粉'},
    {value: '30', name: '桂林米粉'},
    {value: '42.5', name: '象鼻山'},
    // ...
  ],
  '山西': [
    {value: '46', name: '华山'},
    {value: '42.5', name: '平遥古城'},
    {value: '41.5', name: '云冈石窟'},
    {value: '41', name: '壶口瀑布'},
    {value: '40', name: '悬空寺'},
    {value: '38', name: '太行山大峡谷'},
    {value: '34.5', name: '方特欢乐世界'},
    {value: '37', name: '华严寺'},
    {value: '38', name: '雁门关'},
    {value: '40', name: '五台山'},
    {value: '30', name: '刀削面'},
    {value: '30', name: '平遥牛肉'},
    {value: '39.5', name: '乔家大院'},
    // ...
  ],
  
  // ...
};
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
    tooltip: {
      show: true,
      borderColor: '#fe9a8bb3',
      borderWidth: 1,
      padding: [10, 15, 10, 15],
      confine: true,
      backgroundColor: 'rgba(255, 255, 255, .9)',
      textStyle: {
        color: 'hotpink',
        lineHeight: 22
      },
      extraCssText: 'box-shadow: 0 4px 20px -4px rgba(199, 206, 215, .7);border-radius: 4px;',
      formatter: function (params) {
        return params.name; // 只返回name属性
      }
    },
    series: [
      {
        type: 'wordCloud',
  
        shape: 'pentagon',
  
        left: 'center',
        top: 'center',
        width: '100%',
        height: '100%',
        right: null,
        bottom: null,

        sizeRange: [14, 50],
  
        rotationRange: [0, 0],
        rotationStep: 0,

        gridSize: 25,
  
        drawOutOfBound: false,
  
        layoutAnimation: true,
  
        textStyle: {
          fontFamily: 'PingFangSC-Semibold',
          fontWeight: 600,
          color: function (params) {
            let colors = ['#fe9a8bb3', '#fe9a8bb3', '#fe9a8b03', '#9E87FFb3', '#9E87FFb3', '#9E87FFb3', '#fe9a8bb3', '#fe9a8bb3', '#fe9a8bb3', '#73DDFF', '#58D5FF']
            return colors[parseInt(Math.random() * 10)];
          },
        },
        emphasis: {
          focus: 'none',
        },
  
        data: list,
      },
    ],
  };  

myChart.setOption(option);