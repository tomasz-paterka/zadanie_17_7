var express = require('express');
var passports = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config = require('./config');
var app = express();
var googleProfile = {};