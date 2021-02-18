
window.onload = function(){
  var chart = new CanvasJS.Chart("line-chart-pageviews", {
  	animationEnabled: true,
    theme:"light1",

    backgroundColor: "transparent",
    fontFamily:"tahoma",
    axisX:{
  		valueFormatString: "DD MMM",
      labelFontColor: "#E74C3C",
  	},
  	axisY:{
  		includeZero: false,
      labelFontColor: "#E74C3C",
      gridColor: "transparent",
  	},
  	data: [{
  		type: "splineArea",
      xValueFormatString: "DD MMM",
      color: "#922B21",
      lineColor:"red",
      markerColor:"#943126",
  		dataPoints: [
        { x: new Date(2020, 1, 1),y: 997},
        { x: new Date(2020, 1, 2),y: 1051},
        { x: new Date(2020, 1, 3),y: 1021},
        { x: new Date(2020, 1, 4),y: 1007},
        { x: new Date(2020, 1, 5),y: 1156, indexLabel: "highest",markerColor: "green", markerType: "triangle" },
        { x: new Date(2020, 1, 6),y: 1030},
        { x: new Date(2020, 1, 7),y: 1034},
        { x: new Date(2020, 1, 8),y: 947},
        { x: new Date(2020, 1, 9),y: 950},
        { x: new Date(2020, 1, 10),y: 969},
        { x: new Date(2020, 1, 11),y: 1044},
        { x: new Date(2020, 1, 12),y: 1090},
        { x: new Date(2020, 1, 13),y: 656},
        { x: new Date(2020, 1, 14),y: 40, indexLabel: "lowest",markerColor: "green", markerType: "cross"},
        { x: new Date(2020, 1, 15),y: 820},
        { x: new Date(2020, 1, 16),y: 867},
        { x: new Date(2020, 1, 17),y: 908},
        { x: new Date(2020, 1, 18),y: 946},
        { x: new Date(2020, 1, 19),y: 965},
        { x: new Date(2020, 1, 20),y: 1032},
        { x: new Date(2020, 1, 21),y: 1051},
        { x: new Date(2020, 1, 22),y: 926},
        { x: new Date(2020, 1, 23),y: 887},
        { x: new Date(2020, 1, 24),y: 889},
        { x: new Date(2020, 1, 25),y: 945},
        { x: new Date(2020, 1, 26),y: 937},
        { x: new Date(2020, 1, 27),y: 934},
        { x: new Date(2020, 1, 28),y: 880},
        { x: new Date(2020, 1, 29),y: 1054}

  		]
  	}]
  });
  chart.render();


  var chart = new CanvasJS.Chart("line-chart-users", {
    animationEnabled: true,
    theme:"light1",

    backgroundColor: "transparent",
    fontFamily:"Verdana",
    axisX:{
  		valueFormatString: "DD MMM",
      labelFontColor: "#145A32",
  	},
  	axisY:{
  		includeZero: false,
      labelFontColor: "#145A32",
      gridColor: "transparent",
  	},
  	data: [{
  		type: "splineArea",
      xValueFormatString: "DD MMM",
      color: "#229954",
      lineColor:"green",
      markerColor:"#0B5345",
      dataPoints: [
        { x: new Date(2020, 1, 1),y: 2474},
        { x: new Date(2020, 1, 2),y: 2681},
        { x: new Date(2020, 1, 3),y: 2564},
        { x: new Date(2020, 1, 4),y: 2570},
        { x: new Date(2020, 1, 5),y: 3009},
        { x: new Date(2020, 1, 6),y: 2880},
        { x: new Date(2020, 1, 7),y: 2961},
        { x: new Date(2020, 1, 8),y: 2677},
        { x: new Date(2020, 1, 9),y: 2859},
        { x: new Date(2020, 1, 10),y: 3068},
        { x: new Date(2020, 1, 11),y: 3056},
        { x: new Date(2020, 1, 12),y: 3198, indexLabel: "highest",markerColor: "blue", markerType: "triangle" },
        { x: new Date(2020, 1, 13),y: 1825},
        { x: new Date(2020, 1, 14),y: 99, indexLabel: "lowest",markerColor: "blue", markerType: "cross"},
        { x: new Date(2020, 1, 15),y: 2319},
        { x: new Date(2020, 1, 16),y: 2272},
        { x: new Date(2020, 1, 17),y: 2511},
        { x: new Date(2020, 1, 18),y: 2631},
        { x: new Date(2020, 1, 19),y: 2920},
        { x: new Date(2020, 1, 20),y: 2696},
        { x: new Date(2020, 1, 21),y: 2716},
        { x: new Date(2020, 1, 22),y: 2117},
        { x: new Date(2020, 1, 23),y: 2355},
        { x: new Date(2020, 1, 24),y: 2448},
        { x: new Date(2020, 1, 25),y: 2929},
        { x: new Date(2020, 1, 26),y: 2504},
        { x: new Date(2020, 1, 27),y: 2607},
        { x: new Date(2020, 1, 28),y: 2257},
        { x: new Date(2020, 1, 29),y: 2994}

      ]
    }]
  });
  chart.render();

  var chart = new CanvasJS.Chart("line-chart-bouncerate", {
    animationEnabled: true,
    theme:"light1",

    backgroundColor: "transparent",
    fontFamily:"Verdana",
    axisX:{
      valueFormatString: "DD MMM",
      labelFontColor: "#1F618D",
    },
    axisY:{
      includeZero: false,
      labelFontColor: "#1F618D",
      gridColor: "transparent",
    },
    data: [{
      type: "splineArea",
      xValueFormatString: "DD MMM",
      color: "#1A5276",
      lineColor:"blue",
      markerColor:"#34495E",
      dataPoints: [
          { x: new Date(2020, 1, 1),y: 2.61},
          { x: new Date(2020, 1, 2),y: 2.78},
          { x: new Date(2020, 1, 3),y: 3.28},
          { x: new Date(2020, 1, 4),y: 3.31},
          { x: new Date(2020, 1, 5),y: 4.97},
          { x: new Date(2020, 1, 6),y: 4.35},
          { x: new Date(2020, 1, 7),y: 3.29},
          { x: new Date(2020, 1, 8),y: 2.50},
          { x: new Date(2020, 1, 9),y: 3.47},
          { x: new Date(2020, 1, 10),y: 2.23, indexLabel: "lowest",markerColor: "red", markerType: "cross"},
          { x: new Date(2020, 1, 11),y: 3.47},
          { x: new Date(2020, 1, 12),y: 3.24},
          { x: new Date(2020, 1, 13),y: 2.36},
          { x: new Date(2020, 1, 14),y: 2.33},
          { x: new Date(2020, 1, 15),y: 3.49},
          { x: new Date(2020, 1, 16),y: 5.62},
          { x: new Date(2020, 1, 17),y: 4.81},
          { x: new Date(2020, 1, 18),y: 4.80},
          { x: new Date(2020, 1, 19),y: 3.94},
          { x: new Date(2020, 1, 20),y: 4.93},
          { x: new Date(2020, 1, 21),y: 4.23},
          { x: new Date(2020, 1, 22),y: 6.47},
          { x: new Date(2020, 1, 23),y: 5.74},
          { x: new Date(2020, 1, 24),y: 4.68},
          { x: new Date(2020, 1, 25),y: 4.71},
          { x: new Date(2020, 1, 26),y: 6.79, indexLabel: "highest",markerColor: "red", markerType: "triangle"},
          { x: new Date(2020, 1, 27),y: 5.21},
          { x: new Date(2020, 1, 28),y: 4.97},
          { x: new Date(2020, 1, 29),y: 3.21}

        ]
      }]
    });
    chart.render();

    var chart = new CanvasJS.Chart("sub-content", {
      animationEnabled: true,
      backgroundColor:"transparent",
      data: [{
        type: "bar",
        color: "#014D65",
        dataPoints: [
          { y: 918, label: "Olahraga", color:"#000000" },
          { y: 3368, label: "Opini", color:"#9B59B6"  },
          { y: 3977, label: "Uncategorized",color:"#F7F9F9"},
          { y: 4876, label: "Event", color:"#99A3A4" },
          { y: 5743, label: "IPTEK", color:"#2C3E50" },
          { y: 6112, label: "Berita Kampus", color:"#EB984E" },
          { y: 6148, label: "Hiburan", color:"#F9E79F" },
          { y: 9554, label: "Jalan-Jalan", color:"#2ECC71" },
          { y: 13321, label: "Review", color:"#3498DB"},
          { y: 16433, label: "Lifestyle", color:"#E74C3C" },
        ]
      }]
    });
    chart.render();

    var chart = new CanvasJS.Chart("pie-traffic", {
    	animationEnabled: true,
      animationDuration: 2000,
      backgroundColor:"transparent",
    	legend:{
    		cursor: "pointer",
    		itemclick: explodePie
    	},
    	data: [{
    		type: "pie",
    		showInLegend: true,
        theme:"dark1",
    		toolTipContent: "{name}: <strong>{y}%</strong>",
    		indexLabel: "{name} - {y}%",
    		dataPoints: [
    			{ y: 84.5, name: "Organic Search", color:"#F4D03F"},
    			{ y: 13.5, name: "Direct" },
    			{ y: 0.15, name: "Social" },
    			{ y: 0.05, name: "Referral", color:"#212F3D" },

    		]
    	}]
    });
    chart.render();
  }

  function explodePie (e) {
  	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
  		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
  	} else {
  		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
  	}
  	e.chart.render();

  }
