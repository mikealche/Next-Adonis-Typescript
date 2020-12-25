rm -rf deploy/
cd packages/backend && node ace build --production
echo "Creating the deploy directory on"
cd ../.. && pwd && mkdir -p deploy/packages
cp -a packages/backend deploy/packages/
cp -a packages/backend/build deploy/packages/
cp -a packages/shared deploy/packages/
cp package.json deploy/
cp Procfile deploy/
