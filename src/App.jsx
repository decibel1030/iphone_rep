import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Features from "./components/Features"
import Footer from "./components/Footer"
import DeviceInfo from "./components/DeviceInfo"
import * as Sentry from "@sentry/react";


function App() {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <DeviceInfo/>
      <Footer/>
    </main>
  )
}

export default Sentry.withProfiler(App);
