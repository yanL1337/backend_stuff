## Steven Spielberg

# db.movieDetails.find({director:"Steven Spielberg"},{title: 1, \_id: 0})

## Rotten Tomatoes

# db.movieDetails.find({"tomato.userReviews":{$gt:40000}},{title: 1, \_id: 0}).limit(20).sort({"tomato.userReviews": 1})

## nur zwischen 2000 - 2005

# db.movieDetails.find({year:{$gte:2000,$lte:2005}},{\_id: 0, title: 1, year: 1})

## Alles nach 2010 und 4er rating

# db.movieDetails.find({"tomato.userRating":{$gte:4}, year:{$gt:2010}},{\_id: 0, title:1, director: 1})

## Schon wieder reviews und sort nach year

# db.movieDetails.find({"tomato.reviews":{$lt:1000}, year:{$lt:2005}},{\_id : 0, year: 1, title: 1}).sort({"tomato.reviews": 1}).limit(10)

## diesmal alles wo tomato nicht vorkommt

# db.movieDetails.find({tomato:{$exists:false}},{\_id: 0, title: 1})

## imdb votes und rating

# db.movieDetails.find({"imdb.votes": {$gt: 100, $lt: 1000}},{\_id: 0, title: 1, "imdb.rating": 1})

## Alle absteigend nach imdb rating

# db.movieDetails.find({},{\_id: 0, title: 1}).sort({"imdb.rating": -1})

## top 10 nach imdb rating

# db.movieDetails.find({},{\_id: 0, title: 1, "imdb.rating":1}).sort({"imdb.rating": -1}).limit(10)

## Nur Crime und Drama als Genre

# db.movieDetails.find({genres:{$all:["Crime","Drama"]}},{\_id : 0, title: 1, genres: 1}).sort({"imdb.rating": 1})
