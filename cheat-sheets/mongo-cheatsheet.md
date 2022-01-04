If a collection doesn't exist and your try to use, MongoDB will create it for you automatically.

in CLI : `use <database>` is for switching between

## inserts (C)

insertOne()
insertMany() -- takes in an array of items to insert
insert() -- deprecated, don't use

Data is not necessarily structures, so when you do any insert, you add a javascript object

```
    {
        name: 'Scooby',
        species: 'Dog'
    }
```

values can be any type, mongodb will just take what you give it

after insert it will create \_id -- this is used by mongo as a primary key

\_id: ObjectId('xxxjqjaj')
-- You can't change or insert any value to \_id, this taken. Meant to be used internally

## find (R)

db.pets.find({ query }, { fieldsToReturn (projection) }) -- all by default
{name: 'Scooby'}

db.pets.find({ {age: $gt: 29 })

be carefully of OR vs AND

db.pets.find({ $or: [{age: $gt: 29 }, {age: $lt: 8 }] ) -- only one has to match
db.pets.find({ $and: [{age: $gt: 29 }, {name: 'Scooby' }] ) -- both have to match

querying by \_id

{\_id: ObjectId('xxx')} -- right
{\_id: 'xxx'} -- wrong

## update (U)

use updateOne, updateMany, vs update (deprecated)

select, then to change
https://docs.mongodb.com/manual/reference/operator/update/#id1

```
    db.pets.updateOne({ name: 'Scooby'}, { $inc: { age: 1 }}) -- add 1  to Scooby's age

    db.pets.updateOne({ name: 'Scooby'}, { age: 49 }) -- setting Scooby's age to 49

    db.pets.updateOne({ name: 'Scooby'}, { $unset: { age: '' } }) -- removing the age field from the record
```

## aggregation

this is #10 in the assessment

Aggregation takes an array of modification (read-only)

sort, filter, group

good for reporting, easily understanding your data

each of the transformation are run in order of the array

Project

```
    db.pets.aggregate([
        {
            $project: {
                petName: "$name", -- instead of name, returning field is now called petName
                species: {$toUpper: "$species"}
            }
        }
    ])

```

    the field that you are projecting is wrapped in"$<field_name>"

Sort

```
    db.pets.aggregate([
        {
            $project: {
                petName: "$name", -- instead of name, returning field is now called petName
                species: {$toUpper: "$species"}
            }
        },
        {
            $sort: {
                age: 1
            }
        }
    ])

```

+1 is ASC, -1 DESC

Group
combine data based on a field

```
    db.pets.aggregate([
       {
           $group: {
               _id: "$species",
               count: { $sum: 1 }
           }
       }
    ])
```

Returns

```
{_id: 'Dog', count: 1}
{_id: 'Cat', count: 6}
```
