import "./SignupWidget.css";
import PropTypes from "prop-types";
import { useState } from "react";

const SignupWidget = ({ title, content, simulateNetworkRequestTime }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      setBusy(true);
      await new Promise((resolve) =>
        setTimeout(resolve, simulateNetworkRequestTime),
      );
      setMessage(`Thanks for subscribing, ${email}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form
      data-testid="signupWidget"
      className="signup-widget"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <h2 data-testid="signupWidgetTitle">{title}</h2>

      {isSubscribed ? (
        <p data-testid="signupWidgetMessage" className="message">
          {message}
        </p>
      ) : (
        <>
          <p data-testid="signupWidgetContent">{content}</p>
          <div className="input-row">
            <input
              data-testid="signupWidgetInput"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={busy}
            />
            <button
              data-testid="signupWidgetButton"
              type="submit"
              disabled={busy}
            >
              {busy ? "Joining..." : "Join"}
            </button>
          </div>
          {message && <p className="error">{message}</p>}
        </>
      )}
    </form>
  );
};

SignupWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  simulateNetworkRequestTime: PropTypes.number,
};

SignupWidget.defaultProps = {
  simulateNetworkRequestTime: 2000,
};

export default SignupWidget;
