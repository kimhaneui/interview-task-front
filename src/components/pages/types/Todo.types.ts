// 커스텀 속성 타입 정의
export interface TabProps {
    isActive: boolean;
}

export interface CheckboxProps {
    isChecked: boolean
}

export interface Itodo {
    id: number;
    text: string;
    completed: boolean;
}