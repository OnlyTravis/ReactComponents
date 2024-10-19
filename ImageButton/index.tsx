import styles from './image_button.module.css';

interface ImageButtonProp {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    src: string,
    alt?: string,
    className?: string,
    animation?: string,
    tooltip?: string
}
// animation: "", expand, brighten, darken

export default function ImageButton({onClick, src, alt=src, className="", animation="", tooltip=""}: ImageButtonProp) {
    return (
    <button onClick={onClick} className={ `${styles.image_button} ${className} ${animation?styles[animation]:""}` }>
        <img src={src} alt={alt}></img>
        {tooltip?<div> {tooltip} </div>:<></>}
    </button>  
    );
}