// create array with initial freelancer info
const freelancers = [
  { name: `Alice`, occupation: `Writer`, price: 30 },
  { name: `Bob`, occupation: `Teacher`, price: 50 }
];

const freelancerList = document.querySelector(`#freelancer-list`); // Use querySelector for list
const averagePriceEl = document.querySelector(`#average-price`); // Use querySelector for avg price statement
// create function to update list
const updateFreelancerList = () => {
  freelancerList.innerHTML = ''; // Clear the list properly
  freelancers.forEach(freelancer => {
    // create new list element 
    const li = document.createElement(`li`);
    // fill list element with content
    li.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
    // add new list element to freelancer array
    freelancerList.append(li);
  });
  updateAveragePrice();
}
// create a function to update avg price when new person added
const updateAveragePrice = () => {
  // add together prices in array 
  const total = freelancers.reduce((acc, freelancer) => acc + freelancer.price, 0);
  // calculate avg price
  const average = total / freelancers.length;
  // display new price on page
  averagePriceEl.textContent = `Average starting price: $${average.toFixed(2)}`;
}
// create a function to add in free lancer 
const addFreelancer = (name, occupation, price) => {
  freelancers.push({ name, occupation, price });
  updateFreelancerList();
}

updateFreelancerList();
// Function to generate random freelancers
const generateRandomFreelancer = () => {
  // array for names
  const names = [`Eve`, `Frank`, `Grace`, `Henry`, `Jack`, `Peter`, `Hugo`, `Milo`];
  // array for occupations
  const occupations = [`Designer`, `Engineer`, `Consultant`, `Artist`, `Truck Driver`, `Director`, `Engineer`];
  // array for prices
  const prices = [40, 50, 60, 70, 80, 90, 100];
// generate random name from name array
  const randomName = names[Math.floor(Math.random() * names.length)];
  // generate random occupation from  occupation array
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  // generate random price form price array
  const randomPrice = prices[Math.floor(Math.random() * prices.length)];
// invoke addFreeLancer function inputing random names
  addFreelancer(randomName, randomOccupation, randomPrice);

  // Stop adding freelancers once we reach 10
  if (freelancers.length >= 10) {
    clearInterval(intervalId);
}
};

// Simulate a new freelancer being added every 3 seconds
const intervalId = setInterval(generateRandomFreelancer, 3000);
