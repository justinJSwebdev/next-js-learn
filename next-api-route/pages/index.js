import { useRef } from "react"
export default function Home() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value
    const enteredFeedback = feedbackInputRef.current.value
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
