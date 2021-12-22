import { hourTypes } from "./hourTypes"

export const projects = [
  {
    "name": "mushroom house",
    "img_url": "https://images.ctfassets.net/f60q1anpxzid/asset-d8bac747fb2016c5b18668251acd45dd/9cdc877201e22fd8abf3a77cbcb71384/Thumb35.png?fm=jpg&fl=progressive&q=50&w=1200",
    "hours": [
      {
        date: '01/01/2021',
        workerId: 'coon',
        amount: 4,
        type: hourTypes.R
      },
      {
        date: '01/01/2021',
        workerId: 'coon',
        amount: 4,
        type: hourTypes.R
      },
      {
        date: '01/01/2021',
        workerId: 'coon',
        amount: 2,
        type: hourTypes.OT
      }
    ],
    "materials": {
      "2x4": {
        "quantity": 40,
        "unit": "ft",
        "cost_per_unit": 3.5
      },
      "plywood": {
        "quantity": 250,
        "unit": "sq_ft",
        "cost_per_unit": 20.5
      },
      "screws": {
        "quantity": 4,
        "unit": "pound",
        "cost_per_unit": 12.50
      }
    }
  },
  {
    "name": "crystal house",
    "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdPHpOIpF8zukHEJituXgjCupI06nTg4lS8Q&usqp=CAU",
    "hours": [
      {
        date: '01/02/2021',
        workerId: 'coon',
        amount: 4,
        type: hourTypes.R
      },
      {
        date: '01/03/2021',
        workerId: 'coon',
        amount: 4,
        type: hourTypes.R
      },
      {
        date: '01/05/2021',
        workerId: 'coon',
        amount: 2,
        type: hourTypes.OT
      }
    ],
    "materials": {
      "2x4": {
        "quantity": 20,
        "unit": "ft",
        "cost_per_unit": 3.5
      },
      "plywood": {
        "quantity": 20,
        "unit": "sq_ft",
        "cost_per_unit": 20.5
      },
      "screws": {
        "quantity": 3,
        "unit": "pound",
        "cost_per_unit": 12.50
      },
      "resin":{
        "quantity": 3,
        "unit": "oz",
        "cost_per_unit": 3.5
      }
    }
  }
]
