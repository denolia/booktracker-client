REM npm run build

cd build
"C:\Program Files\7-Zip\7z.exe" a -tzip ..\deploy.zip *
cd ..
scp deploy.zip ubuntu@51.15.84.221:/home/ubuntu/booktracker/frontend/
ssh ubuntu@51.15.84.221 "cd /home/ubuntu/booktracker/frontend; unzip -o deploy.zip; sudo cp -R /home/ubuntu/booktracker/frontend /var/www/booktracker"