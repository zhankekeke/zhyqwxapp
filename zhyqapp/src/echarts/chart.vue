<template>
    <div id="line-chart">
        <div :id="chart.id" style="height: 250px">
        </div>
    </div>
</template>
<script>
    export default {
        name: "store-count",
        props: ['chart'],
        data() {
            return {
                xData: [],
                yData: [],
                title: "",
                subtext: "",
                type: "",
                data: "",
                title1: '',
                color: '',
                xmes: '',//折线柱状图x轴数据
                //模板数据
                eg_chart: {
                    //id具有唯一性
                    id: "lineChart",
                    type: "bar",
                    title: "11111",
                    data: [
                        {
                            text: '一月',
                            value: 40
                        },
                        {
                            text: '二月',
                            value: 32
                        },
                        {
                            text: '三月',
                            value: 48
                        },
                        {
                            text: '四月',
                            value: 38
                        },
                        {
                            text: '五月',
                            value: 33
                        },
                        {
                            text: '六月',
                            value: 43
                        },
                        {
                            text: '七月',
                            value: 40
                        },
                        {
                            text: '八月',
                            value: 43
                        },
                        {
                            text: '九月',
                            value: 46
                        }, {
                            text: '十月',
                            value: 40
                        },
                        {
                            text: '十一月',
                            value: 43
                        },
                        {
                            text: '十二月',
                            value: 37
                        }
                    ],
                    arr: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                }
            }
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById(this.chart.id));
                // 多条折线图
                if (this.chart.type === 'moreLine') {
                    myChart.setOption({
                        // title: {
                        //     text: this.title,
                        //     x: 'center',
                        //     textStyle: {
                        //         fontSize: 14,
                        //         fontWeight:400,
                        //     },
                        // },
                        tooltip: {
                            trigger: 'axis'
                        },
                        color: this.color,
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: this.xmes,
                        },
                        yAxis: {
                            type: 'value',
                            boundaryGap: [0, 0.01],
                            splitLine:{
                                show:false
                            }
                        },
                        series: this.data
                    })
                }

            },
            init() {
                //转换为符合要求的数据
                this.title = this.chart.title;
                this.subtext = this.chart.subtext;
                this.type = this.chart.type;
                this.color = this.chart.color;
                this.title1 = this.chart.title1;
                this.color = this.chart.color;   // 自定义lengend颜色
                this.xmes = this.chart.xmes;
                this.data = this.chart.data;
                this.chart.data.map((item) => {
                    this.xData.push(item.name)
                    this.yData.push(item.value)
                })
            }
        },
        mounted() {
            this.drawLine()
        },
        watch: {
            //观察option的变化
            chart: {
                handler(newVal, oldVal) {
                    this.init();
                    this.drawLine();
                },
                deep: true //对象内部属性的监听，关键。
            }
        }
    }
</script>
