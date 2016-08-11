/*
 * @description echarts
 * @author JiaMeng.Zhang
 * @time 2016.06.21
===============================================================================================*/


/*
 * 显示柱状图，某地区蒸发量和降水量显示
 */
function echartsBarShow(){
	// 基于准备好的dom，初始化echarts实例
	var echartsBar = echarts.init(document.getElementById('echartsBar'));
	
	// 指定图表的配置项和数据
	var optionBar = {
	    title : {
	        text: '某地区蒸发量和降水量'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['蒸发量','降水量']
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            dataView : {show: true, readOnly: false,title :'数据视图'},
	            magicType : {show: true, type: ['line', 'bar'],title:{line:'切换为折线图',bar:'切换为柱状图'}},
	            restore : {show: true,title :'还原'},
	            saveAsImage : {show: true,title :'保存为图片'}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'蒸发量',
	            type:'bar',
	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	        {
	            name:'降水量',
	            type:'bar',
	            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
	            markPoint : {
	                data : [
	                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
	                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name : '平均值'}
	                ]
	            }
	        }
	    ]
	};
	
	// 使用刚指定的配置项和数据显示图表。
	echartsBar.setOption(optionBar);
}

/*
 * 饼图显示
 */
function echartsPieShow(){
	var echartsPie = echarts.init(document.getElementById('echartsPie'));
	var optionPie = {
		title : {
	        text: '进入某网站的渠道的占比',
	        right:20
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
	    },
	    series: [
	        {
	            name:'访问来源',
	            type:'pie',
	            selectedMode: 'single',
	            radius: [0, '30%'],
	
	            label: {
	                normal: {
	                    position: 'inner'
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:335, name:'直达', selected:true},
	                {value:679, name:'营销广告'},
	                {value:1548, name:'搜索引擎'}
	            ]
	        },
	        {
	            name:'访问来源',
	            type:'pie',
	            radius: ['40%', '55%'],
	
	            data:[
	                {value:335, name:'直达'},
	                {value:310, name:'邮件营销'},
	                {value:234, name:'联盟广告'},
	                {value:135, name:'视频广告'},
	                {value:1048, name:'百度'},
	                {value:251, name:'谷歌'},
	                {value:147, name:'必应'},
	                {value:102, name:'其他'}
	            ]
	        }
	    ]
	}	
	// 使用刚指定的配置项和数据显示图表。
	echartsPie.setOption(optionPie);
}

/*
 * 地图显示
 */
function echartsMapShow(){
	var echartsMap = echarts.init(document.getElementById('echartsMap'));
	var geoCoordMap;
	$.get('echarts/json/geoCoordMap.json', function (data) {
		geoCoordMap = data;
	});
	
	var BJData = [
	    [{name:'北京'}, {name:'上海',value:95}],
	    [{name:'北京'}, {name:'广州',value:90}],
	    [{name:'北京'}, {name:'大连',value:80}],
	    [{name:'北京'}, {name:'南宁',value:70}],
	    [{name:'北京'}, {name:'南昌',value:60}],
	    [{name:'北京'}, {name:'拉萨',value:50}],
	    [{name:'北京'}, {name:'长春',value:40}],
	    [{name:'北京'}, {name:'包头',value:30}],
	    [{name:'北京'}, {name:'重庆',value:20}],
	    [{name:'北京'}, {name:'常州',value:10}]
	];
	
	var SHData = [
	    [{name:'上海'},{name:'包头',value:95}],
	    [{name:'上海'},{name:'昆明',value:90}],
	    [{name:'上海'},{name:'广州',value:80}],
	    [{name:'上海'},{name:'郑州',value:70}],
	    [{name:'上海'},{name:'长春',value:60}],
	    [{name:'上海'},{name:'重庆',value:50}],
	    [{name:'上海'},{name:'长沙',value:40}],
	    [{name:'上海'},{name:'北京',value:30}],
	    [{name:'上海'},{name:'丹东',value:20}],
	    [{name:'上海'},{name:'大连',value:10}]
	];
	
	var GZData = [
	    [{name:'广州'},{name:'福州',value:95}],
	    [{name:'广州'},{name:'太原',value:90}],
	    [{name:'广州'},{name:'长春',value:80}],
	    [{name:'广州'},{name:'重庆',value:70}],
	    [{name:'广州'},{name:'西安',value:60}],
	    [{name:'广州'},{name:'成都',value:50}],
	    [{name:'广州'},{name:'常州',value:40}],
	    [{name:'广州'},{name:'北京',value:30}],
	    [{name:'广州'},{name:'北海',value:20}],
	    [{name:'广州'},{name:'海口',value:10}]
	];
	
	var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
	
	var convertData = function (data) {
	    var res = [];
	    for (var i = 0; i < data.length; i++) {
	        var dataItem = data[i];
	        var fromCoord = geoCoordMap[dataItem[0].name];
	        var toCoord = geoCoordMap[dataItem[1].name];
	        if (fromCoord && toCoord) {
	            res.push([{
	                name: dataItem[0].name,
	                coord: fromCoord
	            }, {
	                name: dataItem[1].name,
	                coord: toCoord
	            }]);
	        }
	    }
	    return res;
	};
	$.get('echarts/json/china.json', function (chinaJson) {
		echarts.registerMap('china', chinaJson);
	
		var color = ['#a6c84c', '#ffa022', '#46bee9'];
		var series = [];
		[['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
		    series.push({
		        name: item[0] + ' Top10',
		        type: 'lines',
		        zlevel: 1,
		        effect: {
		            show: true,
		            period: 6,
		            trailLength: 0.7,
		            color: '#fff',
		            symbolSize: 3
		        },
		        lineStyle: {
		            normal: {
		                color: color[i],
		                width: 0,
		                curveness: 0.2
		            }
		        },
		        data: convertData(item[1])
		    },
		    {
		        name: item[0] + ' Top10',
		        type: 'lines',
		        zlevel: 2,
		        effect: {
		            show: true,
		            period: 6,
		            trailLength: 0,
		            symbol: planePath,
		            symbolSize: 15
		        },
		        lineStyle: {
		            normal: {
		                color: color[i],
		                width: 1,
		                opacity: 0.4,
		                curveness: 0.2
		            }
		        },
		        data: convertData(item[1])
		    },
		    {
		        name: item[0] + ' Top10',
		        type: 'effectScatter',
		        coordinateSystem: 'geo',
		        zlevel: 2,
		        rippleEffect: {
		            brushType: 'stroke'
		        },
		        label: {
		            normal: {
		                show: true,
		                position: 'right',
		                formatter: '{b}'
		            }
		        },
		        symbolSize: function (val) {
		            return val[2] / 8;
		        },
		        itemStyle: {
		            normal: {
		                color: color[i]
		            }
		        },
		        data: item[1].map(function (dataItem) {
		            return {
		                name: dataItem[1].name,
		                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
		            };
		        })
		    });
		});
		
		
		
		var optionMap = {
		    backgroundColor: '#ffffff',
		    title : {
		        text: '模拟迁徙',
		        subtext: '数据纯属虚构',
		        left: 'center',
		        textStyle : {
		            color: '#666666'
		        }
		    },
		    tooltip : {
		        trigger: 'item'
		    },
		    legend: {
		        orient: 'vertical',
		        top: 'bottom',
		        left: 'right',
		        data:['北京 Top10', '上海 Top10', '广州 Top10'],
		        textStyle: {
		            color: '#666666'
		        },
		        selectedMode: 'single'
		    },
		    geo: {
		    	map: 'china',
		        label: {
		            emphasis: {
		                show: false
		            }
		        },
		        /*roam: true,*/
		        itemStyle: {
		            normal: {
		                areaColor: '#323c48',
		                borderColor: '#cccccc'
		            },
		            emphasis: {
		                areaColor: '#2a333d'
		            }
		        }
		    },
		    series: series
		};
	
		// 使用刚指定的配置项和数据显示图表。
		echartsMap.setOption(optionMap);
	})
}


/*
 * 散点图显示
 */
function echartsScatterShow(){
	var echartsScatter = echarts.init(document.getElementById('echartsScatter'));
	var dataAll = [
	    [
	        [10.0, 8.04],
	        [8.0, 6.95],
	        [13.0, 7.58],
	        [9.0, 8.81],
	        [11.0, 8.33],
	        [14.0, 9.96],
	        [6.0, 7.24],
	        [4.0, 4.26],
	        [12.0, 10.84],
	        [7.0, 4.82],
	        [5.0, 5.68]
	    ],
	    [
	        [10.0, 9.14],
	        [8.0, 8.14],
	        [13.0, 8.74],
	        [9.0, 8.77],
	        [11.0, 9.26],
	        [14.0, 8.10],
	        [6.0, 6.13],
	        [4.0, 3.10],
	        [12.0, 9.13],
	        [7.0, 7.26],
	        [5.0, 4.74]
	    ],
	    [
	        [10.0, 7.46],
	        [8.0, 6.77],
	        [13.0, 12.74],
	        [9.0, 7.11],
	        [11.0, 7.81],
	        [14.0, 8.84],
	        [6.0, 6.08],
	        [4.0, 5.39],
	        [12.0, 8.15],
	        [7.0, 6.42],
	        [5.0, 5.73]
	    ],
	    [
	        [8.0, 6.58],
	        [8.0, 5.76],
	        [8.0, 7.71],
	        [8.0, 8.84],
	        [8.0, 8.47],
	        [8.0, 7.04],
	        [8.0, 5.25],
	        [19.0, 12.50],
	        [8.0, 5.56],
	        [8.0, 7.91],
	        [8.0, 6.89]
	    ]
	];
	
	var markLineOpt = {
	    animation: false,
	    label: {
	        normal: {
	            formatter: 'y = 0.5 * x + 3',
	            textStyle: {
	                align: 'right'
	            }
	        }
	    },
	    lineStyle: {
	        normal: {
	            type: 'solid'
	        }
	    },
	    tooltip: {
	        formatter: 'y = 0.5 * x + 3'
	    },
	    data: [[{
	        coord: [0, 3],
	        symbol: 'none'
	    }, {
	        coord: [20, 13],
	        symbol: 'none'
	    }]]
	};
	
	var optionScatter = {
	    title: {},
	    grid: [
	        {x: '7%', y: '7%', width: '38%', height: '38%'},
	        {x2: '7%', y: '7%', width: '38%', height: '38%'},
	        {x: '7%', y2: '7%', width: '38%', height: '38%'},
	        {x2: '7%', y2: '7%', width: '38%', height: '38%'}
	    ],
	    tooltip: {
	        formatter: 'Group {a}: ({c})'
	    },
	    xAxis: [
	        {gridIndex: 0, min: 0, max: 20},
	        {gridIndex: 1, min: 0, max: 20},
	        {gridIndex: 2, min: 0, max: 20},
	        {gridIndex: 3, min: 0, max: 20}
	    ],
	    yAxis: [
	        {gridIndex: 0, min: 0, max: 15},
	        {gridIndex: 1, min: 0, max: 15},
	        {gridIndex: 2, min: 0, max: 15},
	        {gridIndex: 3, min: 0, max: 15}
	    ],
	    series: [
	        {
	            name: 'I',
	            type: 'scatter',
	            xAxisIndex: [0],
	            yAxisIndex: [0],
	            data: dataAll[0],
	            markLine: markLineOpt
	        },
	        {
	            name: 'II',
	            type: 'scatter',
	            xAxisIndex: [1],
	            yAxisIndex: [1],
	            data: dataAll[1],
	            markLine: markLineOpt
	        },
	        {
	            name: 'III',
	            type: 'scatter',
	            xAxisIndex: [2],
	            yAxisIndex: [2],
	            data: dataAll[2],
	            markLine: markLineOpt
	        },
	        {
	            name: 'IV',
	            type: 'scatter',
	            xAxisIndex: [3],
	            yAxisIndex: [3],
	            data: dataAll[3],
	            markLine: markLineOpt
	        }
	    ]
	};

		// 使用刚指定的配置项和数据显示图表。
		echartsScatter.setOption(optionScatter);
}
