namespace :start do
  desc 'Start development server'
  task :development do
    exec 'heroku local -f Procfile.dev'
  end

  desc 'Start production server'
  task :production do
    exec 'NPM_CONFIG_PRODUCTION=true npm run heroku-postbuild && heroku local'
  end
end

task :start => 'start:development'
