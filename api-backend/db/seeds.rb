# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

apartmentList = List.create(title: "New Apartment")

Card.create(list: apartmentList, title: "Find new apartment", description: "Desc 1" )
Card.create(list: apartmentList, title: "Rent Uhaul", description: "Desc2")
Card.create(list: apartmentList, title: "Card 3", description: "desc3")
Card.create(list: apartmentList, title: "Card 4", description: "desc4")
Card.create(list: apartmentList, title: "Card 5", description: "desc5")
  
recordList = List.create(title: "Best Records of 2016")
  
Card.create(list: recordList, title: "Shearwater - Jet Plane and Oxbow", description: "")
Card.create(list: recordList, title: "The Dirty Nil - Higher Power", description: "")
Card.create(list: recordList, title: "Brian Fallon - Painkillers", description: "")
Card.create(list: recordList, title: "Camp Cope", description: "")
