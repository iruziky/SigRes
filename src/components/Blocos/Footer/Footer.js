import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer({ icons = [] }) {
    return (
        <>
            <div className="FooterSpacing"></div>
            <div className='Footer'>
                {icons.map((icon, index) => (
                    <Link to={icon.link} key={index} className="FooterIconLink">
                        <div className="FooterIconContainer">
                            <img src={icon.src} alt={icon.alt} className={icon.className} />
                            <p className="FooterIconName">{icon.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
