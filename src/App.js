import { useState } from 'react';
import './App.css';
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Education } from "./components/Education/Education";
import { Experience } from './components/Experience/Experienece';
import { More } from './components/More/More'

import { CV } from "./CV/CV";


const { hero, education, experience, languages, habilities } = CV;

function App() {
  const [showExperience, setShowExperience] = useState(true)
  return (
    <div className="App">
     <Hero hero={hero}/>
     <About hero={hero} />
    
    <div className='container-button'>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowExperience(true)}
            >
              Experience
            </button>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowExperience(false)}
            >
              Education
            </button>
            <div className='container'>
        {showExperience ? (
          <Experience experience={experience}
           />
        ) : (
          <Education education={education} />
        )}
      </div>
    </div>
    <More
        languages={languages}
        habilities={habilities}
	      />
    </div>
  );
}

export default App;
