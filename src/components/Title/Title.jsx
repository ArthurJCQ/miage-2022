import './style.css';

const Title = ({ children, size = 'md', underlined = false }) => {
    return (
        <h1 
        style={{textDecoration: underlined ? 'underline' : undefined}} 
        className={`title--${size}`}>
            {children}
        </h1>
    );
}

export default Title;
