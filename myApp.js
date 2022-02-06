require('dotenv').config();
let mongoose = require('mongoose')
const mySecret = process.env['MONGO_URI'];
const { Schema } = mongoose;

mongoose.connect(mySecret, { useNewUrlParser: true});

const personSchema = new Schema({
  name : { type: String, required : true},
  age : {type : Number},
  favoriteFoods : [{type : String, unique : true}]
})

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const person = new Person({
    name : "Anupam",
    age : 29,
    favoriteFoods : ["water", "air"]
  })
  person.save((err, data) => {
    if(err){
      return done(err);
    }
  done(null, data);
  })
};

const createManyPeople = (arrayOfPeople, done) => {
  // const arrayOfPeople = new Person([{name: "Name 1", age: 20, favoriteFoods: ["Food 1", "Food 2"]}, {name: "Name 2", age: 22, favoriteFoods: ["Food 3", "Food 4"]}, {name: "Name 3", age: 30, favoriteFoods: ["Food 5", "Food 6"]}])
  Person.create(arrayOfPeople, (err, data) => {
    if(err){
      return done(err);
    }
      done(null, data);
  })
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
