import './style.css';

export default function SectionElement(props) {
    return (
        <div className='content-block-element'>
            <i class={props.icon}></i>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <h5>Text Link</h5>
        </div>
    );
}