import React, { useEffect, useState } from 'react'
import "../styles/wongroute.css";
import { Link, useParams } from 'react-router-dom';

let validRoutes = [
  "login", "signup", "reset", "password", "profile", "signin", "register", "home", "recovery"
]
var checkAlmostEquivalent = function (word1: string, word2: string) {

  let s1 = new Set(word1).size;
  let s2 = new Set(word2).size;
  let s = new Set(word1 + word2).size;
  let c = s1 + s2 - s;
  return c;
};

function validateRoute(str: string) {
  let store = [];
  for (let route of validRoutes)
    store[checkAlmostEquivalent(route, str)] = route;

  if (store.length > 2) return store[store.length - 1];

  return "home"
}

export default function WrongRoute() {

  const param = useParams();
  let [valid, setValid] = useState("home");
  useEffect(() => {
    let str = param["*"];
    if (typeof str == "string")
      setValid(validateRoute(str))
  }, [param])

  return (
    <div className='flex justify-center items-center flex-col'>
      galat jaga aaye beedu
      <h1>
        do you want to go
      </h1>
      <Link to={`/${valid}`} className='bg-blue-50 to-blue-50' >{valid} page</Link>
    </div>

  )
}
