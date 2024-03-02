import React from 'react'
import styles from "./ProtectedRoutes.module.css"
import { Navigate } from 'react-router-dom'


export default function ProtectedRoutes(porps) {
 if(localStorage.getItem("userToken")){
     return porps.children
 }else{
    return <Navigate to="E-Commerce"/>
 }
}
  