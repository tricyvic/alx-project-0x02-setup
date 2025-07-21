// interfaces
export interface CardProps{
    id?: number;
    title: string;
    content: string;
    img?: string;
}

export interface ButtonProps{
    size: "small" | "medium" | "large";
    shape: "rounded-sm" | "rounded-md" | "rounded-full";
}

export interface PostProps {
    userId: number;
    id?:     number;
    title:  string;
    content:   string;
}