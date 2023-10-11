import * as React from "react";

interface ReceiverEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ReceiverEmailTemplate: React.FC<
  Readonly<ReceiverEmailTemplateProps>
> = ({ name, email, message }) => (
  <div style={{ maxWidth: "500px", margin: "1rem auto", padding: "0.5rem" }}>
    <h2 style={{ marginBottom: "0.5rem" }}>New Message from {name}</h2>
    <p>You have a new message.</p>

    <div>
      <strong style={{ display: "block", marginBottom: "6px" }}>
        Message Details
      </strong>

      <div style={{ marginTop: "0.75rem" }}>
        <strong style={{ display: "inline-block", marginRight: "8px" }}>
          Name:
        </strong>
        <span>{name}</span>
      </div>
      <div style={{ marginTop: "0.75rem" }}>
        <strong style={{ display: "inline-block", marginRight: "8px" }}>
          Email:
        </strong>
        <span>{email}</span>
      </div>
      <div style={{ marginTop: "0.75rem" }}>
        <strong style={{ display: "block", marginBottom: "6px" }}>
          Message:
        </strong>
        <blockquote>{message}</blockquote>
      </div>
    </div>

    <div style={{ margin: "1rem 0" }}>
      <em>This is an automated reply.</em>
    </div>
  </div>
);

export default ReceiverEmailTemplate;
