AOS.init({
  duration: 1200
});

new Typed("#typed", {
  strings: ["data.ultimagz.com"],
  typeSpeed: 200,
  delaySpeed: 100,
  loop: true
});


function responsivefy(svg) {

  const container = d3.select(svg.node().parentNode),
    width = parseInt(svg.style("width"), 10),
    height = parseInt(svg.style("height"), 10),
    aspect = width / height;

  svg
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMinYMid")
    .call(resize);

  d3.select(window).on("resize." + container.attr("id"), resize);

  function resize() {
    const w = parseInt(container.style("width"));
    svg.attr("width", w);
    svg.attr("height", Math.round(w / aspect));
  }
}


var pageViews = [
  { ser1: 1, ser2: 3625 },
  { ser1: 2, ser2: 2698 },
  { ser1: 3, ser2: 2441 },
  { ser1: 4, ser2: 2399 },
  { ser1: 5, ser2: 2342 },
  { ser1: 6, ser2: 2279 },
  { ser1: 7, ser2: 2087 },
  { ser1: 8, ser2: 2070 },
  { ser1: 9, ser2: 2490 },
  { ser1: 10, ser2: 2535 },
  { ser1: 11, ser2: 3468 },
  { ser1: 12, ser2: 2526 },
  { ser1: 13, ser2: 2837 },
  { ser1: 14, ser2: 1689 },
  { ser1: 15, ser2: 1420 },
  { ser1: 16, ser2: 1477 },
  { ser1: 17, ser2: 1636 },
  { ser1: 18, ser2: 1628 },
  { ser1: 19, ser2: 1525 },
  { ser1: 20, ser2: 1422 },
  { ser1: 21, ser2: 1198 },
  { ser1: 22, ser2: 1384 },
  { ser1: 23, ser2: 1492 },
  { ser1: 24, ser2: 1508 },
  { ser1: 25, ser2: 1499 },
  { ser1: 26, ser2: 1427 },
  { ser1: 27, ser2: 1494 },
  { ser1: 28, ser2: 1546 },
  { ser1: 29, ser2: 1484 },
  { ser1: 30, ser2: 1711 },
  { ser1: 31, ser2: 1846 }
];

var users = [
  { ser1: 1, ser2: 1332 },
  { ser1: 2, ser2: 956 },
  { ser1: 3, ser2: 909 },
  { ser1: 4, ser2: 924 },
  { ser1: 5, ser2: 864 },
  { ser1: 6, ser2: 799 },
  { ser1: 7, ser2: 824 },
  { ser1: 8, ser2: 812 },
  { ser1: 9, ser2: 881 },
  { ser1: 10, ser2: 926 },
  { ser1: 11, ser2: 1330 },
  { ser1: 12, ser2: 964 },
  { ser1: 13, ser2: 913 },
  { ser1: 14, ser2: 695 },
  { ser1: 15, ser2: 567 },
  { ser1: 16, ser2: 609 },
  { ser1: 17, ser2: 651 },
  { ser1: 18, ser2: 654 },
  { ser1: 19, ser2: 630 },
  { ser1: 20, ser2: 621 },
  { ser1: 21, ser2: 516 },
  { ser1: 22, ser2: 610 },
  { ser1: 23, ser2: 641 },
  { ser1: 24, ser2: 648 },
  { ser1: 25, ser2: 631 },
  { ser1: 26, ser2: 623 },
  { ser1: 27, ser2: 599 },
  { ser1: 28, ser2: 663 },
  { ser1: 29, ser2: 630 },
  { ser1: 30, ser2: 702 },
  { ser1: 31, ser2: 752 }
];

var BounceRate = [
  { ser1: 1, ser2: 5.68 },
  { ser1: 2, ser2: 4.49 },
  { ser1: 3, ser2: 5.29 },
  { ser1: 4, ser2: 5.74 },
  { ser1: 5, ser2: 6.14 },
  { ser1: 6, ser2: 3.95 },
  { ser1: 7, ser2: 6.03 },
  { ser1: 8, ser2: 5.08 },
  { ser1: 9, ser2: 5.1 },
  { ser1: 10, ser2: 4.78 },
  { ser1: 11, ser2: 3.84 },
  { ser1: 12, ser2: 5.75 },
  { ser1: 13, ser2: 4.92 },
  { ser1: 14, ser2: 6.88 },
  { ser1: 15, ser2: 7.01 },
  { ser1: 16, ser2: 7.29 },
  { ser1: 17, ser2: 6.49 },
  { ser1: 18, ser2: 4.38 },
  { ser1: 19, ser2: 6.12 },
  { ser1: 20, ser2: 7.19 },
  { ser1: 21, ser2: 6.64 },
  { ser1: 22, ser2: 8.44 },
  { ser1: 23, ser2: 7.41 },
  { ser1: 24, ser2: 7.45 },
  { ser1: 25, ser2: 7.86 },
  { ser1: 26, ser2: 6.63 },
  { ser1: 27, ser2: 6.22 },
  { ser1: 28, ser2: 10 },
  { ser1: 29, ser2: 9.5 },
  { ser1: 30, ser2: 7.5 },
  { ser1: 31, ser2: 7.19 }
];


var margin = { top: 10, right: 30, bottom: 20, left: 40 },
  width = 400 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom;

var svg = d3
  .select("#line-chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .call(responsivefy)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear().range([0, width]);
var xAxis = d3.axisBottom().scale(x);
svg
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .attr("class", "myXaxis");

var y = d3.scaleLinear().range([height, 0]);
var yAxis = d3.axisLeft().scale(y);
svg.append("g").attr("class", "myYaxis");

var title = document.querySelector("#title");


function update(dataSetName) {
  if (dataSetName === "pageViews") {
    var data = pageViews;
    title.innerHTML =
      "Total jumlah tayangan pada bulan Maret adalah sejumlah <em>61,183</em> tayangan.";
  } else if (dataSetName === "users") {
    var data = users;
    title.innerHTML =
      "Total jumlah pembaca pada bulan Maret adalah sejumlah <em>23,876</em> pembaca.";
  } else if (dataSetName === "BounceRate") {
    var data = BounceRate;
    title.innerHTML =
      "Total rata-rata bounce rate pada bulan Maret adalah sebesar <em>6,13%</em>.";
  }

  x.domain([
    0,
    d3.max(data, function (d) {
      return d.ser1;
    })
  ]);
  svg
    .selectAll(".myXaxis")
    .transition()
    .duration(2500)
    .call(xAxis);

  y.domain([
    0,
    d3.max(data, function (d) {
      return d.ser2;
    })
  ]);
  svg
    .selectAll(".myYaxis")
    .transition()
    .duration(2500)
    .call(yAxis);


  var u = svg.selectAll(".lineTest").data([data], function (d) {
    return d.ser1;
  });

  u.enter()
    .append("path")
    .attr("class", "lineTest")
    .merge(u)
    .transition()
    .duration(2500)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.ser1);
        })
        .y(function (d) {
          return y(d.ser2);
        })
    )
    .attr("fill", "none")
    .attr("stroke", "#ef504d")
    .attr("stroke-width", 3);
}


update("pageViews");


var header = document.getElementById("wrapper-button");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function pieChart() {
  var width = 50;
  height = 50;
  margin = 10;


  var radius = Math.min(width, height) / 2 - margin;

  var svg = d3
    .select("#pie-chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(responsivefy)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


  var data = { "Google 83.6%": 83.6, "Sosmed 3.2%": 3.2, "Direct 13.2%": 13.2 };


  var color = d3
    .scaleOrdinal()
    .domain([3, 1])
    .range(["yellow", "#ef504d", "#504def"]);


  var pie = d3.pie().value(function (d) {
    return d.value;
  });
  var data_ready = pie(d3.entries(data));

  var arcGenerator = d3
    .arc()
    .innerRadius(0)
    .outerRadius(radius);

  svg
    .selectAll("mySlices")
    .data(data_ready)
    .enter()
    .append("path")
    .attr("d", arcGenerator)
    .attr("fill", function (d) {
      return color(d.data.key);
    })
    .attr("stroke", "#2a2a2a")
    .style("stroke-width", "0.03px")
    .style("opacity", 1);


  svg
    .selectAll("mySlices")
    .data(data_ready)
    .enter()
    .append("text")
    .text(function (d) {
      return d.data.key;
    })
    .attr("transform", function (d) {
      return "translate(" + arcGenerator.centroid(d) + ")";
    })
    .style("text-anchor", "middle")
    .style("font-size", 1)
    .style("fill", "white");

  function responsivefy(svg) {
    const container = d3.select(svg.node().parentNode),
      width = parseInt(svg.style("width"), 10),
      height = parseInt(svg.style("height"), 10),
      aspect = width / height;

    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMinYMid")
      .call(resize);

    d3.select(window).on("resize." + container.attr("id"), resize);

    function resize() {
      const w = parseInt(container.style("width"));
      svg.attr("width", w);
      svg.attr("height", Math.round(w / aspect));
    }
  }
};

pieChart();

function barchart() {

  var margin = { top: 20, right: 30, bottom: 40, left: 90 },
    width = 400 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


  var svg = d3.select("#bar-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .call(responsivefy)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.csv("assets/sub-konten.csv", function (data) {


    var x = d3.scaleLinear()
      .domain([0, 16000])
      .range([0, width]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");


    var y = d3.scaleBand()
      .range([0, height])
      .domain(data.map(function (d) { return d.Page; }))
      .padding(.1);
    svg.append("g")
      .call(d3.axisLeft(y))


    svg.selectAll("myRect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", x(0))
      .attr("y", function (d) { return y(d.Page); })
      .attr("width", function (d) { return x(d.Value); })
      .attr("height", y.bandwidth())
      .attr("fill", "#ef504d")

  })

  function responsivefy(svg) {

    const container = d3.select(svg.node().parentNode),
      width = parseInt(svg.style("width"), 10),
      height = parseInt(svg.style("height"), 10),
      aspect = width / height;

    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMinYMid")
      .call(resize);

    d3.select(window).on("resize." + container.attr("id"), resize);

    function resize() {
      const w = parseInt(container.style("width"));
      svg.attr("width", w);
      svg.attr("height", Math.round(w / aspect));
    }
  }

};

barchart();
