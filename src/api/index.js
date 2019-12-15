import { Component } from "react";
import * as sheet from './sheet'
import * as user from './user'
import '../mock'

const http = {
  ...sheet,
  ...user
}

Component.prototype.$http = http