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

var a = [1, 2, 3, [4, 5], 6, [7, 8, 9]]

var flatArray = a.reduce(function(accum, cur){
    return accum.concat(cur)
}, [])

console.log(flatArray)


// Expected results:
console.log(getTotalGold(sports)) // Output: 23



var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  

function calculateRating(watchList){
        var a = watchList.filter(function(director){
        return director.Director === "Christopher Nolan"
      }) 
    var imdb = a.reduce(function(accum, cur){
        return accum + cur.imdbRating*1
    }, 0)
    return (imdb / (a.length))
}

  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675
  
// Tạo phương thức reduce()

const number = [1, 2, 3, 4, 5]

const result = number.reduce(function(total,current){
    return total + current
})

console.log(result)

Array.prototype.reduce2 = function(callback, result){
    for (let i = 0; i < this.length; i++){
        callback(this)
    }
}
  
  
  
  
  


