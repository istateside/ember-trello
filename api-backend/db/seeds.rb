# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

apartmentList = List.create(title: "New Apartment")

Card.create(list: apartmentList, title: "Find new apartment", description: "Done!" )
Card.create(list: apartmentList, title: "Rent Uhaul", description: "Done!")
Card.create(list: apartmentList, title: "Call Time Warner", description: "Waiting on the shipment!")
Card.create(list: apartmentList, title: "Turn on gas", description: "Whoops.")
Card.create(list: apartmentList, title: "Carry all the boxes inside", description: "Ouch.")
  
recordList = List.create(title: "Best Records of 2016")
  
Card.create(list: recordList, title: "Shearwater - Jet Plane and Oxbow", description: "")
Card.create(list: recordList, title: "The Dirty Nil - Higher Power", description: "")
Card.create(list: recordList, title: "Brian Fallon - Painkillers", description: "")
Card.create(list: recordList, title: "Camp Cope - S/T", description: "")
Card.create(list: recordList, title: "Beyoncé - Lemonade", description: "")
Card.create(list: recordList, title: "David Bowie - Blackstar", description: "")
Card.create(list: recordList, title: "Nada Surf - You Know Who You Are", description: "")
Card.create(list: recordList, title: "Weezer - The White Album", description: "")
Card.create(list: recordList, title: "Explosions in the Sky - The Wilderness", description: "")