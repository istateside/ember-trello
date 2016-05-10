import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('list');
    // $.getJSON('http://localhost:3000/lists').then(function() {
    //   console.log("GET JSON", arguments);
    // });
    // 
    // return null;
    // window.Lists = {
    //   lists: [
    //     { id: 1, title: "New Apartment", type: 'lists', cards: [
    //       { list_id: 1, title: "Find new apartment", description: "Desc 1" },
    //       { list_id: 1, title: "Rent Uhaul", description: "Desc2" },
    //       { list_id: 1, title: "Card 3", description: "desc3" },
    //       { list_id: 1, title: "Card 4", description: "desc4" },
    //       { list_id: 1, title: "Card 5", description: "desc5" },  
    //     ]},
    //     { id: 2, title: "Best Records of 2016", type: 'lists', cards: [
    //       { list_id: 2, title: "Shearwater - Jet Plane and Oxbow", description: "" },
    //       { list_id: 2, title: "The Dirty Nil - Higher Power", description: "" },
    //       { list_id: 2, title: "Brian Fallon - Painkillers", description: "" },
    //       { list_id: 2, title: "Camp Cope", description: "" }
    //     ]}
    //   ]
    // }
    // return window.Lists;

    // Remnants of other attempts at working with Ember Data:
    // return this.store.findAll('list').then(function(lists) { console.log("HERE", lists)});
    
    // const lists = [];
    // const list1 = new ListModel({ title: "New Apartment", cards: []});
    // lists.push(list1)
    // return {lists: lists}

        // this.store.push({ data: {
    //   lists: [
    //     { id: 1, title: "New Apartment", type: 'lists', cards: [
    //       { list_id: 1, title: "Find new apartment", description: "Desc 1" },
    //       { list_id: 1, title: "Rent Uhaul", description: "Desc2" },
    //       { list_id: 1, title: "Card 3", description: "desc3" },
    //       { list_id: 1, title: "Card 4", description: "desc4" },
    //       { list_id: 1, title: "Card 5", description: "desc5" },  
    //     ]},
    //     { id: 2, title: "Best Records of 2016", type: 'lists', cards: [
    //       { list_id: 2, title: "Shearwater - Jet Plane and Oxbow", description: "" },
    //       { list_id: 2, title: "The Dirty Nil - Higher Power", description: "" },
    //       { list_id: 2, title: "Brian Fallon - Painkillers", description: "" },
    //       { list_id: 2, title: "Camp Cope", description: "" }
    //     ]}
    //   ]
    // }});
  }
});
