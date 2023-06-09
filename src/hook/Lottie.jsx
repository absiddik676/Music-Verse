import { useEffect, useRef } from "react";
import lottie from 'lottie-web';


    const LottieAnimation = (animationData) => {
        const animationContainer = useRef(null);

        useEffect(() => {
            const anim = lottie.loadAnimation({
                container: animationContainer.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationData,
            });

            return () => {
                anim.destroy();
            };
        }, []);

        return <div ref={animationContainer} />;
    };
export default LottieAnimation
   


