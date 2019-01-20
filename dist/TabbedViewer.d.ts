/// <reference types="react" />
import ITabConfig from "./ITabConfig";
import { SrUiComponent } from "react-strontium";
interface ITabbedViewerProps {
    tabSelected: (id: string) => void;
    tabs: ITabConfig[];
    currentSelection: string;
    className?: string;
}
export default class TabbedViewer extends SrUiComponent<ITabbedViewerProps, {}> {
    onComponentMounted(): void;
    onNewProps(props: ITabbedViewerProps): void;
    checkValidTab(id?: string): void;
    performRender(): JSX.Element;
    validId(id: string): boolean;
    isId(id: any): boolean;
    tabElement(tab: ITabConfig, index: number): JSX.Element;
    tabSelected(id: string): void;
    tabContent(): JSX.Element;
}
export {};
