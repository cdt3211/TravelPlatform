var myChart5 = echarts.init(document.getElementById('rank1'));

var option = {
    title: {
        text: "热门城市排名",
        left: "center",
        bottom: "3%",
        textStyle: {
          fontSize: 16,
        },
      },
    tooltip:{},
    grid:{
        top:10,
        width:"70%",
        height:"86%",
        top:"3%",
        left:"15%",
    },
    xAxis: {
        type: 'value',
        name: '(热度)',
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
                color: '#fff',
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
            data: ["北京","成都","上海","淄博","广州","南京","昆明","武汉","长沙","重庆"],
            axisLabel:{
                color:"#333",
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
            data: [96.45,95.09,94.71,92.69,92.55,92.50,92.27,92.03,91.53,91.53], //次数列表
            yAxisIndex:1,//使用右侧y轴
            color:{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 1, color: '#0fe5e3' // 0% 处的颜色
                }, {
                    offset: 0, color: '#2ca1d6' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            itemStyle : {
                normal : {
                    barBorderRadius:[30, 30, 30, 30],
                },
            }, 
            label:{
                show:false,
            }
        },
    ]
};

myChart5.setOption(option);