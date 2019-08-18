cd ..

mkdir deploy
mkdir deploy\src
mkdir deploy\public
xcopy booktracker\public deploy\public /e
xcopy booktracker\src deploy\src /e
copy "booktracker\package.json" deploy
copy "booktracker\package-lock.json" deploy 

cd deploy
"C:\Program Files\7-Zip\7z.exe" a -tzip ..\deploy.zip *

cd ..
scp deploy.zip ubuntu@51.15.84.221:/home/ubuntu/booktracker/frontend
ssh ubuntu@51.15.84.221 "cd booktracker/frontend; unzip -o deploy.zip"