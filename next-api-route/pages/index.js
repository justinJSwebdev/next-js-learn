import { useRef } from "react"
export default function Home() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  async function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value
    const enteredFeedback = feedbackInputRef.current.value
    const data = await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        text: enteredFeedback
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(data.json())
  }
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Your email address</label>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div>
            <label htmlFor="feedback">Your email address</label>
            <textarea type="text" id="feedback" rows="5" ref={feedbackInputRef} />
          </div>
          <button>Send Feedback</button>
        </form>
      </div>
    </>
  );
}
