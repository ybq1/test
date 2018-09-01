// 百度地图API功能
var drawingManager = new BMap.Map("allmap");    // 创建Map实例
drawingManager.centerAndZoom("武汉", 15);  // 初始化地图,设置中心点坐标和地图级别
//添加地图类型控件
drawingManager.addControl(new BMap.MapTypeControl({
    mapTypes:[
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP
    ]}));
drawingManager.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
drawingManager.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

