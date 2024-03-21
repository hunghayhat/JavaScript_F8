// function sum(a,b){
//     return a.toString() + b.toString();
// }

// // alert(sum(100,399));
// console.log('Nguyen The \'Hung\'')
// var firstName = 'Hung'
// var lastName = 'Nguyen'

// console.log(`Toi la ${firstName} ${lastName}`);

// var result = 20 / 'ABC';

// var siu = 7.9234580
// console.log(typeof siu.toString())
// console.log(result)

// console.log(siu.toFixed(3))

// var car = [
//     'Bugatti',
//     'Audi',
//     'Lexus',
//     'BMW',
//     'Mercedes',
//     null,
//     function sum(a,b){},
//     123
// ];
// var languages = [
//     'Japanese',
//     'Vietnamese',
//     'English',

// ]
// console.log(Array.isArray(result))

// // console.log(car.join(', ')) // join method 
// console.log(car.pop()); // Delete the last element of array
// console.log(car.push(123)) // Add one element at end of array
// console.log(car);

// console.log(car.shift()) // Delete the first element of array and show it
// console.log(car.unshift('Siuuuu')); // Add a element to the top of array
// console.log(car)

// console.log(car.splice(1,4,'Ronaldo')) // array(a, b, c): a is the place of array that the splicing starts, b is the number of elements that is spliced, c (string, number etc...) are the added elements after the splicing

// console.log(car.concat(languages)) // array combining
// console.log(languages)

// var goat = {
//     name: 'Messi',
//     dateOfBirth: "24/06/1987",
//     height: 169,
//     club: 'Inter Miami',
//     getAge: function(){
//         return this.dateOfBirth;
//     }
// }

// console.log(goat.getAge())

// // Object constructor
// function Book (bookName, price, date){
//     this.bookName = bookName;
//     this.price = price;
//     this.date = date;
// }

// var snowWhite = new Book('Snow White',100000,'24/06')

// snowWhite.owner = 'Hung'

// console.log(snowWhite.owner)
// Book.prototype.buyDate = '25/05/2025'

// console.log(snowWhite.buyDate)

// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]
// var arrLength = orders.length

// function getTotal(orders){
//     var sum = 0
//     for (let i = 0; i < arrLength; i++){
//         sum += orders[i].price
//     }
//     console.log(sum)
//     return sum
   
// }


// // Expected results:
// getTotal(orders) // Output: 8700000

// for (var i = 100; i > 0; i -= 5)
// console.log(i)

// const animes = [
//     {
//         name: 'doraemon',
//         price: 50
//     },
//     {
//         name: 'conan',
//         price: 50
//     },
//     {
//         name: 'dragon ball',
//         price: 50
//     },
  
// ]
// var list = animes.every(function(anime) {
//     return anime.price === 50
// });
// console.log(list)

// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// function getMostFavoriteSport(arr){
//     var result = []
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i].like >= 6)
//         result.push(arr[i])
//     }
//    return result
// }

// function getMostFavoriteSport (arr) {
//     var result = arr.filter(function(item){
//         if (item.like >= 6) 
//         return true

//     })
//     return result
// }


// Kỳ vọng
// console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]


var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
function getTotalGold(arr){
    var a = arr.reduce(function(acc, cur){
        return acc + cur.gold
    },0);
    return a
}


// Expected results:
console.log(getTotalGold(sports)) // Output: 23






