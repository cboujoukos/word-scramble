Add ActiveAdmin?
-- https://medium.com/superhighfives/a-top-shelf-web-stack-rails-5-api-activeadmin-create-react-app-de5481b7ec0b
-- https://blog.heroku.com/a-rock-solid-modern-web-stack

To run dev server from root dir:
  [NOT WORKING] foreman start -f Procfile.dev
  heroku local -f Procfile.dev




How do I get around ththe CORS issue???
    --Failed to load https://od-api.oxforddictionaries.com/api/v1/inflections/en/: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:5000' is therefore not allowed access. The response had HTTP status code 403. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS

ANAGRAMICA api


Old file structure Procfile:
    web: cd client && npm start -p 3000
    api: cd rails-api && bundle exec rails s -p 3001


FIX: Modal resizing.

ADD STARTING HIGH SCORES TO PRODUCTION DB
  - heroku run rails console

  Add an updateHighScores reducer action rather than fetching high scores each time component mounts

7/23/18
  -add validation to high score ensuring at least 2 characters are entered
