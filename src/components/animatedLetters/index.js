import './index.scss'

// an array of letters will be passed to this function, and animated letters will be returned
// to be reused for different components
//1st arg:  className to be applied to the characters
//2nd arg:  array of the characters
//3rd arg:  the index (starting point, setting the delay of the characters for the animation)

const AnimatedLetters = ({ letterClassName, strArr, idx }) => {
  // returning span cause span is inline
  return (
    <span>
      {strArr.map((char, i) => (
        <span key={char + i} className={`${letterClassName} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
