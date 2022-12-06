// TODO: What does 'this' refer to? - Window: Global
console.log(this);

// TODO: What does 'this' refer to? - Window: Global
function helloThis() {
  console.log("Inside this function, this is " + this);
}

// TODO: What will this log? -
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

// TODO: What will this log?
var investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15); //
    },
  },
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();

var children = [
  {
    name: "Jack",
    age: 10,
    ageTenYears: function () {
      console.log(this.age + 10);
    },
  },
  {
    name: "Jill",
    age: 11,
    ageTenYears: function () {
      console.log(this.age + 10);
    },
  },
  {
    name: "Prometheus",
    age: 5004,
    ageTenYears: function () {
      console.log(children[2].age + 10);
    },
  },
];

for (var i = 0; i < children.length; i++) {
  console.log(
    children[i].name + " is currently " + children[i].age + " years old."
  );
  children[i].ageTenYears();
}
