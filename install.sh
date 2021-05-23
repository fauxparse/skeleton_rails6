#!/bin/zsh

vared -ec -p $'Application name? \x1b[2m[skeleton]\x1b[0m ' name || exit
if [ -z $name ]; then; name=skeleton; fi

vared -ec -p $'Rails server port for development? \x1b[2m[3000]\x1b[0m ' port || exit
if [ -z $name ]; then; port=3000; fi

camelcase=`echo $name | perl -pe 's/_*([^_]*)/\u$1/g'`
snakecase=`echo $name | perl -pe 's/([a-z0-9])([A-Z])/\L$1_\L$2/g' | perl -pe 's/(^.)/\L$1/'`
human=`echo $snakecase | perl -pe 's/(^.)/\u$1/' | perl -pe 's/_/ /g'`
constant=${snakecase:u}

if [ -d $snakecase ]
then
  echo "Directory $snakecase already exists; aborting"
  exit 1
fi

mkdir $snakecase
cd $snakecase
curl -L https://github.com/fauxparse/skeleton/archive/refs/heads/main.tar.gz | tar -xz --strip 1

if rbenv version 2>&1 | grep "not installed"
then
  brew upgrade ruby-build
  rbenv install `cat .ruby-version`
fi

find . -name "*.html.erb" -print0 | xargs -0 sed -i '' -e "s/Skeleton/$human/g"
find . -name "*.rb" -print0 | xargs -0 sed -i '' -e "s/Skeleton/$camelcase/g"
find . -name "*.rb" -print0 | xargs -0 sed -i '' -e "s/skeleton/$snakecase/g"
find . -name "*.yml" -print0 | xargs -0 sed -i '' -e "s/skeleton/$snakecase/g"
find . -name "*.yml" -print0 | xargs -0 sed -i '' -e "s/SKELETON/$constant/g"
sed -i '' -e "s/Skeleton/$camelcase/g" Rakefile
sed -i '' -e "s/skeleton/$snakecase/g" package.json
sed -i '' -e "s/3000/$port/g" Procfile.dev

bundle
yarn
bundle exec rails db:setup
git init
git add .
git commit -m "new skeleton app"

echo
echo "✨ All done! Your new app is ready to go."
