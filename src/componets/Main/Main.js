import React from 'react'
import { Redirect, Route, Switch } from "react-router-dom"
import HomePage from "../HomePage/HomePage"
import ProductsPage from "../ProductsPage/ProductsPage"
import ContactsPage from "../ContactsPage/ContactsPage"
import NotFoundPage from "../NotFoundPage/NotFoundPage"
import Product from "../Product/Product"

function Main(props) {
  return (
    <main className="container row">
      <Switch>
        <Route path="/kbbrl"> <Redirect to='/' /> </Route>
        <Route path="/" exact> <HomePage /> </Route>
        <Route path="/products" exact> <ProductsPage title={'Products'} /> </Route>
        <Route path="/contacts"> <ContactsPage title={'Contacts'} /> </Route>
        <Route path="/404"> <NotFoundPage title={'404 | Not Found'} /> </Route>
        <Route path="/products/:id" exact> <Product /> </Route>
        <Redirect to="/404" />
      </Switch>
    </main>
  )
}

export default Main
