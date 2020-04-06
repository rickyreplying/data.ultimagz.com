window.onload = function(){


  var chart = new CanvasJS.Chart("line-chart-pageviews", {
  	animationEnabled: true,
    theme:"dark1",
    backgroundColor: "#A40200",
    fontFamily:"Verdana",

  	title:{
  		text: "Jumlah Pageviews",
      fontColor:"#229954",
  	},
    axisX:{
  		valueFormatString: "DD MMM"
  	},
  	axisY:{
  		includeZero: false,
  	},
  	data: [{
  		type: "splineArea",
      xValueFormatString: "DD MMM",
      color: "#82E0AA",
      lineColor:"green",
      markerColor:"green",
  		dataPoints: [
        { x: new Date(2020, 1, 1),y: 997},
        { x: new Date(2020, 1, 2),y: 1051},
        { x: new Date(2020, 1, 3),y: 1021},
        { x: new Date(2020, 1, 4),y: 1007},
        { x: new Date(2020, 1, 5),y: 1156, indexLabel: "highest",markerColor: "blue", markerType: "triangle" },
        { x: new Date(2020, 1, 6),y: 1030},
        { x: new Date(2020, 1, 7),y: 1034},
        { x: new Date(2020, 1, 8),y: 947},
        { x: new Date(2020, 1, 9),y: 950},
        { x: new Date(2020, 1, 10),y: 969},
        { x: new Date(2020, 1, 11),y: 1044},
        { x: new Date(2020, 1, 12),y: 1090},
        { x: new Date(2020, 1, 13),y: 656},
        { x: new Date(2020, 1, 14),y: 40, indexLabel: "lowest",markerColor: "blue", markerType: "cross"},
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
    backgroundColor: "#A40200",
    fontFamily:"Verdana",
    theme:"dark1",
    title:{
      text: "Jumlah Users",
      fontColor:"#FDFEFE",
    },
    axisX:{
      valueFormatString: "DD MMM"
    },
    axisY:{
      includeZero: false,
    },
    data: [{
      type: "splineArea",
      xValueFormatString: "DD MMM",
      color: "#AED6F1",
      lineColor:"#2471A3",
      markerColor:"#2471A3",
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
        { x: new Date(2020, 1, 12),y: 3198, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
        { x: new Date(2020, 1, 13),y: 1825},
        { x: new Date(2020, 1, 14),y: 99, indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross"},
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
      backgroundColor: "#A40200",
      fontFamily:"Verdana",
      theme:"dark1",
      title:{
        text: "Bounce Rates",
        fontColor:"#FDFEFE",
      },
      axisX:{
        valueFormatString: "DD MMM"
      },
      axisY:{
        includeZero: false,
      },
      data: [{
        type: "splineArea",
        xValueFormatString: "DD MMM",
        lineColor:"#F6630E",
        color:"#EDBB99",
        markerColor:"#F6630E",
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
          { x: new Date(2020, 1, 10),y: 2.23, indexLabel: "lowest",markerColor: "#F1C40F", markerType: "cross"},
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
          { x: new Date(2020, 1, 26),y: 6.79, indexLabel: "highest",markerColor: "#F1C40F", markerType: "triangle"},
          { x: new Date(2020, 1, 27),y: 5.21},
          { x: new Date(2020, 1, 28),y: 4.97},
          { x: new Date(2020, 1, 29),y: 3.21}

        ]
      }]
    });
    chart.render();



    var chart = new CanvasJS.Chart("pie-traffic", {
    	animationEnabled: true,
      backgroundColor:"#640100",
    	title:{
    		text: "Traffic Channel"
    	},
    	legend:{
    		cursor: "pointer",
    		itemclick: explodePie
    	},
    	data: [{
    		type: "pie",
    		showInLegend: true,
    		toolTipContent: "{name}: <strong>{y}%</strong>",
    		indexLabel: "{name} - {y}%",
    		dataPoints: [
    			{ y: 21361, name: "Organic Search", exploded: true },
    			{ y: 3411, name: "Direct" },
    			{ y: 394, name: "Social" },
    			{ y: 118, name: "Referral" },

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
