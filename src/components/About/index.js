import './style.css';
import '../mainStyle.css'

import SectionElement from './SectionElement';

const elements = [
    {'icon': 'fa-solid fa-video', 'title': 'STYLE 1', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'},
    {'icon': 'fa-solid fa-table-cells-large', 'title': 'STYLE 2', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'},
    {'icon': 'fa-solid fa-gear', 'title': 'STYLE 3', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'},
    {'icon': 'fa-solid fa-cloud', 'title': 'STYLE 4', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'},
]

export default function About() {
    return (
        <div className='About'>
            <div className='top-block'>
                <h1>SECTION HEADING</h1>
                <h4>This is some text inside of a div block.</h4>
            </div>
            <div className='content-block'>
                {elements.map( (element) => {
                    return <SectionElement 
                            icon={element.icon}
                            title={element.title}
                            description={element.description}
                    />
                })}
            </div>
            <div className='bottom-block'>
                <h1>Here you can put some text</h1>
                <button>Call To Action</button>
            </div>
        </div>
    );
}