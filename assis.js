MongoDB Enterprise > db.movies.insert({title:"Inglorious Basterds", writer:"Quentin Tarantino", year:"2009", actors:["Brad Pitt", "Diane Kruger", "Eli Roth"]})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.movies.insert({title:"The Hobbit: An unexpected Journey", writer:"J.R.R. Tolkein", year:"2012",franchise:"The Hobbit"})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.movies.insert({title:"The Hobbit: The Desolation of Smaug", writer:"J.R.R Tolkien", year:"2013", franchise:"The Hobbit"})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.movies.insert({title:"The Hobbit: The Battle of the Five Armies", writer:"J.R.R Tolkien", year:"2002", franchise:"The Hobbit", synopsis:"Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.movies.insert({title:"Pee Wee Herman's Big Adventures"})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.movies.insert({title:"Avatar"})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.movies.insert({title:"Fight Club", writer: "Chuck Palahniuk", year: "1999", actors:["Brad Pitt", "Edward Norton"]})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.movies.insert({title:"Pulp Fiction", writer:"Quentin Tarantino", year:"2009", actors:["John Travolta", "Uma Thurman"]})
WriteResult({ "nInserted" : 1 })
//find documents
MongoDB Enterprise > db.movies.find()
{ "_id" : ObjectId("618b094e4cedca56eadd2b2e"), "title" : "Inglorious Basterds", "writer" : "Quentin Tarantino", "year" : "2009", "actors" : [ "Brad Pitt", "Diane Kruger", "Eli Roth" ] }
{ "_id" : ObjectId("618b09834cedca56eadd2b2f"), "title" : "The Hobbit: An unexpected Journey", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit" }
{ "_id" : ObjectId("618b09a44cedca56eadd2b30"), "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R Tolkien", "year" : "2013", "franchise" : "The Hobbit" }
{ "_id" : ObjectId("618b09c94cedca56eadd2b31"), "title" : "The Hobbit: The Battle of the Five Armies", "writer" : "J.R.R Tolkien", "year" : "2002", "franchise" : "The Hobbit", "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness." }
{ "_id" : ObjectId("618b09e74cedca56eadd2b32"), "title" : "Pee Wee Herman's Big Adventures" }
{ "_id" : ObjectId("618b09fd4cedca56eadd2b33"), "title" : "Avatar" }
{ "_id" : ObjectId("618b0a244cedca56eadd2b34"), "title" : "Fight Club", "writer" : "Chuck Palahniuk", "year" : "1999", "actors" : [ "Brad Pitt", "Edward Norton" ] }
{ "_id" : ObjectId("618b0a554cedca56eadd2b35"), "title" : "Pulp Fiction", "writer" : "Quentin Tarantino", "year" : "2009", "actors" : [ "John Travolta", "Uma Thurman" ] }
MongoDB Enterprise > db.movies.find({writer:"Quentin Tarantino"})
{ "_id" : ObjectId("618b094e4cedca56eadd2b2e"), "title" : "Inglorious Basterds", "writer" : "Quentin Tarantino", "year" : "2009", "actors" : [ "Brad Pitt", "Diane Kruger", "Eli Roth" ] }
{ "_id" : ObjectId("618b0a554cedca56eadd2b35"), "title" : "Pulp Fiction", "writer" : "Quentin Tarantino", "year" : "2009", "actors" : [ "John Travolta", "Uma Thurman" ] }
MongoDB Enterprise > db.movies.find({actors:"Brad Pitt"})
{ "_id" : ObjectId("618b094e4cedca56eadd2b2e"), "title" : "Inglorious Basterds", "writer" : "Quentin Tarantino", "year" : "2009", "actors" : [ "Brad Pitt", "Diane Kruger", "Eli Roth" ] }
{ "_id" : ObjectId("618b0a244cedca56eadd2b34"), "title" : "Fight Club", "writer" : "Chuck Palahniuk", "year" : "1999", "actors" : [ "Brad Pitt", "Edward Norton" ] }
MongoDB Enterprise > db.movies.find({franchise:"The Hobbit"})
{ "_id" : ObjectId("618b09834cedca56eadd2b2f"), "title" : "The Hobbit: An unexpected Journey", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit" }
{ "_id" : ObjectId("618b09a44cedca56eadd2b30"), "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R Tolkien", "year" : "2013", "franchise" : "The Hobbit" }
{ "_id" : ObjectId("618b09c94cedca56eadd2b31"), "title" : "The Hobbit: The Battle of the Five Armies", "writer" : "J.R.R Tolkien", "year" : "2002", "franchise" : "The Hobbit", "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness." }
MongoDB Enterprise > db.movies.find({year:{$gt:"1990", $lt:"2000"}})
{ "_id" : ObjectId("618b0a244cedca56eadd2b34"), "title" : "Fight Club", "writer" : "Chuck Palahniuk", "year" : "1999", "actors" : [ "Brad Pitt", "Edward Norton" ] }
MongoDB Enterprise > db.movies.find({$or:[{year:{$gt:"2010"}},{year: {$lt:"2000"}}]})
{ "_id" : ObjectId("618b09834cedca56eadd2b2f"), "title" : "The Hobbit: An unexpected Journey", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit" }
{ "_id" : ObjectId("618b09a44cedca56eadd2b30"), "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R Tolkien", "year" : "2013", "franchise" : "The Hobbit" }
{ "_id" : ObjectId("618b0a244cedca56eadd2b34"), "title" : "Fight Club", "writer" : "Chuck Palahniuk", "year" : "1999", "actors" : [ "Brad Pitt", "Edward Norton" ] }
//updates
MongoDB Enterprise > db.movies.update({_id:ObjectId("618b09a44cedca56eadd2b30")}, {$set:{synopsis:"A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
MongoDB Enterprise > db.movies.update({_id:ObjectId("618b0a554cedca56eadd2b35")}, {$push:{actors:"Samuel L. Jackson"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
//text search
MongoDB Enterprise > db.movies.find({synopsis:{$regex:"Bilbo"}})
{ "_id" : ObjectId("618b09a44cedca56eadd2b30"), "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R Tolkien", "year" : "2013", "franchise" : "The Hobbit", "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." }
{ "_id" : ObjectId("618b09c94cedca56eadd2b31"), "title" : "The Hobbit: The Battle of the Five Armies", "writer" : "J.R.R Tolkien", "year" : "2002", "franchise" : "The Hobbit", "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness." }
MongoDB Enterprise > db.movies.find({synopsis:{$regex:"Gandalf"}})
MongoDB Enterprise > db.movies.find({$and:[{synopsis:{$regex:"Bilbo"}}, {synopsis:{$not:/Gandalf/}}]})
{ "_id" : ObjectId("618b09a44cedca56eadd2b30"), "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R Tolkien", "year" : "2013", "franchise" : "The Hobbit", "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." }
{ "_id" : ObjectId("618b09c94cedca56eadd2b31"), "title" : "The Hobbit: The Battle of the Five Armies", "writer" : "J.R.R Tolkien", "year" : "2002", "franchise" : "The Hobbit", "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness." }
MongoDB Enterprise > db.movies.find({$or:[{synopsis:{$regex:"dwarves"}}, {synopsis:{$regex:"hobbit"}}]})
{ "_id" : ObjectId("618b09a44cedca56eadd2b30"), "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R Tolkien", "year" : "2013", "franchise" : "The Hobbit", "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." }
MongoDB Enterprise > db.movies.find({$and:[{synopsis:{$regex:"gold"}}, {synopsis:{$regex:"dragon"}}]})
{ "_id" : ObjectId("618b09a44cedca56eadd2b30"), "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R Tolkien", "year" : "2013", "franchise" : "The Hobbit", "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." }
//remove
MongoDB Enterprise > db.movies.remove({_id:ObjectId("618b09e74cedca56eadd2b32")})
WriteResult({ "nRemoved" : 1 })
MongoDB Enterprise > db.movies.remove({_id:ObjectId("618b09fd4cedca56eadd2b33")})
WriteResult({ "nRemoved" : 1 })
MongoDB Enterprise > show collections
movies
users
//relatins
MongoDB Enterprise > db.users.insert({_id:1,username:"GoodGuyGreg", first_name:"Good Guy", last_name:"Greg"})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.users.insert({_id:2, username:"ScumbagSteve", fullname:{first: "Scumbag", last:"Steve"}})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > show collections
movies
posts
users
MongoDB Enterprise > db.posts.insert({username:"GoodGuyGreg", title:"Passes out at Party", body:"Raises your credit score"})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.posts.insert({ username:"GoodGuyGreg", title:"Steals your identity", body:"Raises your credit score"})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.posts.insert({username:"GoodGuyGreg", title:"Reports a bug in your code", body:"Sends you a pull request"})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.posts.insert({ username:"ScumbagSteve", title:"Borrows something", body:"Sells it"})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.posts.insert({ username:"ScumbagSteve", title:"Borrows everything", body:"The end"})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.posts.insert({username:"ScumbagSteve", title:"Forks your repo on github", body:"Sets to private"})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.posts.find()
{ "_id" : ObjectId("618b0f984cedca56eadd2b36"), "username" : "GoodGuyGreg", "title" : "Passes out at Party", "body" : "Raises your credit score" }
{ "_id" : ObjectId("618b0fad4cedca56eadd2b37"), "username" : "GoodGuyGreg", "title" : "Steals your identity", "body" : "Raises your credit score" }
{ "_id" : ObjectId("618b0fc14cedca56eadd2b38"), "username" : "GoodGuyGreg", "title" : "Reports a bug in your code", "body" : "Sends you a pull request" }
{ "_id" : ObjectId("618b0fd44cedca56eadd2b39"), "username" : "ScumbagSteve", "title" : "Borrows something", "body" : "Sells it" }
{ "_id" : ObjectId("618b0ff24cedca56eadd2b3a"), "username" : "ScumbagSteve", "title" : "Borrows everything", "body" : "The end" }
{ "_id" : ObjectId("618b10074cedca56eadd2b3b"), "username" : "ScumbagSteve", "title" : "Forks your repo on github", "body" : "Sets to private" }
MongoDB Enterprise > db.comments.insert({ username:"GoodGuyGreg", comment:"Hope you got a good deal!", post:ObjectId("618b0fd44cedca56eadd2b39")})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.comments.insert({username:"GoodGuyGreg", comment:"What's mine is yours!", post:ObjectId("618b0ff24cedca56eadd2b3a")})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.comments.insert({username:"GoodGuyGreg", comment:"Don't violate the licensing agreement!", post:ObjectId("618b10074cedca56eadd2b3b")})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.comments.insert({username:"ScumbagSteve", comment:"It still isn't clean", post:ObjectId("618b0f984cedca56eadd2b36")})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.comments.insert({username:"ScumbagSteve", comment:"Denied your PR cause I found a hack", post:ObjectId("618b0fc14cedca56eadd2b38")})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.users.find().pretty()
{
        "_id" : 1,
        "username" : "GoodGuyGreg",
        "first_name" : "Good Guy",
        "last_name" : "Greg"
}
{
        "_id" : 2,
        "username" : "ScumbagSteve",
        "fullname" : {
                "first" : "Scumbag",
                "last" : "Steve"
        }
}
MongoDB Enterprise > db.posts.find().pretty()
{
        "_id" : ObjectId("618b0f984cedca56eadd2b36"),
        "username" : "GoodGuyGreg",
        "title" : "Passes out at Party",
        "body" : "Raises your credit score"
}
{
        "_id" : ObjectId("618b0fad4cedca56eadd2b37"),
        "username" : "GoodGuyGreg",
        "title" : "Steals your identity",
        "body" : "Raises your credit score"
}
{
        "_id" : ObjectId("618b0fc14cedca56eadd2b38"),
        "username" : "GoodGuyGreg",
        "title" : "Reports a bug in your code",
        "body" : "Sends you a pull request"
}
{
        "_id" : ObjectId("618b0fd44cedca56eadd2b39"),
        "username" : "ScumbagSteve",
        "title" : "Borrows something",
        "body" : "Sells it"
}
{
        "_id" : ObjectId("618b0ff24cedca56eadd2b3a"),
        "username" : "ScumbagSteve",
        "title" : "Borrows everything",
        "body" : "The end"
}
{
        "_id" : ObjectId("618b10074cedca56eadd2b3b"),
        "username" : "ScumbagSteve",
        "title" : "Forks your repo on github",
        "body" : "Sets to private"
}
MongoDB Enterprise > db.posts.find({username:"GoodGuyGreg"})
{ "_id" : ObjectId("618b0f984cedca56eadd2b36"), "username" : "GoodGuyGreg", "title" : "Passes out at Party", "body" : "Raises your credit score" }
{ "_id" : ObjectId("618b0fad4cedca56eadd2b37"), "username" : "GoodGuyGreg", "title" : "Steals your identity", "body" : "Raises your credit score" }
{ "_id" : ObjectId("618b0fc14cedca56eadd2b38"), "username" : "GoodGuyGreg", "title" : "Reports a bug in your code", "body" : "Sends you a pull request" }
MongoDB Enterprise > db.posts.find({username:"ScumbagSteve"})
{ "_id" : ObjectId("618b0fd44cedca56eadd2b39"), "username" : "ScumbagSteve", "title" : "Borrows something", "body" : "Sells it" }
{ "_id" : ObjectId("618b0ff24cedca56eadd2b3a"), "username" : "ScumbagSteve", "title" : "Borrows everything", "body" : "The end" }
{ "_id" : ObjectId("618b10074cedca56eadd2b3b"), "username" : "ScumbagSteve", "title" : "Forks your repo on github", "body" : "Sets to private" }
MongoDB Enterprise > db.comments.find().pretty()
{
        "_id" : ObjectId("618b110d4cedca56eadd2b3c"),
        "username" : "GoodGuyGreg",
        "comment" : "Hope you got a good deal!",
        "post" : ObjectId("618b0fd44cedca56eadd2b39")
}
{
        "_id" : ObjectId("618b11554cedca56eadd2b3d"),
        "username" : "GoodGuyGreg",
        "comment" : "What's mine is yours!",
        "post" : ObjectId("618b0ff24cedca56eadd2b3a")
}
{
        "_id" : ObjectId("618b11a04cedca56eadd2b3e"),
        "username" : "GoodGuyGreg",
        "comment" : "Don't violate the licensing agreement!",
        "post" : ObjectId("618b10074cedca56eadd2b3b")
}
{
        "_id" : ObjectId("618b11e14cedca56eadd2b3f"),
        "username" : "ScumbagSteve",
        "comment" : "It still isn't clean",
        "post" : ObjectId("618b0f984cedca56eadd2b36")
}
{
        "_id" : ObjectId("618b12164cedca56eadd2b40"),
        "username" : "ScumbagSteve",
        "comment" : "Denied your PR cause I found a hack",
        "post" : ObjectId("618b0fc14cedca56eadd2b38")
}
MongoDB Enterprise > db.comments.find({username:"GoodGuyGreg"})
{ "_id" : ObjectId("618b110d4cedca56eadd2b3c"), "username" : "GoodGuyGreg", "comment" : "Hope you got a good deal!", "post" : ObjectId("618b0fd44cedca56eadd2b39") }
{ "_id" : ObjectId("618b11554cedca56eadd2b3d"), "username" : "GoodGuyGreg", "comment" : "What's mine is yours!", "post" : ObjectId("618b0ff24cedca56eadd2b3a") }
{ "_id" : ObjectId("618b11a04cedca56eadd2b3e"), "username" : "GoodGuyGreg", "comment" : "Don't violate the licensing agreement!", "post" : ObjectId("618b10074cedca56eadd2b3b") }
MongoDB Enterprise > db.comments.find({username:"ScumbagSteve"})
{ "_id" : ObjectId("618b11e14cedca56eadd2b3f"), "username" : "ScumbagSteve", "comment" : "It still isn't clean", "post" : ObjectId("618b0f984cedca56eadd2b36") }
{ "_id" : ObjectId("618b12164cedca56eadd2b40"), "username" : "ScumbagSteve", "comment" : "Denied your PR cause I found a hack", "post" : ObjectId("618b0fc14cedca56eadd2b38") }
MongoDB Enterprise >
