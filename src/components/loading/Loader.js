import Lottie from 'react-lottie';
import animationData from '../../resources/loader.json'


function Loader({ primaryClass, animationClass}) {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return(
        <div className={primaryClass}>
            <div className={animationClass}>
                <Lottie 
                    options={defaultOptions}
                    height={300}
                    width={300}
                />
            </div>

        </div>
    )
}


export default Loader;