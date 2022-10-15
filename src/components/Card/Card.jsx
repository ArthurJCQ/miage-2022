import Button from "../Button/Button"
import Title from "../Title/Title"
import logo from '../../logo.svg';
import Text from "../Text/Text";

import './style.css';

const Card = ({ title, content, textButton, backgroundColor }) => {
    return (
        <section style={{ backgroundColor: backgroundColor }} className="card">
            <Title>{title}</Title>
            <img src={logo} alt="logo" style={{ height: '200px'}} />
            <Text>{content}</Text>
            <Button>{textButton}</Button>
        </section>
    );
}

export default Card;
