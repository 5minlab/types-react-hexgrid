declare module "react-hexgrid" {
    import React, { MouseEventHandler, DragEventHandler } from "react";
    import { CSSProperties } from "react";

    // Hexagon
    interface HexagonProps {
        q: number;
        r: number;
        s: number;
        fill?: string;
        cellStyle?: string | CSSProperties;
        className?: string;
        data?: object;
        onMouseEnter?: MouseEventHandler<Hexagon>;
        onMouseOver?: MouseEventHandler<Hexagon>;
        onMouseLeave?: MouseEventHandler<Hexagon>;
        onClick?: MouseEventHandler<Hexagon>;
        onDragStart?: DragEventHandler<Hexagon>;
        onDragEnd?: DragEventHandler<Hexagon>;
        onDragOver?: DragEventHandler<Hexagon>;
        onDrop?: DragEventHandler<Hexagon>;
        // children?: JSX.Element;
    }

    export class Hexagon extends React.Component<HexagonProps> { }

    interface TextProps {
        children: string;
        x?: string | number;
        y?: string | number;
        className?: string;
    }

    export class Text extends React.Component<TextProps> { }

    // models
    export class Hex {
        constructor(q: number, r: number, s: number);
        q: number;
        r: number;
        s: number;
    }

    class Point {
        constructor(x: number, y: number);
        x: number;
        y: number;
    }

    class Orientation {
        constructor(
            f0: number,
            f1: number,
            f2: number,
            f3: number,
            b0: number,
            b1: number,
            b2: number,
            b3: number,
            startAngle: number,
        );

        f0: number;
        f1: number;
        f2: number;
        f3: number;
        b0: number;
        b1: number;
        b2: number;
        b3: number;
        startAngle: number;
    }

    // root
    interface HexGridProps {
        width: string | number;
        height: string | number;
        viewBox: string;
        // children: React.Component;
    }

    export class HexGrid extends React.Component<HexGridProps> { }

    interface LayoutProps {
        // children: JSX.Element;
        className?: string,
        flat?: boolean,
        origin?: Point,
        size?: Point,
        spacing?: number,
    }

    export class Layout extends React.Component<LayoutProps> { }

    interface PatternProps {
        id: string;
        link: string;
        size?: Point;
    }

    export class Pattern extends React.Component<PatternProps> { }

    interface PathProps {
        start?: Hex,
        end?: Hex,
        layout?: object,
    }

    export class Path extends React.Component<PathProps> { }

    export class HexUtils {
        static DIRECTIONS: Hex[];

        static equals(a: Hex, b: Hex): boolean;
        static add(a: Hex, b: Hex): Hex;
        static subtract(a: Hex, b: Hex): Hex;
        static multiply(a: Hex, k: number): Hex;
        static lengths(hex: Hex): number;
        static distance(a: Hex, b: Hex): number;
        static direction(direction: number): Hex;
        static neighbour(hex: Hex, direction: number): Hex;
        static neighbours(hex: Hex): Hex[];
        static round(hex: Hex): Hex[];
        static hexToPixel(hex: Hex, layout: Layout): Point;
        static pixelToHex(point: Point, layout: Layout): Hex;
        static lerp(a: number, b: number, t: number): number;
        static hexLerp(a: Hex, b: Hex, t: number): Hex;
        static getID(hex: Hex): string;
    }

    export class GridGenerator {
        static ring(center: Hex, mapRadius: number): Hex[];
        static spiral(center: Hex, mapRadius: number): Hex[];
        static parallelogram(q1: number, q2: number, r1: number, r2: number): Hex[];
        static triangle(mapSize: number): Hex[];
        static hexagon(mapRadius: number): Hex[];
        static rectangle(mapWidth: number, mapHeight: number): Hex[];
        static orientedRectangle(mapWidth: number, mapHeight: number): Hex[];
    }
}


