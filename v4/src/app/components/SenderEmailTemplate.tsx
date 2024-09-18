import * as React from "react";

interface SenderEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const SenderEmailTemplate: React.FC<
  Readonly<SenderEmailTemplateProps>
> = ({ name, email, message }) => (
  <div
    style={{ maxWidth: "500px", margin: "1rem auto", padding: "0.5rem 1rem" }}
  >
    <h2>Hi, {name}!</h2>
    <p>
      Thanks for contacting me, I just want to let you know that I recieved your
      message, and I will get back to you shortly.
    </p>
    <div style={{ margin: "1rem 0" }}>
      <strong style={{ display: "inline-block", marginBottom: "6px" }}>
        Below is a copy of your message.
      </strong>
      <blockquote>{message}</blockquote>
    </div>
    <em>This is an automated reply.</em>
  </div>
);

export default SenderEmailTemplate;
