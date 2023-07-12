import React from 'react'
import QuestionList from './QuestionList'
import './Question.css'
function QuestionSection() {
  return (
    <div className='box-q'>
      <div className='question-box'>
        <h1>Frequently Asked Questions</h1>
        <ul>
          <QuestionList h3={'What is Netflix?'} p={'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'} />
          <QuestionList h3={'How much does Netflix cost?'} p={'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'} />
          <QuestionList h3={'Where can I watch?'} p={'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.'} />
          <QuestionList h3={'How do I cancel?'} p={'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.'} />
          <QuestionList h3={'What can I watch on Netflix?'} p={'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'} />
          <QuestionList h3={'Is Netflix good for kids?'} p={'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.'} />
        </ul>
      </div>
      <div className='fix-q'>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <span>
          <input type='text' placeholder='Email address' />
          <button>Get Start &gt;</button>
        </span>
      </div>
    </div>
  )
}

export default QuestionSection