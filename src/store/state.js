// https://vuex.vuejs.org/en/state.html

export default {
  sensors: [
    {
      id: '1',
      name: 'Sensor da Válvula 1',
      position: {
        lat: -9.4578987,
        lng: -40.4894545
      },
      readings: [
        {
          dateTime: '20/12/2018 12:00',
          flow: 20
        },
        {
          dateTime: '20/12/2018 12:15',
          flow: 25
        }, {
          dateTime: '20/12/2018 12:30',
          flow: 26
        }, {
          dateTime: '20/12/2018 12:45',
          flow: 29
        }, {
          dateTime: '20/12/2018 13:00',
          flow: 30
        }, {
          dateTime: '20/12/2018 13:15',
          flow: 40
        }
      ]
    },

    {
      id: '2',
      name: 'Sensor da Válvula 2',
      position: {
        lat: -9.458242,
        lng: -40.4897713
      },
      readings: [
        {
          dateTime: '20/12/2018 12:00',
          flow: 26
        },
        {
          dateTime: '20/12/2018 12:15',
          flow: 35
        }, {
          dateTime: '20/12/2018 12:30',
          flow: 46
        }, {
          dateTime: '20/12/2018 12:45',
          flow: 59
        }, {
          dateTime: '20/12/2018 13:00',
          flow: 60
        }, {
          dateTime: '20/12/2018 13:15',
          flow: 70
        }
      ]
    },

    {
      id: '3',
      name: 'Sensor da Válvula 3',
      position: {
        lat: -9.458059,
        lng: -40.490327
      },
      readings: [
        {
          dateTime: '20/12/2018 12:00',
          flow: 56
        },
        {
          dateTime: '20/12/2018 12:15',
          flow: 65
        }, {
          dateTime: '20/12/2018 12:30',
          flow: 76
        }, {
          dateTime: '20/12/2018 12:45',
          flow: 89
        }, {
          dateTime: '20/12/2018 13:00',
          flow: 90
        }, {
          dateTime: '20/12/2018 13:15',
          flow: 100
        }
      ]
    }
  ]
}
