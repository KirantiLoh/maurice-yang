import type { SyntheticEvent } from 'react';
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { Github, Instagram, Linkedin, Twitter } from '@icons-pack/react-simple-icons';

const Footer = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        if (name && email && message) {
            emailjs.sendForm('service-kirantiloh', 'template_dy7j0k7', e.currentTarget, 'user_OYUf1eDui1cL9YUTBL4lG')
                .then(() => {
                    setToastMessage("Successfully sent");
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 3000);
                    setName('');
                    setEmail('');
                    setMessage('');
                    setLoading(false);
                }, (error) => {
                    setToastMessage("There was an error when sending, please try again later");
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 3000);
                    setLoading(false);
                    console.error(error);
                })
        }
    }

    return (
        <footer id="contact" className='snap-normal relative z-[1] px-5 sm:px-16 md:px-28 pt-28 pb-16 text-white w-full min-h-screen flex flex-col md:flex-row gap-10'>
            <form className='flex-[2] flex flex-col gap-5' onSubmit={handleSubmit}>
                <h1 className='text-3xl font-semibold'>Have a project in mind?</h1>
                <h2>Let&apos;s talk</h2>
                <input value={name} onChange={e => setName(e.target.value)} id='id_name' name="name" placeholder='Name' required type="text" className='focus:text-black p-2 rounded border-white border-2 bg-transparent focus:bg-white transition-all duration-300' />
                <input value={email} onChange={e => setEmail(e.target.value)} id="id_email" name="email" placeholder='Email' required type="email" className='focus:text-black p-2 rounded border-white border-2 bg-transparent focus:bg-white transition-all duration-300' />
                <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" name="message" placeholder='Message' required className='focus:text-black p-2 rounded border-white border-2 bg-transparent focus:bg-white resize-vertical transition-all duration-300' rows={5}></textarea>
                <button type='submit' disabled={loading} className='disabled:opacity-50 px-6 py-3 text-lg rounded-lg bg-primary-500 transition-all hover:bg-primary'>
                    Send
                </button>
            </form>
            <aside className='flex-1 md:pt-14'>
                <h2 className='text-xl'>You can also find me on</h2>
                <ul className="flex flex-col gap-6 mt-3">
                    <li>
                        <a href="https://www.instagram.com/maurice_yang/" className='flex items-center gap-2 text-lg duration-300 transition-all hover:text-primary' target="_blank" rel="noreferrer">
                            <Instagram /> Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/maurice-yang/" className='flex items-center gap-2 text-lg duration-300 transition-all hover:text-primary' target="_blank" rel="noreferrer">
                            <Linkedin /> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/KirantiLoh" className='flex items-center gap-2 text-lg duration-300 transition-all hover:text-primary' target="_blank" rel="noreferrer">
                            <Github /> Github
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/ImMauriceYang" className='flex items-center gap-2 text-lg duration-300 transition-all hover:text-primary' target="_blank" rel="noopener noreferrer">
                            <Twitter /> Twitter
                        </a>
                    </li>
                </ul>
            </aside>
            <div className="absolute bottom-0 left-0 w-full p-3 text-center">Made by Maurice Yang</div>
            <div className={`fixed bg-white text-black p-3 rounded bottom-4 ${showToast ? "left-4" : "-left-full"} transition-all duration-500`}>
                {toastMessage}
            </div>
        </footer>
    )
}

export default Footer