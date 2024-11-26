
const Hello = ({params}) => {
    const {nama} = params;
    return (
        <div>
            <h1>halo {nama}</h1>
        </div>
    )
}

export default Hello;