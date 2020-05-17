import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import BlogPost from '../pages/BlogPost/BlogPost'
import './Home.css'
import About from '../pages/About/About'
import SkillSet from '../pages/SkillSet/SkillSet'
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost'

class Home extends Component {
  render(){
    return(
      <Router>

        <Fragment>
          <div className="navigation">
            <Link to="/" >Blogpost</Link>
            <Link to="/About" >About</Link>
            <Link to="/SkillSet" >Skillset</Link>
          </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/detail-post/:id" component={DetailPost} />
          <Route path="/About" component={About} />
          <Route path="/SkillSet" component={SkillSet} />
        </Fragment>
        
      </Router>
    )
  }
}

export default Home