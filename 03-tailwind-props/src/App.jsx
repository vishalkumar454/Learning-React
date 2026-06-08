import { useState } from 'react'
import './App.css'
import Card from './Components/Card.jsx';

function App() {

  return (
    <>
      <h1 className='text-pink-300 p-4 rounded-xl bg-green-300 line-through border w-30' >Tailwind</h1>

      <Card userName="chitChat 1 " msg=" message 1" link="https://imgs.search.brave.com/a_DtHLi-mTfJP4xTJ18O10EU_eV1fa-0k8jwIMID7sc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/NTA2NDI4OC9waG90/by9maXZlLWJsYW5r/LXNwZWVjaC1idWJi/bGVzLWFzY2VuZGlu/Zy1yZXByZXNlbnRp/bmctY29tbXVuaWNh/dGlvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Mmh6T0w0/WDZVVDNId0ViZFBR/NF9URXJzWFhoQnU5/NnNyaldNb0lXcExE/TT0 "/>
      <Card userName="chitChat 2 " msg=" message 2" link = "https://imgs.search.brave.com/7qhrob2qmQOB9yJ-V9UPkRMEsH9K2l-Ymka1pY-Z-H0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/NTU0MjMyNC92ZWN0/b3Ivc3BlZWNoLWJ1/YmJsZXMtY29tbXVu/aWNhdGlvbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NHhP/Q0JJU2l3elZYSDhY/Q0FKS2VJMW44Rmw0/NFIwTEFFdnpIZjFJ/S0UtOD0" />
      <Card userName="chitChat 3 " msg=" message 3" link="https://imgs.search.brave.com/bAyYhBF3Wu7DQd4Jg0RqGNRUfWyr0qg9q80-dauWEIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/NDY0NDA5Mi9waG90/by9zcGVlY2gtYnVi/Ymxlcy1jb25uZWN0/ZWQtd2l0aC1zaGFy/ZWQtb3B0aW9ucy1w/YXBlci1jcmFmdC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/T3F0ZW1MVEp3dV9m/X0VwMmJPcjFWSEo3/QVc2WmZXN2U5dmw0/MXNhTVdWaz0" />
    </>
  )
}

export default App
