import { Bars } from "react-loader-spinner";

const Loader = () => {
    const style = {
        position: 'absolute',
        left: '50%'
    }

    return (
        <div style={style}>
            <Bars color="#198754" height={80} width={80} />
        </div>
    )
}

export default Loader;