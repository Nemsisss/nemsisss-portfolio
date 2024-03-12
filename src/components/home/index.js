import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../animatedLetters'
import Logo from './logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const name = 'lobodan'
  const info = 'web developer.'
  const nameArray = [...name]
  const jobArray = [...info]

  //after 4seconds, change the className
  //empty array for dependencies since it only runs once
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    // Return a cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClassName={letterClass}
            strArr={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClassName={letterClass}
            strArr={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / JavaScript Expert</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
