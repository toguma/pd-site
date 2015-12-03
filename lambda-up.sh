#!/bin/sh

cd lambda/
zip -r lambda.zip ./*
aws lambda update-function-code --function-name pd-form --zip-file fileb://./lambda.zip --publish
rm -rf lambda.zip
