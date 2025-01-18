export const salesChart = {    
    series:[{
        name: 'Sales',
        data: [30000, 45000, 35000, 60100, 55500, 70000, 69900, 70800]
      }],
    options: {
      chart: {
        id:'salesChart',
        type: 'area',
        sparkline: {
          enabled: true
        }, 
      },
      tooltip: {
        theme: 'dark'
      },
      stroke: {
        curve:"smooth",
      },
      colors:["var(--color-success)"],
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          opacityFrom: 1,
          opacityTo: 0,
          stops: [0, 100],
          colorStops: [
            {
              offset: 0,
              opacity: 0.2,
              color: "var(--color-success)",
            },
            {
              offset: 100,
              opacity: 0,
              color: "transparent",
            },
          ],
        },
      },
    },
};

export const salesLost = {    
    series:[{
        name: 'Sales Lost',
        data: [200,400,250,1000,210,450,1000,1200,100,50,10]
      }],
    options: {
      chart: {
        id:'salesLost',
        type: 'area',
        sparkline: {
          enabled: true
        }, 
      },
      tooltip: {
        theme: 'dark'
      },
      stroke: {
        curve:"smooth",
      },
      colors:["var(--color-danger)"],
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          opacityFrom: 1,
          opacityTo: 0,
          stops: [0, 100],
          colorStops: [
            {
              offset: 0,
              opacity: 0.2,
              color: "var(--color-danger)",
            },
            {
              offset: 100,
              opacity: 0,
              color: "transparent",
            },
          ],
        },
      },
    },
};

export const ordersChart = {    
  series:[{
       name: 'Yields kg/ha',
       data: [200,400,250,100,210,450,100,120,200,400,300]
     }],
   options: {
     chart: {
       id:'ordersChart',
       type: 'area',
       sparkline: {
         enabled: true
       }, 
     },
     tooltip: {
       theme: 'dark'
     },
     stroke: {
       curve:"smooth",
      },
      colors:["var(--color-primary)"],
     fill: {
       type: "gradient",
       gradient: {
         type: "vertical",
         opacityFrom: 1,
         opacityTo: 0,
         stops: [0, 100],
         colorStops: [
           {
             offset: 0,
             opacity: 0.7,
             color: "var(--color-primary)",
           },
           {
             offset: 100,
             opacity: 0,
             color: "transparent",
           },
         ],
       },
     },
   },
};

export const newCustomersChart = {    
  series:[{
       name: 'Wholesalers',
       data: [15,11,25,80,10,22,35,50,70,14,100]
     }],
   options: {
     chart: {
       id:'newCustomersChart',
       type: 'area',
       sparkline: {
         enabled: true
       }, 
     },
     tooltip: {
       theme: 'dark'
     },
     stroke: {
       curve:"smooth",
      },
      colors:["var(--color-primary)"],
     fill: {
       type: "gradient",
       gradient: {
         type: "vertical",
         opacityFrom: 1,
         opacityTo: 0,
         stops: [0, 100],
         colorStops: [
           {
             offset: 0,
             opacity: 0.5,
             color: "var(--color-primary-accent)",
           },
           {
             offset: 100,
             opacity: 0,
             color: "transparent",
           },
         ],
       },
     },
   },
};

export const revenue = {
  options:{
      chart: {
        id: 'revenue',
        type: 'area',
        sparkline: {
          enabled: false,
        },
        toolbar:{
          show:false,
        },
      },
      title: {
        text: 'Your Monthly PSS',
        align: 'left',
        style: {
          fontSize:  '20px',
          fontWeight:  '600',
          color:  'var(--color-text)',
        },
      },
      grid:{
        show: false,
      },
      dataLabels: {
          enabled: true,
      },
      tooltip: {
        theme: 'dark'
      },
      stroke: {
        curve: 'smooth',
      },
      colors:['var(--color-primary)'],
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          opacityFrom: 1,
          opacityTo: 0,
          stops: [0, 100],
          colorStops: [
            {
              offset: 0,
              opacity:1,
              color: "var(--color-primary)",
            },
            {
              offset: 40,
              opacity: 0.7,
              color: "var(--color-primary)",
            },
            {
              offset: 100,
              opacity: 0,
              color: "transparent",
            },
          ],
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return + value;
          }
        },
      },
  },
  series: [{
      name: 'PSS',
      data: [ 0, 1, 10, 15, 24, 28, 30, 55, 40, 45, 50]
    }],
}