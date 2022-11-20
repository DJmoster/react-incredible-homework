import './style.css';
import '../mainStyle.css';

export default function Contact() {
    return (
        <div className='Contact'>
            <div className='top-block'>
                <h1>CONTACT FORM</h1>
                <h4>This is some text inside of a div block.</h4>
            </div>
            <div className='form-block'>
                <div>
                    <input type="text" placeholder='Name'/>
                    <input type="email" placeholder='Email'/>
                </div>
                <textarea placeholder='Message'></textarea>
                <button>Send Message</button>
            </div>
        </div>
    );
}