import './index.scss'
import AnimatedLetters from '../animatedLetters'

const About = () => {
  const strToPass = 'about me'
  const strA = [...strToPass]
  //   idx=15 == 1.5 seconds delay
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters strArr={strA} idx={15} />
        </h1>
      </div>
    </div>
  )
}

export default About
