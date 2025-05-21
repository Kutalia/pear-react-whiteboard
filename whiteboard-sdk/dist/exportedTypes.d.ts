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

export declare type DrawableElement = CanvasFigureElement | FreeFormElement | TextElement;

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

declare type Point = [number, number];

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

export { }
