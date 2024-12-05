import './CampoInput.css';

export default function CampoInput( { props, style } ) {
    return (
        <input type={props.type} placeholder={props.placeholder} className='campoInput' style={style}/>
    );
}
