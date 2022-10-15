import { useParams } from "react-router-dom";

const About = () => {
    const { id } = useParams();

    console.log(id);

    return <h1>About</h1>
}

export default About;
