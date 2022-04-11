use crud
db.createCollection("create")
// db.create.insertOne({name: 'AAA', age: '28', gender: 'female'})
db.create.find()

//  db.create.insertMany(
//      [
//      {name: 'BBB', age: '23'},
//      {name: 'CCC', age: '25'},
//      {name: 'DDD', age: '27'},
//      {name: 'EEE', age: '26'}
//      ])

db.user.findOne({name: 'DDD'})

db.create.find()

// db.create.insert({name: 'GGG', age: '29', gender: 'male'})

db.create.find()

db.create.updateOne({name: 'GGG'}, {$set: {name: 'HHH'}})

db.create.findOne()
db.create.find()

db.create.updateOne({name: 'AAA'}, {$set: {gender: 'male'}})
db.create.updateOne({name: 'BBB'}, {$set: {gender: 'female'}})
db.create.updateOne({name: 'CCC'}, {$set: {gender: 'male'}})
db.create.updateOne({name: 'DDD'}, {$set: {gender: 'female'}})
db.create.find()

db.create.findOneAndUpdate({name: 'EEE'}, {$set: {gender: 'male'}})
db.create.find()
db.createCollection("delete")

db.delete.insertMany(
     [
     {name: 'BBB', age: '23'},
     {name: 'CCC', age: '25'},
     {name: 'DDD', age: '27'},
     {name: 'EEE', age: '26'}
     ])
db.delete.find()

db.delete.remove({name: 'DDD'})
db.delete.find()

db.delete.drop()
db.delete.find()

