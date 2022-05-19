import { useWindowDimensions } from "react-native";

export const MIN_WIDTH = 360;
export const MIN_HEIGHT = 320;

export interface Scaling {
    width(widthAtMin: number): number;
    height(heightAtMin: number): number;
    size(sizeAtMin: number): number;
}

export default function useScaling(): Scaling {
    const dimensions = useWindowDimensions();

    const widthScale = dimensions.width / MIN_WIDTH;
    const heightScale = dimensions.height / MIN_HEIGHT;
    const windowScale = Math.min(widthScale, heightScale)

    return {
        width: widthScale < 1 ? x => x : x => x * widthScale,
        height: heightScale < 1 ? x => x : x => x * heightScale,
        size: windowScale < 1 ? x => x : x => x * windowScale
    }
}
