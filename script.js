// AOS active
AOS.init({
  duration: 1200,
});

//Hamburgers
function openNav() {
  hamburger.classList.add("is-active");
  document.getElementById("popUpNav").style.display = "block";
  document.getElementById('wrapper').style.display = "none";
};

function closeNav() {
  hamburger.classList.remove("is-active");
  document.getElementById("popUpNav").style.display = "none";
  document.getElementById('wrapper').style.display = "block";
};

// Hamburger Menu Spin
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener('click', () => hamburger.classList.contains('is-active') ? closeNav() : openNav());
closeNav();

// Bar chart artikel per bulan selama 2019
new Chart(document.getElementById("bar-chart"), {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"],
    datasets: [{
      label: "Jumlah artikel",
      backgroundColor: ["#e8c3b9", "#ef504d", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#141414", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#141414"],
      data: [37, 108, 74, 71, 32, 8, 18, 62, 79, 36, 90, 8]
    }]
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Jumlah Artikel Ultimagz Selama Periode 2019'
    }
  }
});

//doughnut chart
new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Organic Search", "Direct", "Social", "Referral"],
    datasets: [{
      label: "Traffic Channel",
      backgroundColor: ["#ef504d", "#8e5ea2", "#3cba9f", "#141414"],
      data: [223337, 31668, 3621, 1054]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Traffic channel'
    }
  },
});

// tayangan artikel
new Chart(document.getElementById("bar-chart-horizontal"), {
  type: 'horizontalBar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Dec"],
    datasets: [
      {
        label: "Jumlah tayangan",
        backgroundColor: ["#141414", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#ef504d", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#e8c3b9"],
        data: [36018, 47575, 46952, 57382, 58978, 60919, 63159, 70589, 65481, 62174, 58273, 45145]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Jumlah Tayangan Artikel Sepanjang 2019'
    }
  }
});

// line chart
new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Dec"],
    datasets: [{
      data: [3.987512, 3.514286, 3.296501, 2.035060, 1.885236, 1.583868, 2.835013, 4.930536, 50.152621, 62.655513, 60.299374, 63.401413],
      label: false,
      borderColor: "#ef504d",
      fill: false
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {

          min: 0,
          max: 100,
          callback: function (value) { return value + "%" }
        },
        scaleLabel: {
          display: true,
          //labelString: "Percentage"
        }
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.yLabel;
        }
      }
    },
    title: {
      display: true,
      text: "Bounce Rate 2019"
    }
  }
});

// bounce vs pageviews
new Chart(document.getElementById("line-chart-bounce"), {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Dec"],
    datasets: [{
      data: [3987, 3514, 3296, 2035, 1885, 1583, 2835, 4930, 50152, 62655, 60299, 63401],
      label: "Bounce Rate",
      borderColor: "#ef504d",
      fill: true
    }, {
      data: [36018, 47575, 46952, 57382, 58978, 60919, 63159, 70589, 65481, 62174, 58273, 45145],
      label: "Page Views",
      borderColor: "#8e5ea2",
      fill: true
    }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Bounce Rate vs Page Views'
    }
  }
});

// bounce vs pageviews vs user
new Chart(document.getElementById("line-chart-bounce-user"), {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Dec"],
    datasets: [{
      data: [3987, 3514, 3296, 2035, 1885, 1583, 2835, 4930, 50152, 62655, 60299, 63401],
      label: "Bounce Rate",
      borderColor: "#ef504d",
      fill: true
    }, {
      data: [36018, 47575, 46952, 57382, 58978, 60919, 63159, 70589, 65481, 62174, 58273, 45145],
      label: "Page Views",
      borderColor: "#8e5ea2",
      fill: true
    }, {
      data: [11776, 13752, 13348, 19597, 20521, 21766, 22572, 22826, 28813, 32215, 26107, 24999],
      label: "New Users",
      borderColor: "#3cba9f",
      fill: true
    }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Bounce Rate vs Page Views vs New Users'
    }
  }
});

// user dan new Users
new Chart(document.getElementById("bar-chart-grouped"), {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Dec"],
    datasets: [
      {
        label: "Pembaca",
        backgroundColor: "#e8c3b9",
        data: [12039, 14302, 14091, 20088, 21029, 22230, 23122, 24023, 29478, 32960, 27022, 25544]
      }, {
        label: "Pembaca Baru",
        backgroundColor: "#ef504d",
        data: [11776, 13752, 13348, 19597, 20521, 21766, 22572, 22826, 28813, 32215, 26107, 24999]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Jumlah pembaca dan pembaca baru'
    }
  }
});

// gender
new Chart(document.getElementById("gender-pie"), {
  type: 'doughnut',
  data: {
    labels: ["Female", "Male"],
    datasets: [{
      label: "Gender",
      backgroundColor: ["#EC7063", "#3498DB"],
      data: [163251, 96072]
    }]
  },
  options: {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Gender'
    }
  },
});

// umur
new Chart(document.getElementById("umur-bar-chart"), {
  type: 'horizontalBar',
  data: {
    labels: ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"],
    datasets: [
      {
        label: "Umur",
        backgroundColor: ["#D5F5E3", "#7DCEA0", "#229954", "#196F3D", "#145A32", "#0B5345"],
        data: [117609, 96368, 23462, 11443, 5092, 4469],
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Umur'
    }
  }
});


//Location
new Chart(document.getElementById("kota-bar-chart"), {
  type: 'bar',
  data: {
    labels: ["Jakarta", "Surabaya", "Bandung", "Medan", "Makassar", "Tangerang Selatan", "Surakarta", "Tangerang", "Bekasi", "Depok"],
    datasets: [
      {
        label: "Kota",
        backgroundColor: ["#EC7063", "#AF7AC5", "#5499C7", "#48C9B0", "#F4D03F", "#EB984E", "#34495E", "#6D4C41", "#186A3B", "#641E16"],
        data: [121926, 37731, 13452, 9441, 7343, 6718, 4410, 4364, 4207, 3854]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Kota'
    }
  }
});


//device
new Chart(document.getElementById("device-pie"), {
  type: 'doughnut',
  data: {
    labels: ["Mobile", "Dekstop", "Tablet"],
    datasets: [{
      label: "Device",
      backgroundColor: ["#A4C639", "#2471A3", "#F8C471"],
      data: [212660, 41916, 1940]
    }]
  },
  options: {

    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Device'
    }
  },
});


//browser
new Chart(document.getElementById("browser-bar-chart"), {
  type: 'bar',
  data: {
    labels: ["Chrome", "Safari", "Samsung Internet", "UC Browser", "Android Webview", "Firefox", "Opera", "Opera Mini", "Safari(in-app)", "Edge"],
    datasets: [
      {
        label: "Jumlah",
        backgroundColor: ["#EC7063", "#85C1E9", "#2E4053", "#F7DC6F", "#27AE60", "#EB984E", "#A93226", "#E74C3C", "#5DADE2", "#0078D7"],
        data: [170043, 34870, 13769, 9405, 8688, 7434, 6994, 2011, 1291, 703]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Browser'
    }
  }
});

//OS
new Chart(document.getElementById("os-bar"), {
  type: 'bar',
  data: {
    labels: ["Android", "iOS", "Windows", "Macintosh", "Linux"],
    datasets: [{
      label: "OS System",
      backgroundColor: ["#A4C639", "#ECF0F1", "#00A2ED", "#BFC9CA", "#2C3E50"],
      data: [177597, 36805, 36140, 4058, 1214]
    }]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'OS System'
    }
  },
});

// sub-konten
new Chart(document.getElementById("sub-konten-bar-chart-vertical"), {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"],
    datasets: [{
      label: 'Review',
      backgroundColor: "#141414",
      data: [12]
    }, {
      label: 'Hiburan',
      backgroundColor: ["#ef504d", "#ef504d", "#ef504d", "#ef504d", "#ef504d", "#ef504d", "#ef504d", "#ef504d", "#ef504d", "#ef504d"],
      data: [0, 39, 32, 29, 0, 3, 0, 0, 27, 11]
    }, {
      label: 'Event',
      backgroundColor: ["#e8c3b9", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#e8c3b9", "#e8c3b9"],
      data: [0, 0, 0, 0, 16, 0, 10, 17, 0, 0, 24, 6]
    }]
  },

  options: {
    legend: {
      display: true,
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Sub-konten Terbanyak yang Dipublikasi Sepanjang Tahun 2019'
    },
  }
});

// social media channel
new Chart(document.getElementById("social-media-pie-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Twitter", "Instagram", "Facebook", "Instagram Stories", "Youtube", "LinkedIn", "WordPress"],
    datasets: [{
      label: "Social Media Channel",
      backgroundColor: ["#4287f5", "#f2f542", "#f54254", "#f59c42", "#c842f5", "#42f575", "#4266f5"],
      data: [3036, 1060, 1033, 68, 52, 30, 11]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    title: {
      display: true,
      text: 'Social Media Channel'
    }
  },
});

// tren hari
new Chart(document.getElementById("tren-hari-bar-chart-vertical"), {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"],
    datasets: [{
      label: 'Selasa',
      backgroundColor: ["#42f575", "#42f575", "#42f575", "#42f575", "#42f575", "#42f575", "#42f575", "#42f575", "#42f575", "#42f575"],
      data: [2309, 3050, 0, 4098, 0, 0, 0, 0, 5365, 5912]
    }, {
      label: 'Senin',
      backgroundColor: ["#4287f5", "#4287f5", "#4287f5"],
      data: [0, 0, 2462]
    }, {
      label: 'Sabtu',
      backgroundColor: ["#f2f542", "#f2f542", "#f2f542", "#f2f542", "#f2f542", "#f2f542", "#f2f542", "#f2f542", "#f2f542", "#f2f542", "#f2f542"],
      data: [0, 0, 0, 0, 3801, 4205, 3743, 4585, 0, 0, 4869]
    }, {
      label: 'Minggu',
      backgroundColor: ["#f54254", "#f54254", "#f54254", "#f54254", "#f54254", "#f54254", "#f54254", "#f54254", "#f54254", "#f54254", "#f54254", "#f54254"],
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4893]
    }]
  },

  options: {
    legend: {
      display: true,
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Tren Hari Pembaca Sepanjang Tahun 2019'
    }
  }
});

