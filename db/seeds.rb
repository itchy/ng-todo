# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
tasks = Task.create([{state: 0, body: 'do this'}, 
                     {state: 1, body: 'did this'}, 
                     {state: 0, body: 'also do this'}])