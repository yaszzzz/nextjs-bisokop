export default function Page({params}) {
    const {id} = params;
    return (
        <h1>movie with id: {id}</h1>
    )
}