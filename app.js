const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

//fruit.save();

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", peopleSchema);

const person = new Person ({
  name: "Jhon",
  age: 37
});

//person.save();

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else {
    mongoose.connection.close();
    console.log(fruits);
  }
})
