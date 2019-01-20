import { SrUiComponent } from "react-strontium";
export interface IAnimationProps {
    in: boolean;
    appear?: boolean;
    leave?: boolean;
    enter?: boolean;
    step?: number;
    direction?: string;
    nonSteppedClass?: boolean;
}
export default class Animated extends SrUiComponent<IAnimationProps, {}> {
    performRender(): {};
    className(): string;
}
