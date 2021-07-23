import React from 'react';

interface IProps {
    name: string,
    email?: string,
    handleRemove: (email: string) => void
}

// const Contact = (props : IProps) => {
const Contact = ({ name, email = "n/a", handleRemove} : IProps) => {
    return (
        <div className="card">
            <p>
                <strong>Name: </strong> {name}
            </p>
            <p>
                <strong>Email: </strong> {email}
            </p>
            <button onClick={() => handleRemove(email)}>
                Remove
            </button>
        </div>
    );
};

// alternate way to declare a component 
export const ContactAlternate : React.FC<IProps> = ({ name, email = "n/a"}) => {
    return (
        <div className="card">
            <p>
                <strong>Name: </strong> {name}
            </p>
            <p>
                <strong>Email: </strong> {email}
            </p>
        </div>
    );
};

export default Contact;