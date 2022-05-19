import { useWindowDimensions } from "react-native";

export const MIN_WIDTH = 360;
export const MIN_HEIGHT = 320;

export interface Scaling {
    /** Scale with viewport width - unchanged below min width */
    scaleW(widthAtMin: number): number;
    /** Scale with viewport height - unchanged below min height */
    scaleH(heightAtMin: number): number;
    /** Scale with viewport overall size - unchanged below min height or min width */
    scale(sizeAtMin: number): number;
}

export default function useScaling(): Scaling {
    const dimensions = useWindowDimensions();

    const widthScale = dimensions.width / MIN_WIDTH;
    const heightScale = dimensions.height / MIN_HEIGHT;
    const windowScale = Math.min(widthScale, heightScale)

    return {
        scaleW: widthScale < 1 ? x => x : x => x * widthScale,
        scaleH: heightScale < 1 ? x => x : x => x * heightScale,
        scale: windowScale < 1 ? x => x : x => x * windowScale
    }
}
