const Checkbox = ({ onChange, children }) => {
    return (
        <>
            <label>{children}</label>
            <input type="checkbox" onChange={(event) => onChange(event)} />
        </>
    )
}

export default Checkbox;