# Tiny-trello

A small, functional Trello clone made with Ember and Rails 5.

## Prerequisites

You will need the following things properly installed on your computer.

* Ember
* NPM
* Bower

To use the Rails 5 API (optional), you'll need:
* Ruby 2.3.0
* Bundler
* Rails 5 (bundle install inside the api-backend directory)

## Installation
* `npm install`
* `cd api-backend/`
* `bundle install`

## Running / Development
* In the api-backend folder - `rake db:setup && rails s`
  * Will create and seed the Rails database, then start your API server
* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).