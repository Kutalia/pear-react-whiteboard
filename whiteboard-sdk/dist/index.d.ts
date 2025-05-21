import { JSX as JSX_2 } from 'react/jsx-runtime';

declare type CanvasFigureElement = DrawableElementCommon & {
    id: string | null;
    drawingForm: DrawingForms.RECTANGLE | DrawingForms.LINE | DrawingForms.TRIANGLE | DrawingForms.ELLIPSE | DrawingForms.CIRCLE;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
};

declare enum CursorMode {
    SELECTION = 0,
    PAINT = 1,
    ERASE = 2
}

export declare const DEFAULT_WHITEBOARD_HEIGHT = 720;

export declare const DEFAULT_WHITEBOARD_WIDTH = 1280;

declare type DrawableElement = CanvasFigureElement | FreeFormElement | TextElement;

declare type DrawableElementCommon = {
    beingDrawn: boolean;
    settings: Settings;
};

declare enum DrawingForms {
    LINE = "LINE",
    RECTANGLE = "RECTANGLE",
    ELLIPSE = "ELLIPSE",
    TRIANGLE = "TRIANGLE",
    CIRCLE = "CIRCLE",
    PENCIL = "PENCIL",
    PEN = "PEN",
    BRUSH = "BRUSH",
    ERASER = "ERASER",
    TEXT = "TEXT"
}

declare type FreeFormElement = DrawableElementCommon & {
    id: string | null;
    points: Point[];
    drawingForm: DrawingForms.PENCIL | DrawingForms.PEN | DrawingForms.BRUSH | DrawingForms.ERASER;
};

export declare const getVideoDimensions: (video: HTMLVideoElement | null | undefined) => {
    width: number;
    height: number;
};

declare type Point = [number, number];

declare type Props = {
    setCanvasStream?: (canvasStream: MediaStream) => void;
    isActive: boolean;
    receivedElement?: DrawableElement | null;
    closeWhiteboard?: () => void;
    darkMode?: boolean;
    isInForeground?: boolean;
    transparent?: boolean;
    fullscreen?: boolean;
};

declare type Props_2 = {
    onElementAdd: (element: DrawableElement | null) => void;
    videoElement: HTMLVideoElement | undefined;
    darkMode?: boolean;
};

declare type Settings = {
    strokeWidth: number;
    strokeColor: string;
    drawingForm: DrawingForms;
    cursorMode: CursorMode;
    fontSize: number;
    fontFamily: string;
    lineHeight: number;
    bold?: boolean;
    italic?: boolean;
};

declare type TextElement = DrawableElementCommon & {
    id: string;
    drawingForm: DrawingForms.TEXT;
    text: string;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
};

declare const Whiteboard: ({ setCanvasStream, isActive, receivedElement: _receivedElement, closeWhiteboard, darkMode, isInForeground, transparent, fullscreen }: Props) => JSX_2.Element;
export default Whiteboard;

export declare const WhiteboardStreamController: React.FC<Props_2>;

export { }
