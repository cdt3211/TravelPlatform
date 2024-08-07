// 热门省份排行
var myChart5 = echarts.init(document.getElementById('rank1'));

var option = {
    title: {
        text: "热门省份",
        right: "center",
        bottom: "3%",
        textStyle: {
            color: "black",
            fontSize: 20,
        },
      },
    tooltip:{
        formatter: function(params) {
            return params.marker +params.name + ': ' + params.value + '亿人';
        }
    },
    grid:{
        top:10,
        width:"70%",
        height:"86%",
        top:"3%",
        left:"15%",
    },
    xAxis: {
        type: 'value',
        max: 15,
        name: '人数(亿人)',
        nameTextStyle:{
            align:'left',
            verticalAlign:'top'
        },
        splitLine:{
           show:false
        },
        axisTick:{
            show:false
        },
        axisLine:{
            lineStyle:{
                color:["#bababa"]
            },
        },
    },
    yAxis: [
        {
            data: ["北京","成都","上海","淄博","广州","南京","昆明","武汉","长沙","重庆"],
            inverse:true,//反向
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                color: 'white',
                fontSize: 12,
                align: "center",
                margin:18,
                formatter: function (value, index){
                    var ind=index+1;
                    if(ind==1){
                        return '{a|'+ind +'}'
                    }else if(ind==2){
                        return '{b|'+ind +'}'
                    }else if(ind==3){
                        return '{c|'+ind +'}'
                    }else{
                        return '{d|'+ind +'}'
                    }
                },
                rich: {
                    a: {
                        backgroundColor:"#f6593a",
                        width:18,
                        height:18,
                        lineHeight:20,
                        borderRadius:9,
                    },
                    b: {
                        backgroundColor:"#f6a43a",
                        width:18,
                        height:18,
                        lineHeight:20,
                        borderRadius:9,
                    },
                    c:{
                        backgroundColor:"#e2c818",
                        width:18,
                        height:18,
                        lineHeight:20,
                        borderRadius:9,
                    },
                    d:{
                        backgroundColor:"#16b5ab",
                        width:18,
                        height:18,
                        lineHeight:20,
                        borderRadius:9,
                    },
                }
            }
        },
        {	
            inverse:true,//反向
            position:'right',//坐标轴位置，移至右边
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            show:true,
            data: ["贵州","云南","河南","江苏","安徽","河北","广西","山东","江西","浙江"],
            axisLabel:{
                fontSize: 22,
                fontWeight: 400,
                color:"black",
                formatter: function (value, index){
                    if(value.length>7){
                        return value.slice(0,6)+"..."
                    }else{
                        return value
                    }
                }
            }
        }
    ],
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.05)',
                    barBorderRadius:[30, 30, 30, 30],
                }
            },
            barWidth:20,
            barGap:'-100%',
            barCategoryGap:'40%',
            data: [100,100,100,100,100,100,100,100,100,100],
            animation: false,
            yAxisIndex:1,//使用右侧y轴
            tooltip:{
                show:false
            }
        },
        {
            name: "数据量",
            type: 'bar',
            barWidth:20,
            data: [12.84,10.4,9.95,9.4,8.5,8.44,8.49,8.2,8.18,7.6,7.64], //次数列表
            yAxisIndex:1,//使用右侧y轴
            color:{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 1, color: '#4662c8' // 0% 处的颜色
                }, {
                    offset: 0, color: '#5d54a1d2' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            itemStyle : {
                normal : {
                    barBorderRadius:[30, 30, 30, 30],
                },
            }, 
            label:{
                show:true,
                position:"right",
                fontSize: 20,
                fontWeight: 600,
                formatter: function(params){
                    return params.data;
                },
            }
        },
    ]
};

myChart5.setOption(option);