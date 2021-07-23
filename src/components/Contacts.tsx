import React, { useState } from 'react';
import Contact, { ContactAlternate } from './Contact';

interface IContact {
    name: string,
    email: string
}

const Contacts = () => {

    const [contact, setContact] = useState<IContact>({
        name: "",
        email: ""
    });

    const [contactList, setContactList] = useState<IContact[]>([]); 
    // console.log("contact", contact);

    const onClickAdd = () => {
        setContactList([...contactList, contact]);
        setContact({
            name: "",
            email: ""
        });
    }
    // console.log("contact list : ", contactList);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    const handleRemove = (email: string) => {
        const newContactList = contactList.filter(c => c.email !== email)
        setContactList(newContactList);
    }
    return (
        <div>
            <h1>Contact List</h1>
            <div className="form"> 
                <input 
                name="name" 
                placeholder="Contact Name"
                value = {contact.name}
                onChange={onChange}
                type="text" 
                />
                <input 
                name="email" 
                placeholder="Contact Email"
                value = {contact.email}
                onChange={onChange}
                type="text" 
                />
                <button onClick={onClickAdd}>
                    Add
                </button>
            </div>

            {
                contactList.map((cData) => <Contact key={cData.name} name={cData.name} email={cData.email} handleRemove={handleRemove}/>)
            }
        </div>
    );
};

export default Contacts;