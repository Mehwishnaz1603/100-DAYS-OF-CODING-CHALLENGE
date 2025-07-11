                 // 🚀 Day 5 Challenge: Start Coding! 🚀//

//Q13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//and make a list that stores several examples. Use your list to print a series of statements about
//these items, such as “I would like to own a Honda motorcycle.”//
let transportation = ["BMW", "Land Cruser V8", "Civic R.S Turbo", "Audi", "Honda City"];
for (let cars of transportation) {
console.log(`I would like to own a ${cars}`);}

//Q14: Guest List: If you could invite anyone, living or deceased, to dinner, who would
// you invite? Make a list that includes at least three people you’d like to 
//invite to dinner. Then use your list to print a message to each person, 
//inviting them to dinner.
let guest_list: string[] = ["Bisma","Ayesha", "Kiran","Kainat","Neha"]
guest_list.forEach(guest_list => {
    console.log(`Dear ${guest_list}, would you like to join me for dinner?`)
});

//Q15: Changing Guest List: 
//You just heard that one of your guests can’t make the dinner, so you need to send
//out a new set of invitations. You’ll have to think of someone else to invite.
let guest_list1: string[] = ["Bisma","Ayesha","Sana","Neha","Kainat"]
guest_list1.forEach(guest_list1 => {
    console.log(`Dear ${guest_list1}, would you like to join me for dinner?`)
})
let unavailable = "Ayesha"
console.log(`${unavailable} can't make it to dinner.`)
let new_guest = "Noorulain"
guest_list1[guest_list1.indexOf(unavailable)] = new_guest
guest_list1.forEach(guest_list1 => {
    console.log(`Dear ${guest_list1}, would you like to join me for dinner?`)
});


                 