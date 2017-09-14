#! /usr/local/bin/node
var quote = require('./add-dep')
var transformer = require('console-in-transformer')

transformer(quote, '\n')