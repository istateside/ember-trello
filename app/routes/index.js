import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    
    // To use the Rails API backend, use this line.
    // return $.get("http://localhost:3000/lists").then(function(data) {
    //   return data;
    // });
    // 
    // For hardcoded data, not requiring a Rails installation, uncomment the below lines.
    return [
      {
        "id": 1,
        "title": "New Apartment",
        "cards": [
          {
            "id": 1,
            "title": "Find new apartment",
            "list_id": 1,
            "description": "Done!",
          },
          {
            "id": 2,
            "title": "Rent Uhaul",
            "list_id": 1,
            "description": "Done!",
          },
          {
            "id": 3,
            "title": "Call Time Warner",
            "list_id": 1,
            "description": "Waiting on the shipment!",
          },
          {
            "id": 4,
            "title": "Turn on gas",
            "list_id": 1,
            "description": "Whoops.",
          },
          {
            "id": 5,
            "title": "Carry all the boxes inside",
            "list_id": 1,
            "description": "Ouch.",
          }
        ]
      },
      {
        "id": 2,
        "title": "Best Records of 2016",
        "cards": [
          {
            "id": 6,
            "title": "Shearwater - Jet Plane and Oxbow",
            "list_id": 2,
            "description": "",
          },
          {
            "id": 7,
            "title": "The Dirty Nil - Higher Power",
            "list_id": 2,
            "description": "",
          },
          {
            "id": 8,
            "title": "Brian Fallon - Painkillers",
            "list_id": 2,
            "description": "",
          },
          {
            "id": 9,
            "title": "Camp Cope - S/T",
            "list_id": 2,
            "description": "",
          },
          {
            "id": 10,
            "title": "Beyoncé - Lemonade",
            "list_id": 2,
            "description": "",
          },
          {
            "id": 11,
            "title": "David Bowie - Blackstar",
            "list_id": 2,
            "description": "",
          },
          {
            "id": 12,
            "title": "Nada Surf - You Know Who You Are",
            "list_id": 2,
            "description": "",
          },
          {
            "id": 13,
            "title": "Weezer - The White Album",
            "list_id": 2,
            "description": "",
          },
          {
            "id": 14,
            "title": "Explosions in the Sky - The Wilderness",
            "list_id": 2,
            "description": "",
          }
        ]
      }
    ]
  }  
});
